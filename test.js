let arr = JSON.parse(localStorage.getItem("email")) || [];
document.querySelector("#email2").addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  if (arr.includes(email)) {
    alert("Sign in Successfull...");
    alert("Continue your journey with Lyst Best Products...");
  } else {
    alert("invalid credentials");
  }
});
