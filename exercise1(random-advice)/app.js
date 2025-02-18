const number = document.querySelector("#number");
const advice = document.querySelector("#text");
const btn = document.querySelector("#btn");

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    number.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
  } catch (error) {
    advice.textContent = "Oops! Something went wrong.";
    console.log("Error fetching advice:", error);
  }
}

btn.addEventListener("click", fetchAdvice);
