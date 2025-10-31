/* RTL - راستچین و چپ چین */
let bodyDir = document.querySelector('body')
let dirctionItem = document.querySelectorAll(".Rtl-Ltr");
let buttonSidebar = document.querySelector('.button-sidebar')
let sidebarMobile = document.querySelector('.sidebar-mobile')

function bodyDirection() {

    if (bodyDir.dir == "rtl") {

        dirctionItem.forEach(function (Item) {
            Item.classList.remove("text-end")
            buttonSidebar.classList.remove('div-button-sidebar-active')
            sidebarMobile.classList.remove('sidebar-mobileLtr')
        })
    } else {

        dirctionItem.forEach(function (Item) {
            Item.classList.add("text-end")
            buttonSidebar.classList.add('div-button-sidebar-active')
            sidebarMobile.classList.add('sidebar-mobileLtr')
        })
    }

}
bodyDirection()



let buttomRTL = document.querySelectorAll(".RTL-E")
buttomRTL.forEach(function (dir) {

    dir.addEventListener('click', function () {
        if (bodyDir.dir == 'rtl') {
            bodyDir.dir = 'ltr'
            dir.innerHTML = 'RTL'
        } else {
            bodyDir.dir = 'rtl'
            dir.innerHTML = 'LTR'
        }
        bodyDirection()
    })
})



/* change page - تعقیر صفحات */
let pageAll = document.querySelectorAll(".page-child")
let divMenu = document.querySelectorAll(".div-menu")

function activePage(page) {

    let pages = document.querySelector(page)

    pageAll.forEach(function (onePage) {

        onePage.classList.remove("active")
        onePage.style.display = 'none'

        if (onePage.id == pages.id) {
            onePage.style.display = 'block'

            setTimeout(function () {
                onePage.classList.add("active")
            }, 100);
        }

    })
}

divMenu.forEach(function (list) {

    list.addEventListener('click', function () {

        divMenu.forEach(function (listTow) {
            listTow.classList.remove("active-menu")
        })

        this.classList.add("active-menu")
    })

})



/* change font - تعقیر فونت */
let root = document.documentElement;
let selecorFont = document.querySelectorAll(".dropdown-item")

selecorFont.forEach(function (selector) {

    selector.addEventListener('click', function () {
        let optionValue = selector.value

        if (optionValue == 'vazir') {
            root.style.setProperty('--font', 'Vazir')
        }
        else if (optionValue == 'yekan') {
            root.style.setProperty('--font', 'Yekan')
        }
        else if (optionValue == 'IranSans') {
            root.style.setProperty('--font', 'IranSans')
        }
        else if (optionValue == 'Tanha') {
            root.style.setProperty('--font', 'Tanha')
        }
        else if (optionValue == 'Shabnam') {
            root.style.setProperty('--font', 'Shabnam')
        }
        else if (optionValue == 'Sahel') {
            root.style.setProperty('--font', 'Sahel')
        }
    })

})



/* night - تاریک و روشن */
let night = document.querySelectorAll(".div-night")
toggle = true

night.forEach(function (dark) {
    dark.addEventListener("click", function () {
        if (toggle) {
            root.style.setProperty('--bg-body', '#1A1A1A')
            root.style.setProperty('--bg-div', '#000')
            root.style.setProperty('--text-color', '#fff')
            toggle = false
        } else {
            root.style.setProperty('--bg-body', '#f2f2f2')
            root.style.setProperty('--bg-div', '#fff')
            root.style.setProperty('--text-color', '#000')
            toggle = true

        }
    })
})



/* change color - تغییر رنگ */
let divColor = document.querySelectorAll('.div-color')

divColor.forEach(function (changeColor) {

    changeColor.addEventListener('click', function (event) {

        if (event.target.value == "orange") {
            root.style.setProperty('--one-color', '#FFCC00')
            root.style.setProperty('--tow-color', '#000')
        } else if (event.target.value == "pink") {
            root.style.setProperty('--one-color', '#FF9999')
            root.style.setProperty('--tow-color', '#000')
        } else if (event.target.value == "purple") {
            root.style.setProperty('--one-color', '#CC3399')
            root.style.setProperty('--tow-color', '#fff')
        } else if (event.target.value == "gold") {
            root.style.setProperty('--one-color', '#F2BE5B')
            root.style.setProperty('--tow-color', '#000')
        } else if (event.target.value == "brown") {
            root.style.setProperty('--one-color', '#996633')
            root.style.setProperty('--tow-color', '#fff')
        } else if (event.target.value == "red") {
            root.style.setProperty('--one-color', '#FF0000')
            root.style.setProperty('--tow-color', '#fff')
        } else if (event.target.value == "blue") {
            root.style.setProperty('--one-color', '#00CCFF')
            root.style.setProperty('--tow-color', '#fff')
        } else if (event.target.value == "green") {
            root.style.setProperty('--one-color', '#33CC66')
            root.style.setProperty('--tow-color', '#fff')
        }

    })

})

function getColorCodeOne(valueColor) {
    console.log(valueColor)
    root.style.setProperty('--one-color', valueColor)
}
function getColorCodeTwo(valueColor) {
    console.log(valueColor)
    root.style.setProperty('--tow-color', valueColor)
}



/* sidebar Mobile - سایدبار موبایل */
let toggleSidebar = true

buttonSidebar.addEventListener('click', function () {

    if (toggleSidebar) {
        document.querySelector('section').style.opacity = 0.4
        toggleSidebar = false
    } else {
        document.querySelector('section').style.opacity = 1
        toggleSidebar = true
    }

    sidebarMobile.classList.toggle('active-sidebar')

})

document.querySelector('section').addEventListener('click', function () {
    sidebarMobile.classList.remove('active-sidebar')
    document.querySelector('section').style.opacity = 1
    toggleSidebar = true
})



/* type text - تایپ متن */

document.addEventListener('DOMContentLoaded', function () {
    const typingTextElementP = document.getElementById('typing-text-p');
    const textP = typingTextElementP.innerHTML; // متن خود را ویرایش کنید
    let indexP = 0;

    function typep() {
        typingTextElementP.textContent = textP.slice(0, indexP++);
        if (indexP <= textP.length) {
            setTimeout(typep, 50); // زمان تاخیر بین هر حرف (میلی‌ثانیه)
        }
    }

    typep();
});


document.addEventListener('DOMContentLoaded', function () {
    const fixedWord = "من یک ";
    const variableWords = ["برنامه نویس", "گرافیست", "طراح سایت"]; // کلمات متغیر را اینجا قرار دهید
    const typingTextElement = document.getElementById('typing-text');
    const fixedWordElement = document.getElementById('fixed-word');
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        const currentWord = variableWords[wordIndex];
        typingTextElement.textContent = fixedWord + currentWord.slice(0, charIndex++);
        if (charIndex <= currentWord.length) {
            setTimeout(type, 100); // زمان تاخیر بین هر حرف (میلی‌ثانیه)
        } else {
            setTimeout(erase, 500); // زمان تاخیر قبل از حذف متن (میلی‌ثانیه)
        }
    }

    function erase() {
        const currentWord = variableWords[wordIndex];
        typingTextElement.textContent = fixedWord + currentWord.slice(0, charIndex--);
        if (charIndex >= 0) {
            setTimeout(erase, 50); // زمان تاخیر بین هر حرف حذف شده (میلی‌ثانیه)
        } else {
            charIndex = 0;
            wordIndex = (wordIndex + 1) % variableWords.length; // استفاده از باقی‌مانده تا تغییر کلمه به صورت حلقه‌ای
            setTimeout(type, 500); // زمان تاخیر بین حلقه‌ها (میلی‌ثانیه)
        }
    }

    type();
});
