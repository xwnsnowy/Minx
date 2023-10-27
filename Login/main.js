const listAccount = [
  {
    username: "account1",
    password: "account1",
    status: "active",
  },
  {
    username: "account2",
    password: "account2",
    status: "active",
  },
  {
    username: "account3",
    password: "account3",
    status: "deactive",
  },
];

document.getElementById("loginButton").addEventListener("click", function (e) {
  const acc = document.querySelector("#username").value;
  const pass = document.querySelector("#password").value;
  let loginSuccessful = false;
  for (const account of listAccount) {
    if (
      account.username === acc &&
      account.password === pass &&
      account.status === "active"
    ) {
      loginSuccessful = true;
      alert("Login successfully!");
      break;
    }
    if (
      account.username === acc &&
      account.password === pass &&
      account.status === "deactive"
    ) {
      loginSuccessful = true;
      e.preventDefault();
      alert("The account does not have login permissions!");
      break;
    }
  }
  if (!loginSuccessful) {
    e.preventDefault();
    alert("Login failed. Please check your username or password!");
  }
});
