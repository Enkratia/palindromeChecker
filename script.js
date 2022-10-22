const txtInput = document.querySelector(".inputs input"),
  infoText = document.querySelector(".info-text"),
  checkBtn = document.querySelector("button");

let filterInput;

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoText.style.display = "block";
  if (reverseInput !== filterInput) {
    return infoText.innerHTML = `No, <span>"${txtInput.value}"</span> is not a palindrome!`;
  }
  infoText.innerHTML = `Yes, <span>"${txtInput.value}"</span> is a palindrome!`;
})

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/ig, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoText.style.display = "none";
  checkBtn.classList.remove("active");
})
