//your JS code here. If required.
let form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());

  if (name === "" || age === "") {
    alert("Please enter valid details");
    return
  }

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough`);
      }
    }, 4000);
  });

  myPromise
    .then((data) => {
      alert(data);
		form.submit();
    })
    .catch((err) => {
      alert(err);
		form.submit();
    });
});
