//Слайдер

$(document).ready(function(){
    let slidesToShow = 3

    if (window.innerWidth <= 1024) {
        slidesToShow = 2
    }
    if (window.innerWidth <= 768) {
        slidesToShow = 1
    }


    $('.slider').slick({
        slidesToShow,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
    });
    console.log('test')
});



// Мобильное меню

let mobileMenu = document.querySelector('#mobile-menu')
let mobileMenuButton = document.querySelector('#mobile-menu-open')
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__item')
let mobileMenuButtonClose = document.querySelector('#mobile-menu-close')
console.log(mobileMenuButtonClose)

mobileMenuButton.addEventListener('click', (e) => {
    e.preventDefault()
    mobileMenu.classList.add('active')
})

mobileMenuButtonClose.addEventListener('click', (e) => {
    e.preventDefault()
    mobileMenu.classList.remove('active')
})
mobileMenuLinks.forEach(e => e.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
}))


//Вызов формы

let summonedForm = document.querySelector('#summoned-form')
let summonedFormButtons = document.querySelectorAll('.summon-form-button')
let summonedFormClose = document.querySelector('#summoned-form-close')

summonedFormButtons.forEach(e => e.addEventListener('click', (e) => {
    e.preventDefault()
    summonedForm.classList.add('active')
}))

summonedFormClose.addEventListener('click', (e) => {
    e.preventDefault()
    summonedForm.classList.remove('active')
})




//Инициализация Phone Mask

var elements = document.getElementsByClassName('input-phone');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{0} (000) 000-00-00',
  });
}


//Форма Whatsapp
let phone = '79872980427'

whatsappFormInput = document.querySelector('#for-whom__form-input')
whatsappFormSubmit = document.querySelector('#for-whom__form-submit')

whatsappFormSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    let name = whatsappFormInput.value
    
    if (name) {
        let message = `Здравствуйте! Меня зовут ${name}! Пишу вам с сайта https://electroexpress.ru, мне нужны услуги электрика.`
        let messageEncoded = encodeURI(message)

        let link = (`https://api.whatsapp.com/send?phone=${phone}&text=${messageEncoded}`)

        document.location.href = link;
    }
})


//Форма отправки файла
let fileInput = document.querySelector("#upload-file1");
let fileForm = document.querySelector('#form-file')
fileInput.addEventListener("change", (e) => {
    e.preventDefault()
    console.log(fileInput.value)
    console.log(fileForm)
    fileForm.submit()
});

