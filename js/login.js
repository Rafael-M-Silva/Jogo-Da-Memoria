const loginInput = document.querySelector(".login__input")
const loginButton = document.querySelector(".login__button")

/* validando o botão para que seja possivel presionar quando tiver mais de 2 caracteres no campo */
const validationForm = ({ target }) => {
  if(target.value.length > 2){
    loginButton.removeAttribute("disabled")
    return;
  }

  loginButton.setAttribute("disabled", "")
}

const handleSubmit = (e) => {
  e.preventDefault()

  /* salvando os dados do input no local storage */
  localStorage.getItem("player", loginInput.value)

  /* mandando o player para outra pagina */
  window.location = "./pages/game.html"
}

loginInput.addEventListener("input", validationForm)
loginButton.addEventListener("click", handleSubmit)