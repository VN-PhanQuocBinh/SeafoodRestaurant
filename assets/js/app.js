import {database} from "./database.js"

// HEADER VÀ FOOTER_____________________________________________________________
// 
// 
// Functions _______________________
function header_toggleSubMenu(classActive, selector) {
    let item = document.querySelector(selector)

    try {
        item.classList.toggle(classActive)
    } catch(error) {
        console.log("Function toggleSubMenu: ", error)
    }
}

function header_itemHTML(dishData, imgFolderPath) {
    return `
        <li>
            <img src="${imgFolderPath + dishData.img}" alt="">
            <div class="dish-info">
                <span class="name">${dishData.name}</span>
                <span class="price">${dishData.price} đ</span>
            </div>
            <div class="quantity-button">
                <button data-calculator-type="-">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span>${dishData.quantity}</span>
                <button data-calculator-type="+">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </li>
    `
}
function renderList(listData, selector, templateFunction, sourcePath) {
    try {
        let list = document.querySelector(selector)
        let htmlText = ""

        if (listData.length > 0) {
            listData.forEach((data) => {
                htmlText += templateFunction(data, sourcePath)
            })
        } else {
            htmlText = '<p class="empty-notification">Chưa có món được đặt trước</p>'
        }

        list.innerHTML = htmlText     
        
        header_changeQuantity("#sub-menu li > .quantity-button")
    } catch(error) {
        console.log("Function renderList: ", error)
    }
}

function header_changeQuantity(selector) {
    const calculate = {
        "+": (a, b) => (a + b),
        "-": (a, b) => (a - b)
    }

    const elements = document.querySelectorAll(selector)
    

    elements.forEach((element, index) => {
        let buttons = element.querySelectorAll("button")

        buttons.forEach((button) => {
            button.onclick = () => {
                let displayElement = element.querySelector("span")
                let quantity = parseInt(displayElement.textContent)
                let calculateType = button.getAttribute("data-calculator-type")

                if (calculateType == '-' && quantity == 1) {
                    database.orderedDishes.splice(index, 1)
                    renderList(header_dishesData, "#sub-menu > ul", header_itemHTML, header_imgPath)
                } else {
                    displayElement.textContent = calculate[calculateType](quantity, 1)
                }

            }
        })
    })
}


function header_changeLoginStatus() {
    const container = document.querySelector(".container")
    
    try {
        if (database.login) {
            container.classList.add('logged')
        } else {
            if (container.classList.contains("logged")) {
                container.classList.remove('logged')
            }
        }
    } catch (error) {
        console.log("Change Login Status: ", error)
    }
}


// Kiểm tra đăng nhập 
header_changeLoginStatus()


// Bật tắt navbar khi ở tablet và mobile
const header_menuBar = document.querySelector("#function-buttons #menu-bar")
header_menuBar.onclick = () => {
    header_toggleSubMenu("show", "#navbar-wrap")
}

// Render danh sách món đã đặt ở header
const header_dishesData = database.orderedDishes
const header_imgPath = "./assets/img/dishes/"
const header_listSelector = "#sub-menu > ul"

renderList(header_dishesData, header_listSelector, header_itemHTML, header_imgPath)




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
                            <h4>Tôm hấp</h4>
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
                            <button class="btn btn-outline">Đặt món</button>
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
                            <h4>Tôm hấp</h4>
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
                            <button class="btn btn-outline">Đặt món</button>
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
                                <h4>Whisky Jack</h4>
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
                            <span class="price">500.000 đ</span>
                            <button class="btn btn-outline">Đặt trước</button>
                        </div>
                    </li>
                    `
                }
            ]
        }
    }

const menu_itemTemplates = {
    "dish": (data, imgPath) => {
        return `
            <li class="dish-item">
                <img src="./assets/img/menu/images_1.jpg" alt="">
                <div class="dish-inner">
                    <h4>Tôm hấp</h4>
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
                    <button class="btn btn-outline">Đặt món</button>
                </div>
            </li>
        `
    },
    "drink": (data, imgPath) => {
        return `
            <li class="dish-item">
                <img src="./assets/img/menu/images_4.png" alt="">
                <div class="dish-inner">
                    <div class="text-wrap">
                        <h4>Whisky Jack</h4>
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
                    <span class="price">500.000 đ</span>
                    <button class="btn btn-outline">Đặt trước</button>
                </div>
            </li>
        `
    }
}

function menu_template() {
    return `

    `
}

const menu_dishesData = database.dishes
const menu_sectionSelector = "#menu main article > section"
const menu_imgPath = "./assets/img/dishes/"

const menu_tabBarElements = document.querySelectorAll("#tab-bar > ul > li")

// renderList(menu_data.sections.list[0].dishTemplate, "section #dish-list", 9)

menu_tabBarElements.forEach((tabElement, index) => {
    tabElement.onclick = () => {
        try {
            let activeElement = document.querySelector("#tab-bar > ul > li.active")
            activeElement.classList.remove("active")
            tabElement.classList.add("active")
            
            renderList(menu_dishesData[index], menu_sectionSelector, menu_template, menu_imgPath)
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


// TIN TỨC _________________________________________________________________________________
const tintuc_newsList = document.querySelector("#tintuc main ul")

const tintuc_newsData = [
    {
        title: "TƯNG BỪNG KHAI TRƯƠNG CHI NHÁNH 3",
        content: "NganChef chính thức khai trương chi nhánh mới tại quận 1, TP.HCM! Với không gian sang trọng, cùng menu đa dạng các món hải sản tươi sống, NganChef hứa hẹn sẽ mang đến những trải nghiệm ẩm thực tuyệt vời cho thực khách Sài thành. ",
        img: "./assets/img/tintuc/image1.jpg"
    },
    {
        title: "ƯU ĐÃI HẢI SẢN CAO CẤP",
        content: "NganChef chính thức khai trương chi nhánh mới tại quận 1, TP.HCM! Với không gian sang trọng, cùng menu đa dạng các món hải sản tươi sống, NganChef hứa hẹn sẽ mang đến những trải nghiệm ẩm thực tuyệt vời cho thực khách Sài thành. ",
        img: "./assets/img/tintuc/image2.jpg"
    },
    {
        title: "RA MẮT GỎI CÁ HỒI SỐT CHANH DÂY",
        content: "NganChef giới thiệu món gỏi cá hồi sốt chanh dây độc đáo! Sự kết hợp hoàn hảo giữa vị ngọt tươi của cá hồi, vị chua thanh của chanh dây cùng các loại rau thơm tạo nên một món ăn vừa lạ miệng vừa hấp dẫn. Hãy đến NganChef để thưởng thức món gỏi cá hồi sốt chanh dây và khám phá thêm nhiều món ngon khác.",
        img: "./assets/img/tintuc/image3.jpg"
    },
    {
        title: "Top 5 món hải sản được yêu thích nhất tại",
        content: "Bạn muốn biết bí quyết để chế biến món hàu nướng phô mai ngon như tại nhà hàng? Hãy theo dõi bài viết của chúng tôi để khám phá công thức độc đáo nhé!",
        img: "./assets/img/tintuc/image4.webp"
    },
    {
        title: "Bí quyết chế biến món “Hàu nướng phô mai” ngon như nhà hàng",
        content: "Bạn muốn biết bí quyết để chế biến món hàu nướng phô mai ngon như tại nhà hàng? Hãy theo dõi bài viết của chúng tôi để khám phá công thức độc đáo nhé!",
        img: "./assets/img/tintuc/image5.webp"
    },
    {
        title: "Bí quyết chọn hải sản tươi ngon tại nhà hàng NganChef",
        content: "Bạn đang phân vân không biết làm sao để chọn được những món hải sản tươi ngon nhất? Đến với NganChef, chúng tôi sẽ bật mí cho bạn những bí quyết chọn hải sản tươi sống, đảm bảo chất lượng và an toàn vệ sinh thực phẩm.",
        img: "./assets/img/tintuc/image6.jpeg"
    }
]


if (tintuc_newsList) {
    let htmlText = tintuc_newsData.reduce((total, news) => {
        return total += `
            <li>
                <img src="${news.img}" alt="">
                <div class="content">
                    <h3 class="font-weight-500">${news.title}</h3>
                    <p>
                        ${news.content}
                    </p>
                    <a href="#" class="click-to-more">Nhấn để xem chi tiết</a>
                </div>
            </li>
        `
    }, "")

    tintuc_newsList.innerHTML = htmlText
}



// Đặt bàn _______________________________________________________________
const datban_container = document.querySelector("#datban")
const datban_list = document.querySelector('#datban .list')
const datban_daySelect = document.querySelector('#datban .day-select')
const datban_monthSelect = document.querySelector('#datban .month-select')
const datban_form = document.querySelector('#datban .booking-info')
const datban_request = document.querySelector('#datban #request')
const datban_submit = document.querySelector('#datban .book-btn .book')

const path = './assets/img/dishes/'

// Nếu có local storage thì items = JSON.parse(LocalStorage.getItem('...')) || []

// items tạm
const dishes = database.orderedDishes

if (datban_container) {
    function renderDays(daySelect, month = 1) {
        daySelect.innerHTML = ''
        if (month == 2) {
            for (let i = 1; i <= 29; i++) {
                const option = document.createElement('option')
                option.value = i
                option.textContent = i
                daySelect.appendChild(option)
            }
        } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            for (let i = 1; i <= 31; i++) {
                const option = document.createElement('option')
                option.value = i
                option.textContent = i
                daySelect.appendChild(option)
            }
        } else {
            for (let i = 1; i <= 30; i++) {
                const option = document.createElement('option')
                option.value = i
                option.textContent = i
                daySelect.appendChild(option)
            }
        }
    }
    
    function renderMonths(monthSelect, day = 1) {
        monthSelect.innerHTML = ''
        if (day == 31) {
            for (let i = 1; i <= 12; i++) {
                if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i ==10 || i == 12) {
                    const option = document.createElement('option')
                    option.value = i
                    option.textContent = i
                    monthSelect.appendChild(option)
                }
            }
        } else if (day == 30 || day == 29) {
            for (let i = 1; i <= 12; i++) {
                if (i !== 2) {
                    const option = document.createElement('option')
                    option.value = i
                    option.textContent = i
                    monthSelect.appendChild(option)
                }
            }
        } else {
            for (let i = 1; i <= 12; i++) {
                const option = document.createElement('option')
                option.value = i
                option.textContent = i
                monthSelect.appendChild(option)
            }
        }
    }
    
    function renderList2(list, path, items) {
        items.forEach(item => {
            const li = document.createElement('li')
            li.classList.add('item')
            li.innerHTML = `
                <div class="item-img">
                    <img src="${path + item.img}" alt="">
                </div>
                <div class="item-info">
                    <div class="name-and-price">
                        <span class="name">${item.name}</span>
                        <span class="price">${item.price}đ</span>
                    </div>
                    <div class="quantity">
                        <button class="quantity-btn decrease">
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <span class="number">${item.quantity}</span>
                        <button class="quantity-btn increase">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="close">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
            `
            list.appendChild(li)
        })
    }
    
    renderList2(datban_list, path, dishes)
    
    datban_submit.onclick = () => {
        if (datban_request.value.length > 0 && datban_request.value.length < 10) {
            alert('Vui lòng góp ý tối thiểu 10 ký tự!')
        } else {
            alert('Đặt bàn thành công')
            datban_form.submit()
        }
    }
    
    const datban_increaseBtns = document.querySelectorAll('#datban .increase')
    const datban_decreaseBtns = document.querySelectorAll('#datban .decrease')
    const datban_closeBtns = document.querySelectorAll('#datban .close')
    
    datban_increaseBtns.forEach(increaseBtn => {
        increaseBtn.onclick = () => {
            let number = Number.parseInt(increaseBtn.previousElementSibling.innerText)
            ++number
            increaseBtn.previousElementSibling.innerText = number
        }
    })
    
    datban_decreaseBtns.forEach(decreaseBtn => {
        decreaseBtn.onclick = () => {
            let number = Number.parseInt(decreaseBtn.nextElementSibling.innerText)
            --number
            if (number < 0) number = 0
            decreaseBtn.nextElementSibling.innerText = number
        }
    })
    
    datban_closeBtns.forEach(closeBtn => {
        closeBtn.onclick = () => {
            setTimeout(() => {
                datban_list.removeChild(closeBtn.parentElement)
            }, 300)
            closeBtn.parentElement.classList.add('remove')
        }
    })
    
    
    renderDays(datban_daySelect)
    renderMonths(datban_monthSelect)
    
    datban_daySelect.onchange = () => {
        renderMonths(datban_monthSelect, Number.parseInt(datban_daySelect.value))
    }
    
    datban_monthSelect.onchange = () => {
        renderDays(datban_daySelect, Number.parseInt(datban_monthSelect.value))
    }
}

