import { toggleSubMenu, renderList, changeQuantity } from "./functions.js";

const menuBar = document.querySelector("#function-buttons #menu-bar");
menuBar.onclick = () => {
  toggleSubMenu("show", "#navbar-wrap");
};

const template = `
    <li>
        <img src="./assets/img/dish-1.png" alt="">
        <div class="dish-info">
            <span class="name">Coctail Mojito</span>
            <span class="price">70.000 đ</span>
        </div>
        <div class="quantity-button">
            <button data-calculator-type="-">
                <i class="fa-solid fa-minus"></i>
            </button>
            <span class="font-weight-400">1</span>
            <button data-calculator-type="+">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </li>
`;

renderList(template, "#sub-menu > ul", 7);
changeQuantity();

const dishBookingBtns = document.querySelectorAll(
  "#menu #dish-list .dish-booking > button"
);
const toastMessage = document.querySelector("#toast-message");
console.log(dishBookingBtns);

dishBookingBtns.forEach((btn) => {
  btn.onclick = () => {
    console.log("click");
    toastMessage.classList.add("show");
    setTimeout(() => {
      toastMessage.classList.remove("show");
    }, 4000);
  };
});
