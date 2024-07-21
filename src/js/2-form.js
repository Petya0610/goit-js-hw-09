const form = document.querySelector(".feedback-form")

const userData = JSON.parse(localStorage.getItem("user")) || {email: "", message: ""}; 

form.addEventListener("input", onInput)

form.addEventListener("submit", onSubmit)

const { email, message } = form.elements;
email.value = userData.email;
message.value = userData.message;

function onInput(event) {
  userData[event.target.name] = event.target.value.trim();

  localStorage.setItem("user", JSON.stringify(userData))

}



function onSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  const trimedEmail = email.value.trim();
  const trimedMessage = message.value.trim();
  if (!trimedEmail && !trimedMessage) {
    return alert("enter data");
  }
  console.log({ email: trimedEmail, message: trimedMessage })

  event.currentTarget.reset();
  localStorage.removeItem("user")

}

