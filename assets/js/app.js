const database_template = {
    login: false,
    imgDishPath: "./assets/img/dishes/",

    // Danh sách món ăn của nhà hàng
    dishes: [
        {
            title: "Hải sản tươi sống",
            description: "Hải sản tươi sống được cập nhật hàng ngày, đảm bảo chất lượng tươi ngon nhất. Hãy để chúng tôi chiều lòng bạn với những món hải sản chế biến theo phong cách riêng.",
            imgSectionPath: "./assets/img/menu/bg_section1.jpg",
            typeOfFood: "dish",
            list: [
                {
                    name: 'Cá hồi sốt chanh dây',
                    img: 'cahoi.jpeg',
                    description: "Cá hồi Bắc Âu sốt chanh dây tươi ngon, hòa quyện vị chua ngọt độc đáo.",
                    price: '299.000',
                    preparationTime: 20,
                },
                {
                    name: 'Hàu nướng phô mai',
                    img: 'hau-nuong-pho-mai.jpg',
                    description: "Hàu sữa tươi ngọt lịm từ đảo ngọc Phú Quốc, kết hợp cùng phô mai nướng trên than hoa hồng.",
                    price: '200.000',
                    preparationTime: 30,
                },
                {
                    name: 'Cơm chiên hải sản',
                    img: 'comchien.png',
                    description: " Cơm chiên thơm lừng, hạt cơm tơi, đậm đà hải sản.",
                    price: '99.000',
                    preparationTime: 25,
                },
                {
                    name: 'Súp hải sản',
                    img: 'suphaisan.jpg',
                    description: "Súp hải sản ngọt thanh, thơm lừng hải sản tươi sống.",
                    price: '119.000',
                    preparationTime: 30,
                },
                {
                    name: 'Tôm hấp bia',
                    img: 'tom_cang_hap_bia.jpg',
                    description: "Tôm hùm tươi hấp với bia và lá chanh, giữ trọn vị ngọt tự nhiên, thơm nức mũi.",
                    price: '1.000.000',
                    preparationTime: 30,
                },
                {
                    name: 'Ốc hương hấp xả',
                    img: 'ochuong.jpg',
                    description: "Ốc hương hấp sả tươi thơm, giữ nguyên hương vị tự nhiên.",
                    price: '249.000',
                    preparationTime: 20,
                },
                {
                    name: 'Mực nướng muối ớt',
                    img: 'mucnuong.png',
                    description: "Mực nướng muối ớt cay nồng, giữ trọn độ dai và giòn.",
                    price: '199.000',
                    preparationTime: 25,
                },
                {
                    name: 'Lẩu ghẹ nấm kim châm',
                    img: 'laughe.jpg',
                    description: "Ghẹ tươi nấu cùng nấm kim châm, tạo vị ngọt thanh mát.",
                    price: '499.000',
                    preparationTime: 15,
                },
                {
                    name: 'Cồi xò điệp sốt tỏi',
                    img: 'sodiep.jpg',
                    description: "xào cùng tỏi băm, hương vị đậm đà.",
                    price: '229.000',
                    preparationTime: 20,
                },
                {
                    name: 'Cá bớp nướng muối ớt',
                    img: 'cabop.jpg',
                    description: "Cá bớp nướng thấm vị muối ớt cay đậm đà.",
                    price: '199.000',
                    preparationTime: 25,
                },

                
            ]
        },
        {
            title: "Ẩm thực Nhật Bản",
            description: "Khám phá hương vị Nhật Bản tinh tế với những món sushi, sashimi, tempura... được chế biến bởi các đầu bếp giàu kinh nghiệm.",
            imgSectionPath: "./assets/img/menu/bg_section2.jpg",
            typeOfFood: "dish",
            list: [
                {
                    name: 'Shushi tôm Tempura',
                    img: 'shushitom.jpg',
                    description: "Tôm chiên giòn, cuộn cơm, rong biển và sốt đặc biệt.",
                    price: '229.000',
                    preparationTime: 30,
                },
                {
                    name: 'Cá Hồi Nướng Teriyaki',
                    img: 'cahoinuong.jpg',
                    description: "Cá hồi nướng sốt teriyaki ngọt ngào, thịt cá thơm mềm.",
                    price: '299.000',
                    preparationTime: 25,
                },
                {
                    name: 'Lẩu hải sản Nhật',
                    img: 'launhat.jpg',
                    description: "Hải sản tươi nấu trong nước dùng Nhật, thơm ngon, thanh mát.",
                    price: '499.000',
                    preparationTime: 30,
                },
                {
                    name: 'Shashimi Bạch tuộc',
                    img: 'shashimibachtuoc.jpg',
                    description: "Bạch tuộc thái lát mỏng, chấm tương, giữ trọn hương vị biển.",
                    price: '319.000',
                    preparationTime: 15,
                },
                {
                    name: 'Sushi Lươn Nhật (Unagi)',
                    img: 'shushiluon.jpg',
                    description: "Lươn nướng, phủ sốt ngọt đậm đà, cuộn cơm và rong biển.",
                    price: '329.000',
                    preparationTime: 30,
                },
                {
                    name: 'Gỏi sứa Nhật',
                    img: 'goisua.jpg',
                    description: "Sứa giòn tươi, trộn rau củ và nước sốt chua ngọt hấp dẫn.",
                    price: '219.000',
                    preparationTime: 15,
                },
                {
                    name: 'Cua tuyết hấp',
                    img: 'cuatuyethap.jpg',
                    description: "Cua tuyết hấp chín, giữ nguyên độ ngọt, ăn kèm sốt gừng.",
                    price: '699.000',
                    preparationTime: 30,
                },
                {
                    name: 'Shashimi cá hồi',
                    img: 'shashimicahoi.jpg',
                    description: "Cá hồi tươi thái lát, ăn kèm nước tương và wasabi cay nồng.",
                    price: '349.000',
                    preparationTime: 15,
                },
            ]
        },
        {
            title: "Thế giới đồ uống đa dạng",
            description: "Từ những ly cocktail sáng tạo đến những chai rượu vang cổ điển, chúng tôi có tất cả những gì bạn cần để tận hưởng bữa ăn trọn vẹn.",
            imgSectionPath: "./assets/img/menu/bg_section3.jpg",
            typeOfFood: "drink",
            list: [
                {
                    name: 'Whisky Jack',
                    img: 'ruou_whisky_jack.png',
                    description: "Rượu vang đỏ",
                    price: '500.000',
                    volume: 750, // ml
                    origin: "Pháp"
                },
                {
                    name: 'Rượu Shake Hakusturu',
                    img: 'shakehakutsuru.png',
                    description: "Rượu Shake, 14%",
                    price: '650.000',
                    volume: 720, // ml
                    origin: "Nhật Bản"
                },
                {
                    name: 'Chile Casillero del Diablo',
                    img: 'chile.png',
                    description: "Rượu vang, 13.5%",
                    price: '450.000',
                    volume: 750, // ml
                    origin: "Chile"
                },


                {
                    name: 'Coctail Mojito',
                    img: 'coctail_mojito.png',
                    description: "Coctail",
                    price: '70.000',
                    volume: 350, // ml
                    flavor: "Chua ngọt, bạc hà, chanh."
                },
                {
                    name: 'Trà chanh xả',
                    img: 'trachanhxa.png',
                    description: "Trà",
                    price: '70.000',
                    volume: 350, // ml
                    flavor: "Chua nhẹ, thơm mát của chanh và xả."
                },
                {
                    name: 'Nước ép táo',
                    img: 'nuoceptao.png',
                    description: "Nước ép",
                    price: '60.000',
                    volume: 300, // ml
                    flavor: "Ngọt thanh, tươi mát từ táo tươi"
                },


                {
                    name: 'Bia Sol',
                    img: 'bia_sol.png',
                    description: "Lager, 4.5%",
                    price: '40.000',
                    volume: 500, // ml
                    origin: "Mexico"
                },
                {
                    name: 'Bia Sapporo Premium',
                    img: 'biasapporo.png',
                    description: "Lager, 5%",
                    price: '60.000',
                    volume: 330, // ml
                    origin: "Nhật Bản"
                },
                {
                    name: 'Bia Heineken',
                    img: 'heineken.png',
                    description: "Lager, 5%",
                    price: '55.000',
                    volume: 330, // ml
                    origin: "Hà Lan"
                },
            ]
        },
    ],

    // Danh sách món ăn khách hàng đã đặt
    orderedDishes: [],

    // Danh sách tin tức
    news: [
        {
            title: "TƯNG BỪNG KHAI TRƯƠNG CHI NHÁNH 3",
            content: "NganChef chính thức khai trương chi nhánh mới tại quận 1, TP.HCM! Với không gian sang trọng, cùng menu đa dạng các món hải sản tươi sống, NganChef hứa hẹn sẽ mang đến những trải nghiệm ẩm thực tuyệt vời cho thực khách Sài thành. ",
            img: "./assets/img/tintuc/tintuc1.jpg"
        },
        {
            title: "ƯU ĐÃI HẢI SẢN CAO CẤP",
            content: "NganChef chính thức khai trương chi nhánh mới tại quận 1, TP.HCM! Với không gian sang trọng, cùng menu đa dạng các món hải sản tươi sống, NganChef hứa hẹn sẽ mang đến những trải nghiệm ẩm thực tuyệt vời cho thực khách Sài thành. ",
            img: "./assets/img/tintuc/tintuc2.jpg"
        },
        {
            title: "RA MẮT GỎI CÁ HỒI SỐT CHANH DÂY",
            content: "NganChef giới thiệu món gỏi cá hồi sốt chanh dây độc đáo! Sự kết hợp hoàn hảo giữa vị ngọt tươi của cá hồi, vị chua thanh của chanh dây cùng các loại rau thơm tạo nên một món ăn vừa lạ miệng vừa hấp dẫn. Hãy đến NganChef để thưởng thức món gỏi cá hồi sốt chanh dây và khám phá thêm nhiều món ngon khác.",
            img: "./assets/img/tintuc/tintuc3.jpeg"
        },
        {
            title: "Top 5 món hải sản được yêu thích nhất tại NganChef",
            content: "Bạn muốn biết bí quyết để chế biến món hàu nướng phô mai ngon như tại nhà hàng? Hãy theo dõi bài viết của chúng tôi để khám phá công thức độc đáo nhé!",
            img: "./assets/img/tintuc/tintuc4.jpeg"
        },
        {
            title: "Bí quyết chế biến món “Hàu nướng phô mai” ngon như nhà hàng",
            content: "Bạn muốn biết bí quyết để chế biến món hàu nướng phô mai ngon như tại nhà hàng? Hãy theo dõi bài viết của chúng tôi để khám phá công thức độc đáo nhé!",
            img: "./assets/img/tintuc/tintuc5.jpeg"
        },
        {
            title: "Bí quyết chọn hải sản tươi ngon tại nhà hàng NganChef",
            content: "Bạn đang phân vân không biết làm sao để chọn được những món hải sản tươi ngon nhất? Đến với NganChef, chúng tôi sẽ bật mí cho bạn những bí quyết chọn hải sản tươi sống, đảm bảo chất lượng và an toàn vệ sinh thực phẩm.",
            img: "./assets/img/tintuc/tintuc6.jpeg"
        }

    ],

    // Danh sách thông tin người dùng
    users: []
}


// Functions chung 
function logout() {
    database.login = false;
    header_changeLoginStatus();
}

function toggleClass(classActive, selector) {
    let item = document.querySelector(selector)

    try {
        item.classList.toggle(classActive)
    } catch(error) {
        console.log("Function toggleSubMenu: ", error)
    }
}

function toString(listData, templateFunction, sourcePath) {
    // chuyển mảng object lưu thông tin món ăn như này
    //{
    //     name: 'Coctail Mojito',
    //     img: 'coctail_mojito.png',
    //     price: '70.000',
    //     quantity: 5
    // }
    // Thành chuỗi gồm nhiều thẻ <li> để hiển thị món ăn
    // Chuỗi HTML của thẻ <li> được trả về từ hàm templateFunction tức là hàm header_itemHTML được truyền vào hàm
    try {
        let htmlText = ""

        if (listData.length > 0) {
            listData.forEach((data) => {
                htmlText += templateFunction(data, sourcePath)
            })
        }
        
        return htmlText
    } catch(error) {
        console.log("Function renderList: ", error)
    }
}



// Lấy dữ liệu trang web từ LocalStorage về
var database = JSON.parse(window.localStorage.getItem("SeafoodRestaurantDataBase"))

// Nếu localStorage không có dữ liệu thì lấy dữ liệu mẫu sử dụng
if (!database) {
    database = database_template
}

// Chức năng đăng xuất
var logoutBtn = document.querySelector('#navbar-wrap .logout');
logoutBtn.onclick = function() {
    logout();
}

// Gán sự kiện reload trang hoặc đóng trang thì cập nhật dữ liệu lên localStorage
const body = document.querySelector("body")
body.onunload = () => {
    database.dishes = database_template.dishes
    database.news = database_template.news
    window.localStorage.setItem("SeafoodRestaurantDataBase", JSON.stringify(database))
}



// HEADER VÀ FOOTER_____________________________________________________________
// 
// 
// Functions _______________________
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

function header_itemHTML(dishData, imgFolderPath) {
    // dishData có dạng:
    // {
    //     name: 'Coctail Mojito',
    //     img: 'coctail_mojito.png',
    //     price: '70.000',
    //     quantity: 5
    // }
    // imgFolderPath có dạng "./assets/img/dishes/"
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

function header_changeQuantity(args) {
    const calculate = {
        "+": function(a, b) {
            return (a + b)
        } ,
        "-": function(a, b) {
            return (a - b)
        }
    }

    // Lấy ra các item món ăn
    const elements = document.querySelectorAll(args.header_itemSelector)
    
    elements.forEach(function(element, index) {
        // Lấy các cặp nút + và - của mỗi item trong list món ăn
        let buttons = element.querySelectorAll("button")

        // Bắt sự kiện click để thay đổi số lượng món
        buttons.forEach((button) => {
            button.onclick = function () {
                let displayElement = element.querySelector("span") // lấy thẻ hiển thị số lượng 
                let quantity = parseInt(displayElement.textContent) // lấy số lượng từ thẻ trên

                // Lấy phép tính của nút (+/-) từ attribute "data-calculator-type"
                // Ví dụ: <button data-calculator-type="-">
                let calculateType = button.getAttribute("data-calculator-type") 

                if (calculateType == '-' && quantity == 1) {
                    // Nếu nhấn nút "-" và số lượng món đó = 1 thì bỏ món đó database
                    database.orderedDishes.splice(index, 1)

                    // Render lại danh sách mới sau khi loại bỏ món
                    header_renderList(args)
                } else {
                    // Tính toán số lượng mới của món
                    let newValue = calculate[calculateType](quantity, 1)

                    // Cập nhật dữ liệu ở HTML và database
                    database.orderedDishes[index].quantity = newValue
                    displayElement.textContent = newValue
                }

                console.log(database.orderedDishes)

            }
        })
    })
}



function header_renderList(args) {
    try {
        // Lấy thẻ <ul>
        const header_list = document.querySelector(args.header_listSelector)
        // Lấy chuỗi các thẻ <li> từ hàm toString để render món ăn ra giao diện
        let htmlText = toString(args.header_dishesData, args.header_itemHTML, args.header_imgPath)
    
        if (htmlText != "") {
            header_list.innerHTML = htmlText
        } else {
            // Nếu chuỗi rỗng thì thay innerHTML của thẻ <ul> thẻ <p> hiển thị thông báo
            header_list.innerHTML = '<p class="empty-notification">Chưa có món được đặt trước</p>'
        }

        // Gán sự kiện điều chỉnh số lượng món cho mỗi thẻ <li>
        header_changeQuantity(args)
    } catch (error) {
        console.log("HEADER: ", error)
    }
}
// _____________________________________________________
// Kiểm tra đăng nhập 
header_changeLoginStatus()

// Bật tắt navbar khi ở tablet và mobile
const header_menuBar = document.querySelector("#function-buttons #menu-bar")
header_menuBar.onclick = () => {
    toggleClass("show", "#navbar-wrap")
}

// Render danh sách món đã đặt ở header
const header_listSelector = "header #sub-menu > ul"
const header_itemSelector = "#sub-menu li > .quantity-button"
const header_imgPath = database.imgDishPath
const header_dishesData = database.orderedDishes

// Tham số của hàm renderList
const header_argsRenderList = {
    header_listSelector, 
    header_dishesData, 
    header_itemHTML, 
    header_imgPath,
    header_itemSelector
}

header_renderList(header_argsRenderList)



// MENU_______________________________________________________________________
const menu_itemTemplates = {
    "dish": (data, imgPath) => {
        return `
            <li class="dish-item">
                <img src="${imgPath + data.img}" alt="">
                <div class="dish-inner">
                    <h4>${data.name}</h4>
                    <p class="script">${data.description}</p>
                    <div class="wrap">
                        <div class="time-produce">
                            <i class="fa-regular fa-clock"></i>
                            <span>${data.preparationTime} phút</span>
                        </div>
                        <p class="price">${data.price} đ</p>
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
                <img src="${imgPath + data.img}" alt="">
                <div class="dish-inner">
                    <div class="text-wrap">
                        <h4>${data.name}</h4>
                        <p class="script">${data.description}</p>
                    </div>
                    
                    <div class="wrap">
                        <div class="origin">
                            <span>${data.origin ? "Xuất xứ" : "Hương vị"}: </span>
                            <span>${data.origin || data.flavor}</span>
                        </div>
                        
                        <div class="capacity">
                            <i class="fa-solid fa-bottle-droplet"></i>
                            <span>${data.volume}ml</span>
                        </div>
                    </div>
                </div>
                <div class="dish-booking">
                    <span class="price">${data.price} đ</span>
                    <button class="btn btn-outline">Đặt trước</button>
                </div>
            </li>
        `
    }
}

function menu_sectionTemplate(sectionData, imgDishPath) {
    let htmlItemText = toString(sectionData.list, menu_itemTemplates[sectionData.typeOfFood], imgDishPath)

    return `
        <figure>
            <img src="${sectionData.imgSectionPath}" alt="">
            <figcaption>
                <h3>${sectionData.title}</h3>
                <p>
                    ${sectionData.description}
                </p>
            </figcaption>
        </figure>

        <ul id="dish-list" class="${sectionData.typeOfFood}">
            ${htmlItemText}
        </ul>
    `
}

function menu_toastMessageTemplate(fullImgPath) {
    return `
        <div id="toast-message">
            <img src="${fullImgPath}" alt="">
            <p>Thêm món vào thực đơn thành công</p>
        </div>
    `
}

function menu_renderList(dataObject) {
    try {
        const menu_section = document.querySelector(dataObject.menu_sectionSelector)
        const menu_sectionData = dataObject.menu_sectionData
        let htmlText = menu_sectionTemplate(menu_sectionData, dataObject.menu_imgDishPath)

        if (htmlText) {
            menu_section && (menu_section.innerHTML = htmlText)
        }


        // Xử lí đặt món
        const menu_dishBookingBtns = document.querySelectorAll(dataObject.menu_dishBookingBtnsSelector)
        const menu_toastWrap = document.querySelector("main #toast-wrap")

        menu_dishBookingBtns.forEach((btn, index) => {
            btn.onclick = () => { 
                if (database.login) {
                    // Show thông báo đã đặt món thành công
                    let fullImgPath = dataObject.menu_imgDishPath + menu_sectionData.list[index].img
                    menu_toastWrap.innerHTML = menu_toastMessageTemplate(fullImgPath)

                    // Update dữ liệu lên database
                    const dishData = menu_sectionData.list[index] //Lấy thông tin món vừa được đặt
                    
                    const indexOfOrderedDish = dataObject.menu_orderedDishesData?.findIndex((dish) => {
                        return dish.name.toLowerCase() == dishData.name.toLowerCase()
                    }) // tìm vị trí của món vừa đặt trong danh sách ordered

                    // Cập nhật dữ liệu món lên danh sách ordered
                    if (indexOfOrderedDish != -1) {
                        dataObject.menu_orderedDishesData[indexOfOrderedDish].quantity++;
                    } else {
                        let updateData = {
                            name: dishData.name,
                            img: dishData.img,
                            price: dishData.price,
                            quantity: 1
                        }

                        dataObject.menu_orderedDishesData.push(updateData)
                    }

                    // Render lại danh sách trên header
                    header_renderList(header_argsRenderList)

                    console.log(dataObject.menu_orderedDishesData)
                } else {
                    toggleClass(dataObject.menu_notifyClassToggle, dataObject.menu_notificationSelector)
                }
                
            }
        })
    } catch(error) {
        console.log("Render list function: ", error)
    }
    
}

if (document.querySelector("#menu")) {
    const menu_sectionSelector = "#menu main article > section"
    const menu_notificationSelector = "#menu #notification-wrap"
    const menu_notifyClassToggle = "show"
    const menu_dishBookingBtnsSelector = "#menu #dish-list .dish-booking > button"
    const menu_toastWrap = "main #toast-wrap"
    const menu_sectionData = database.dishes
    const menu_orderedDishesData = database.orderedDishes
    const menu_imgDishPath = database.imgDishPath

    const menu_tabBarElements = document.querySelectorAll("#tab-bar > ul > li")
    const menu_closeNotification = document.querySelector(menu_notificationSelector + " .close-icon")

    const menu_argsRenderList = (index = 0) => {
        return {
            menu_sectionSelector,
            menu_notificationSelector,
            menu_notifyClassToggle,
            menu_dishBookingBtnsSelector,
            menu_toastWrap,
            menu_sectionData: menu_sectionData[index],
            menu_orderedDishesData,
            menu_imgDishPath
        }
    }
    // Render danh sách khi mới tải trang
    menu_renderList(menu_argsRenderList())

    // Bắt sự kiện để render danh sách khác
    menu_tabBarElements.forEach((tabElement, index) => {
        tabElement.onclick = () => {
            try {
                let activeElement = document.querySelector("#tab-bar > ul > li.active")
                activeElement.classList.remove("active")
                tabElement.classList.add("active")
                
                menu_renderList(menu_argsRenderList(index))
            } catch(error) {
                console.log("Render list: ", error)
            }
        }
    })

    menu_closeNotification.onclick = () => {
        toggleClass(menu_notifyClassToggle, menu_notificationSelector)
    }

}








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

    if(document.querySelector('#dangky')) {
        let nameVal = form_nameInput.value;
        let pwdVal = form_pwdInput.value;
        let user = {
            name : nameVal,
            password : pwdVal
        };
        database.users.push(user);
        form.submit()
    }

    if(document.querySelector('#dangnhap')) {
        let nameVal = form_nameInput.value;
        let pwdVal = form_pwdInput.value;
        database.users.forEach(function(element) {
            if(element.name === nameVal && element.password === pwdVal) {
                database.login = true;
                console.log(true)
                header_changeLoginStatus();
                form.submit()
                window.location.href = "trangchu.html"
            }
        });

        if (!database.login) {
            alert("Tên tài khoản hoặc mật khẩu không chính xác!")
        }
    }

    if (document.querySelector("#lienhe")) {
        form.submit();
    }

}

if (form_submitBtn) {
    form_submitBtn.onclick = function() {
        formValidate();
    }
}
 


// TIN TỨC _________________________________________________________________________________
const tintuc_newsList = document.querySelector("#tintuc main ul")

const tintuc_newsData = database.news

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

const datban_path = database.imgDishPath

// items
const datban_dishes = database.orderedDishes

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
    
    function renderList(list, path, items) {
        // Xóa tất cả thẻ <li> có trong list
        list.innerHTML = ""

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
        calculateCost(list, items)
    }
    
    function calculateCost(list, items) {
        const totalCost = list.nextElementSibling.querySelector(".number")
        let total = 0
        items.forEach(item => {
            total += Number.parseInt(item.price.replaceAll('.', '')) * item.quantity
        })
        totalCost.innerText = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    if (database.login) {
        renderList(datban_list, datban_path, datban_dishes)
    }

    
    let datban_increaseBtns = document.querySelectorAll('#datban .increase')
    let datban_decreaseBtns = document.querySelectorAll('#datban .decrease')
    let datban_closeBtns = document.querySelectorAll('#datban .close')

    function setEvents() {
        datban_increaseBtns.forEach((increaseBtn, index) => {
            increaseBtn.onclick = () => {
                let number = Number.parseInt(increaseBtn.previousElementSibling.innerText)
                ++number

                console.log("+: ", index)
    
                // Cập nhật số lượng lên database
                if (datban_dishes[index]) {
                    datban_dishes[index].quantity = number
                    calculateCost(datban_list, datban_dishes)
                }
                increaseBtn.previousElementSibling.innerText = number
            }
        })
        

        datban_decreaseBtns.forEach((decreaseBtn, index) => {
            decreaseBtn.onclick = () => {
                let number = Number.parseInt(decreaseBtn.nextElementSibling.innerText)
                --number
                if (number <= 0) {
                    // Xóa món trong danh sách đặt trước
                    if (datban_dishes[index]) {
                        setTimeout(() => {
                            datban_dishes.splice(index, 1)
                            calculateCost(datban_list, datban_dishes)
                            decreaseBtn.closest('.item').remove()
                            datban_increaseBtns = document.querySelectorAll('#datban .increase')
                            datban_decreaseBtns = document.querySelectorAll('#datban .decrease')
                            datban_closeBtns = document.querySelectorAll('#datban .close')
                            setEvents()
                        }, 300)
                        decreaseBtn.closest('.item').classList.add('remove')
                    }
                } else {
                    // Cập nhật số lượng lên database
                    if (datban_dishes[index]) {
                        datban_dishes[index].quantity = number
                    }
                    calculateCost(datban_list, datban_dishes)
                    decreaseBtn.nextElementSibling.innerText = number
                }   
                console.log(datban_dishes)
            }
        })
        
        datban_closeBtns.forEach((closeBtn, index) => {
            closeBtn.onclick = () => {
                setTimeout(() => {
                    // Xóa món trong danh sách đặt trước
                    datban_dishes.splice(index, 1)
                    
                    calculateCost(datban_list, datban_dishes)
                    datban_list.removeChild(closeBtn.parentElement)
                    datban_increaseBtns = document.querySelectorAll('#datban .increase')
                    datban_decreaseBtns = document.querySelectorAll('#datban .decrease')
                    datban_closeBtns = document.querySelectorAll('#datban .close')
                    setEvents()
                    // Render danh sách ở header
                    header_renderList(header_argsRenderList)
                }, 300)
                closeBtn.parentElement.classList.add('remove')
            }
        })
    }

    
    if (database.login) {
        setEvents()
    }
    
    renderDays(datban_daySelect)
    renderMonths(datban_monthSelect)
    
    datban_daySelect.onchange = () => {
        const prevMonth = datban_monthSelect.value
        renderMonths(datban_monthSelect, Number.parseInt(datban_daySelect.value))
        datban_monthSelect.value = prevMonth
    }
    
    datban_monthSelect.onchange = () => {
        const prevDay = datban_daySelect.value
        renderDays(datban_daySelect, Number.parseInt(datban_monthSelect.value))
        datban_daySelect.value = prevDay
    }

    datban_submit.onclick = () => {
        if (datban_request.value.length > 0 && datban_request.value.length < 10) {
            alert('Vui lòng góp ý tối thiểu 10 ký tự!')
        } else {
            alert('Đặt bàn thành công')
            datban_form.submit()
        }
    }
}