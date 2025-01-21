import onCreateForm from "./createForm.js";


const form = document.getElementById("createForm");
console.log("got form", form);
form.addEventListener("submit", onCreateForm);
