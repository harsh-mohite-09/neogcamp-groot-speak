var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/morse.json";

function getURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something is wrong with the sever! Please try again later.");
}

function clicktHandler() {
  var inputText = txtInput.value;
  fetch(getURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clicktHandler);
