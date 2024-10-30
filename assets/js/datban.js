const datban_list = document.querySelector('#datban .list')
const datban_daySelect = document.querySelector('#datban .day-select')
const datban_monthSelect = document.querySelector('#datban .month-select')
const datban_form = document.querySelector('#datban .booking-info')
const datban_request = document.querySelector('#datban #request')
const datban_submit = document.querySelector('#datban .book-btn .book')

const path = './assets/img/danhsachmon/'

// Nếu có local storage thì items = JSON.parse(LocalStorage.getItem('...')) || []

// items tạm
const items = [
    {
        name: 'Coctail Mojito',
        img: 'coctail_mojito.png',
        price: '70.000',
        quantity: 5
    },
    {
        name: 'Ruou Whisky Jack',
        img: 'ruou_whisky_jack.png',
        price: '700.000',
        quantity: 8
    },
    {
        name: 'Tom cang hap bia',
        img: 'tom_cang_hap_bia.png',
        price: '200.000',
        quantity: 10
    },
    {
        name: 'Bia Sol',
        img: 'bia_sol.png',
        price: '170.000',
        quantity: 12
    },
    {
        name: 'Coctail Mojito',
        img: 'coctail_mojito.png',
        price: '70.000',
        quantity: 3
    },
]

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

renderList2(datban_list, path, items)

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