export function toggleSubMenu(classActive, selector) {
    let item = document.querySelector(selector)

    try {
        item.classList.toggle(classActive)
    } catch(error) {
        console.log("Function toggleSubMenu: ", error)
    }
}

export function renderList(template, selector, repeat) {
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

export function changeQuantity(selector) {
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

// export function moveBookingButton() {
//     window.addEventListener("scroll", () => {
//         try {
//             const presentScrollY = window.scrollY
//             const screenHeight = window.innerHeight
//             const documentHeight = document.documentElement.scrollHeight
        
//             let maxScrollY = documentHeight - screenHeight - 530 //530 là height của footer

//             const bookingButton = document.querySelector("#booking-button")
//             if (presentScrollY >= maxScrollY) {
//                 if (!bookingButton.classList.contains("move"))
//                     bookingButton.classList.add("move")
//             } else {
//                 if (bookingButton.classList.contains("move"))
//                     bookingButton.classList.remove("move")
//             }
//         } catch(error) {
//             console.log("Function moveBookingButton(): ", error)
//         }
        
//     })
// }