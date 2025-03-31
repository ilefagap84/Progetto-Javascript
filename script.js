let aggiungi = document.querySelector("#aggiungi");
let sottrai = document.querySelector("#sottrai");
let reset = document.querySelector("#reset");

aggiungi.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

 
  output.innerText = result;
});

sottrai.addEventListener("click", function() {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
})

reset.addEventListener("click", function() {
  let output = document.querySelector("#output");
  let result = Number(output.innerText);

  output.innerText = 0;
})




