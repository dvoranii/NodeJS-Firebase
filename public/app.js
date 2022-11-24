import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const getBtn = document.getElementById("get");
const postBtn = document.getElementById("post");
const input = document.getElementById("input");
let output = document.querySelector(".output");

let template = "";

const baseUrl = "http://localhost:8383/";

getBtn.addEventListener("click", getInfo);
postBtn.addEventListener("click", postInfo);

async function getInfo(e) {
  e.preventDefault();
  const res = await fetch(baseUrl + "info/james?key=hello", {
    method: "GET",
  });

  const data = await res.json();
  //   input.value = data.info;
  console.log(data.info);

  const firebaseConfig = {
    apiKey: data.info,
    authDomain: "cgl-forms.firebaseapp.com",
    databaseURL: "https://cgl-forms-default-rtdb.firebaseio.com",
    projectId: "cgl-forms",
    storageBucket: "cgl-forms.appspot.com",
    messagingSenderId: "1008506608692",
    appId: "1:1008506608692:web:47818afefcc2935608be61",
  };

  const app = initializeApp(firebaseConfig);
  let db = getFirestore(app);
  console.log(db);
}

async function postInfo(e) {
  e.preventDefault();
  if (input.value == "") {
    return;
  }
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel: input.value,
    }),
  });
}
