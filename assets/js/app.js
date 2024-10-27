// HEADER VÀ FOOTER_____________________________________________________________
function toggleSubMenu(classActive, selector) {
    let item = document.querySelector(selector)

    try {
        item.classList.toggle(classActive)
    } catch(error) {
        console.log("Function toggleSubMenu: ", error)
    }
}

function renderList(template, selector, repeat) {
    try {
        let listElements = document.querySelectorAll(selector)
    
        listElements.forEach((listElement) => {
            let newText = ""

            for (let i = 0; i < repeat; i++) {
                newText += template
            }

            listElement.innerHTML = newText
        })
    } catch(error) {
        console.log("Function renderList: ", error)
    }
}

function changeQuantity(selector) {
    const calculate = {
        "+": (a, b) => (a + b),
        "-": (a, b) => (a - b) >= 0 ? (a - b) : 0
    }

    const elements = document.querySelectorAll(selector)
    

    elements.forEach((element) => {
        let buttons = element.querySelectorAll("button")

        buttons.forEach((button) => {
            button.onclick = () => {
                let displayElement = element.querySelector("span")
                let quantity = parseInt(displayElement.textContent)
                let calculateType = button.getAttribute("data-calculator-type")

                displayElement.textContent = calculate[calculateType](quantity, 1)
            }
        })
    })
}


const menuBar = document.querySelector("#function-buttons #menu-bar")
menuBar.onclick = () => {
    toggleSubMenu("show", "#navbar-wrap")
}

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
`

renderList(template, "#sub-menu > ul", 7)
changeQuantity("#sub-menu li > .quantity-button")







// MENU_______________________________________________________________________
const menu_data = {
    sections: {
        selector: "article > section",
        titleSelector: "figcaption > h3",
        scriptSelector: "figcaption > p",
        imgSelector: "figure > img",
        list: [
            {
                title: "Hải sản tươi sống",
                script: "Hải sản tươi sống được cập nhật hàng ngày, đảm bảo chất lượng tươi ngon nhất. Hãy để chúng tôi chiều lòng bạn với những món hải sản chế biến theo phong cách riêng.",
                imgPath: "./assets/img/menu/images_2.webp",
                dishTemplate: `
                    <li class="dish-item">
                    <img src="./assets/img/menu/images_1.jpg" alt="">
                    <div class="dish-inner">
                        <h4 class="font-weight-500">Tôm hấp</h4>
                        <p class="script">Khám phá hương vị Nhật Bản tinh tế với combo sushi đa dạng, từ vị béo ngậy của cá hồi đến vị ngọt thanh của tôm.</p>
                        <div class="wrap">
                            <div class="time-produce">
                                <i class="fa-regular fa-clock"></i>
                                <span>30 phút</span>
                            </div>
                            <p class="price">1.000.000 đ</p>
                        </div>
                    </div>
                    <div class="dish-booking">
                        <button>Đặt món</button>
                    </div>
                </li>
                `
            },
            {
                title: "Ẩm thực Nhật Bản",
                script: "Khám phá hương vị Nhật Bản tinh tế với những món sushi, sashimi, tempura... được chế biến bởi các đầu bếp giàu kinh nghiệm.",
                imgPath: "./assets/img/menu/images_3.jpg",
                dishTemplate: `
                    <li class="dish-item">
                        <img src="./assets/img/menu/images_3.jpg" alt="">
                        <div class="dish-inner">
                            <h4 class="font-weight-500">Tôm hấp</h4>
                            <p class="script">Khám phá hương vị Nhật Bản tinh tế với combo sushi đa dạng, từ vị béo ngậy của cá hồi đến vị ngọt thanh của tôm.</p>
                            <div class="wrap">
                                <div class="time-produce">
                                    <i class="fa-regular fa-clock"></i>
                                    <span>30 phút</span>
                                </div>
                                <p class="price">500.000 đ</p>
                            </div>
                        </div>
                        <div class="dish-booking">
                            <button>Đặt món</button>
                        </div>
                    </li>
                `
            },
            {
                title: "Thế giới đồ uống đa dạng",
                script: "Từ những ly cocktail sáng tạo đến những chai rượu vang cổ điển, chúng tôi có tất cả những gì bạn cần để tận hưởng bữa ăn trọn vẹn.",
                imgPath: "./assets/img/menu/images_5.jpg",
                dishTemplate: `
                    <li class="dish-item">
                    <img src="./assets/img/menu/images_4.png" alt="">
                    <div class="dish-inner">
                        <div class="text-wrap">
                            <h4 class="font-weight-400">Whisky Jack</h4>
                            <p class="script">Rượu vang đỏ</p>
                        </div>
                        
                        <div class="wrap">
                            <div class="origin">
                                <span>Xuất xứ: </span>
                                <span>Pháp</span>
                            </div>
                            
                            <div class="capacity">
                                <i class="fa-solid fa-bottle-droplet"></i>
                                <span>750ml</span>
                            </div>
                        </div>
                    </div>
                    <div class="dish-booking">
                        <span class="price font-weight-400">500.000 đ</span>
                        <button>Đặt trước</button>
                    </div>
                </li>
                    `
                }
            ]
        }
    }


const menu_tabBarElements = document.querySelectorAll("#tab-bar > ul > li")

renderList(menu_data.sections.list[0].dishTemplate, "section #dish-list", 9)

menu_tabBarElements.forEach(tabElement => {
    tabElement.onclick = () => {
        try {
            let activeElement = document.querySelector("#tab-bar > ul > li.active")
            activeElement.classList.remove("active")

            tabElement.classList.add("active")
            
            let section = document.querySelector(menu_data.sections.selector)
            const title = section.querySelector(menu_data.sections.titleSelector)
            const script = section.querySelector(menu_data.sections.scriptSelector)
            const img = section.querySelector(menu_data.sections.imgSelector) 
            const list = section.querySelector("section #dish-list")
            
            let index = tabElement.getAttribute("data-page-number")

            title.textContent = menu_data.sections.list[index].title
            script.textContent = menu_data.sections.list[index].script
            img.src = menu_data.sections.list[index].imgPath
            
            if (index == 2) {
                list.classList.add("drink")
            } else {
                if (list.classList.contains("drink"))
                    list.classList.remove("drink")
            }
            renderList(menu_data.sections.list[index].dishTemplate, "section #dish-list", 9)
        } catch(error) {
            console.log("Render list: ", error)
        }
    }
})

const menu_dishBookingBtns = document.querySelectorAll("#menu #dish-list .dish-booking > button")
const menu_toastMessage = document.querySelector("#toast-message")

menu_dishBookingBtns.forEach((btn) => {
    btn.onclick = () => { 
        console.log("click")
        menu_toastMessage.classList.add("show")
        setTimeout(() => {
            menu_toastMessage.classList.remove('show')
        }, 4000);
    }
})





// ĐĂNG KÝ_______________________________________________________________________
const form = document.querySelector("main form");
const form_nameInput = document.getElementById("name");
const form_pwdInput = document.getElementById("password");
const form_phoneNumInput =  document.getElementById("phone-number");
const form_contactInput = document.getElementById("contact");
const form_submitBtn = document.getElementById("form-submit");
const form_genderRadioBtn = document.querySelectorAll("main form input[name='gender']");
const form_date = document.getElementById("date");
const form_month = document.getElementById("month");
const form_year = document.getElementById("year");



function renderDate(month = 1, year = 2005) {
    form_date.innerHTML = `<option value="1" disabled selected hidden>Ngày</option>`;
    if(month == 2) {
        if((year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) ||
            isNaN(parseInt(form_year.options[form_year.selectedIndex].textContent))) {
            for(let i = 1; i <= 29; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.innerText = i;
                form_date.appendChild(option);
            }
        } else {
            for(let i = 1; i <= 28; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.innerText = i;
                form_date.appendChild(option);
            }
        }
    } else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        for(let i = 1; i <= 31; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.innerText = i;
            form_date.appendChild(option);
        }
    } else {
        for(let i = 1; i <= 30; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.innerText = i;
            form_date.appendChild(option);
        }
    }
}


function renderMonth(date = 1, year = 2005) {
    form_month.innerHTML = `<option value="1" disabled selected hidden>Tháng</option>`;
    if((date < 29) || (date == 29 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))) ||
        (date == 29 && isNaN(parseInt(form_year.options[form_year.selectedIndex].textContent)))) {
        for(let i = 1; i <= 12; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.innerText = i;
            form_month.appendChild(option);
        }
    } else if(date == 30 || date == 29) {
        for(let i = 1; i <= 12; i++) {
            if(i != 2) {
                const option = document.createElement("option");
                option.value = i;
                option.innerText = i;
                form_month.appendChild(option);
            }
        }
    } else {
        for(let i = 1; i <= 12; i++) {
            if(i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
                const option = document.createElement("option");
                option.value = i;
                option.innerText = i;
                form_month.appendChild(option);
            }
        }
    }
}


function renderYear(date = 1, month = 1) {
    form_year.innerHTML = `<option value="2005" disabled selected hidden>Năm</option>`;
    if(date == 29 && month == 2) {
        for(let i = 1900; i <= 2024; i++) {
            if(i % 400 == 0 || (i % 4 == 0 && i % 100 != 0)) {
                const option = document.createElement("option");
                option.value = i;
                option.innerText = i;
                form_year.appendChild(option);
            }
        }
    } else {
        for(let i = 1900; i <= 2024; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.innerText = i;
            form_year.appendChild(option);
        }
    }
}

if(form_date && form_month && form_year) {
    renderDate();
    renderMonth();
    renderYear();
}



if(form_date && form_month && form_year) {
    form_date.onfocus = function() {
        renderDate(form_month.value, form_year.value);
    }
    
    form_month.onfocus = function() {
        renderMonth(form_date.value, form_year.value);
    }
    
    form_year.onfocus = function() {
        renderYear(form_date.value, form_month.value);
    }
}

function formValidate() {
    var regPhoneNum = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

    if(form_nameInput) {
        if(form_nameInput.value.length < 4) {
            alert("Tên phải có tối thiểu 4 kí tự");
            return false;
        }
    }

    if(form_phoneNumInput) {
        if(regPhoneNum.test(form_phoneNumInput.value) == false) {
            alert("Số điện thoại không hợp lệ");
            return false;
        }
    }

    if(form_pwdInput) {
        if(form_pwdInput.value.length < 8) {
            alert("Mật khẩu phải có tối thiểu 8 kí tự");
            return false;
        }
    }

    if(form_contactInput) {
        if(form_contactInput.value.length < 10) {
            alert("Nội dung liên hệ phải từ 10 kí tự trở lên");
            return false;
        }
    }

    if(form_date && form_month && form_year) {
        if(isNaN(parseInt(form_date.options[form_date.selectedIndex].textContent)) ||
            isNaN(parseInt(form_month.options[form_month.selectedIndex].textContent)) ||
            isNaN(parseInt(form_year.options[form_year.selectedIndex].textContent))) {
                alert("Vui lòng nhập ngày tháng năm sinh");
                return false;
        }
    }

    if(form_genderRadioBtn.length == 2) {
        if(form_genderRadioBtn[0].checked == false && form_genderRadioBtn[1].checked == false) {
            alert("Vui lòng chọn giới tính");
            return false;
        }
    }

    form.submit();
}

if (form_submitBtn) {
    form_submitBtn.onclick = function() {
        formValidate();
    }
}

