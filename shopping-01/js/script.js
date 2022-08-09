let elForm = document.querySelector(".shopping__form");
let elInput = elForm.querySelector(".shopping__input");
let elList = document.querySelector(".shopping__list");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputResult = elInput.value;
  let elShoppingItem = document.createElement("li");

    for (shoppings of inputResult) {
      let  shoppings = [];
      elList.appendChild(elShoppingItem);
      shoppings.push(inputResult);
      elShoppingItem.textContent =  shoppings;
    }
  
    elInput.value = "";
})


