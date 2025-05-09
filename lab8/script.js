function getRandomChars(min, max) {
  const length = Math.floor(Math.random() * (max - min + 1)) + min;
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

let wrongCount = 0;

window.onload = function () {
  const container = document.getElementById("container");
  container.focus();
  container.innerText = getRandomChars(0, 2);
};

window.addEventListener("keyup", function (e) {
  const container = document.getElementById("container");
  const currentText = container.innerText;

  if (currentText.length > 0 && e.key === currentText[0]) {
    container.innerText = currentText.slice(1);
    wrongCount = 0;
  } else {
    wrongCount++;
  }

  container.innerText += getRandomChars(1, 3);

 if (wrongCount >= 3) {
    container.innerText += getRandomChars(6, 6);
    wrongCount = 0; 
  }
});