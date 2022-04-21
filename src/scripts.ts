const navElementArr = ["Home", "Events", "About", "Blog", "Contact"]

const navElementBox = document.querySelector<HTMLDivElement>(".header__nav")

navElementArr.forEach((item) => {
  const aHref = document.createElement("a")
  aHref.innerText = item
  aHref.href = "#"
  navElementBox.appendChild(aHref)
})

const watchHowItWorksBtnElement =
  document.querySelector<HTMLButtonElement>(".hero__play")

const toasterElement = document.querySelector<HTMLDivElement>(".toast")

watchHowItWorksBtnElement.addEventListener("click", () => {
  let counter = 0
  const interval = setInterval(() => {
    counter += 1
    toasterElement.style.visibility = "visible"
    if (counter === 900) {
      toasterElement.style.visibility = "hidden"
      clearInterval(interval)
    }
  }, 10)
})

const carouselBtnLeftElement = document.querySelector<HTMLButtonElement>(
  ".promotion__arrow-button--left"
)
const carouselBtnRightElement = document.querySelector<HTMLButtonElement>(
  ".promotion__arrow-button--right"
)
const carouselBoxElement =
  document.querySelector<HTMLDivElement>(".carousel-box")
const beijingElement = document.querySelector<HTMLDivElement>(
  ".promotion__beijing"
)
const turkeyElement =
  document.querySelector<HTMLDivElement>(".promotion__turkey")
const pakistanElement = document.querySelector<HTMLDivElement>(
  ".promotion__pakistan"
)
const carouselElement =
  document.querySelector<HTMLDivElement>(".carousel__element")

carouselBtnLeftElement.addEventListener("click", () => {
  if (parseInt(carouselElement.style.order) > 1) {
    carouselElement.style.order = (
      parseInt(carouselElement.style.order) - 1
    ).toString()
  } else {
    carouselElement.style.order = "3"
  }
})

carouselBtnRightElement.addEventListener("click", () => {
  if (parseInt(carouselElement.style.order) === 1) {
    carouselElement.style.order = "2"
  } else if (parseInt(carouselElement.style.order) === 2) {
    carouselElement.style.order = "3"
  } else if (parseInt(carouselElement.style.order) === 3)
    carouselElement.style.order = "1"
})

const emailInputElement =
  document.querySelector<HTMLInputElement>(".footer__input")
const subscribeBtnElement = document.querySelector(".footer__submit-btn")
const emailUlElement = document.querySelector(".footer__email-list")

subscribeBtnElement.addEventListener("click", (e) => {
  // e.preventDefault()
  const inputValue = emailInputElement.value
  const newLiElement = document.createElement("li")
  newLiElement.innerText = inputValue

  emailUlElement.appendChild(newLiElement)
})

const footerElement = document.querySelector<HTMLDivElement>(".footer")
emailInputElement.addEventListener("input", (e) => {
  const footerColors = ["red", "blue", "purple", "yellow", "green", "orange"]
  let color = footerColors[Math.floor(Math.random() * footerColors.length)]
  footerElement.style.backgroundColor = color
})

subscribeBtnElement.addEventListener("click", (e) => {
  // e.preventDefault()
  emailInputElement.value.length > 3
})
