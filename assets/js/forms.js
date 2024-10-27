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

form_submitBtn.onclick = function() {
    formValidate();
}

