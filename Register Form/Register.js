const fname = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Btn = document.getElementById("Btn");

const arr = [];

Btn.addEventListener("click", function () {
  let userDetails = {
    name: fname.value,
    surname: surname.value,
    email: email.value,
    password: password.value,
  };

  arr.push(userDetails);

  localStorage.removeItem("userDetails");
  localStorage.setItem("userDetails", JSON.stringify(arr));
});
