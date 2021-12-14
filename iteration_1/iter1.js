// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const button$$ = document.querySelector("#btnToClick");
document.getElementById("btnToClick").addEventListener("click", handleButton);

function handleButton() {
  console.log(`Welcome Upgrader`);
}

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus$$ = document.querySelector(".focus");
focus$$.addEventListener("focus", handleFocus);

function handleFocus(event) {
  console.log(event.target.value);
}
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input$$ = document.querySelector(".value");
input$$.addEventListener("input", handleInput);

function handleInput(event) {
  console.log(event.target.value);
}
