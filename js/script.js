//Слайдер
$(document).ready(function () {
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
});



// Мобильное меню
let mobileMenu = document.querySelector('#mobile-menu')
let mobileMenuButton = document.querySelector('#mobile-menu-open')
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__item')
let mobileMenuButtonClose = document.querySelector('#mobile-menu-close')

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





// =========================
// ВЫЗОВ ФОРМЫ
let summonedForm = document.querySelector('#summoned-form')
let summonedFormButtons = document.querySelectorAll('.summon-form-button')
let summonedFormClose = document.querySelector('#summoned-form-close')

// Переменная для хранения id кнопки, которую нажали
let formSummonerId = ''

summonedFormButtons.forEach(e => e.addEventListener('click', (e) => {

    // Получаем id кнопки, которую нажали
    formSummonerId = e.target.id

    e.preventDefault()
    summonedForm.classList.add('active')

    // Чистим скрытый input формы и кладем туда id кнопки, которую нажали
    $('#form-summoner').val('')
    $('#form-summoner').val(formSummonerId)
}))

summonedFormClose.addEventListener('click', (e) => {
    e.preventDefault()
    summonedForm.classList.remove('active')

    // Чистим переменную для хранения id и скрытый input формы
    formSummonerId = ''
    $('#form-summoner').val('')

    // Чистим ответное сообщение
    document.getElementById('response').reset();
})
// =========================



// =========================
// ЗАКРЫТИЕ ФОРМЫ ПО КЛИКУ ВНЕ ЭТОЙ ФОРМЫ
$(document).click(function (e) {
    if ($(e.target).is('#summoned-form')) {
        e.preventDefault()
        summonedForm.classList.remove('active')
    }
});
// =========================



// =========================
// МАСКА ДЛЯ ПОЛЯ ВВОДА НОМЕРА ТЕЛЕФОНА
var elements = document.getElementsByClassName('input-phone');
for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {

        // Автоматический ввод 7-ки
        mask: '+{7} (000) 000-00-00',
        prepare: function (appended, masked) {

            // Замена 8-ки на 7-ку
            if (appended === '8' && masked.value === '') {
                return '';
            }
            return appended;
        },
    });
}
// =========================



// =========================
// Форма Whatsapp
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
// =========================



// =========================
// Форма отправки файла
let fileName
let fileInput = document.querySelector("#upload-file1");
let fileInputLabel = document.querySelector('#input-for-file')
let fileForm = document.querySelector('#form-file')


fileInput.addEventListener("change", (e) => {
    e.preventDefault()
    
    fileName = fileInput.files[0].name
    console.log(fileName)
    fileInputLabel.classList.add('success')
    fileInputLabel.placeholder = fileName
});
// =========================





// =========================
// Форма отправки файла
//$("#js-file").change(function(){


/*
$("#upload-file__form").submit(function () {

    $.ajax({
        type: "POST",
        url: 'php/form_file.php',
        data: new FormData("#upload-file__form"),
        processData: false,
        contentType: false,
        beforeSend: function () {
            // Вывод текста в процессе отправки
            $("#upload-file__form").html('<p style="text-align:center">Отправка...</p>');
        },
        success: function (data) {
            // Вывод текста результата отправки
            $("#upload-file__form").html('<p style="text-align:center">' + data + '</p>');
        },
        error: function (jqXHR, text, error) {
            // Вывод текста ошибки отправки
            $("#upload-file__form").html(error);
        }
    });
    return false;
});*/

// =========================


// =========================
// ОТПРАВКА ФОРМЫ
// Слушаем submit формы с id = summoned-form__form
$('#summoned-form__form').submit(function () {
    $.post(
        'php/form_ajax.php',                        // файл обработчика
        $("#summoned-form__form").serialize(),  // отправляемые данные  		

        // Получен ответ сервера
        function (msg) {
            $('#response').html(msg);                                   // Вывдодим сообщение
            document.getElementById('summoned-form__form').reset();     // Чистим форму
        }
    );
    return false;
});

// Слушаем submit формы с id = promo__form
$('#promo__form').submit(function () {
    $.post(
        'php/form_ajax.php',                        // файл обработчика
        $("#promo__form").serialize(),  // отправляемые данные

        // Получен ответ сервера
        function (msg) {
            $('#response').html(msg);                                   // Вывдодим сообщение
            document.getElementById('promo__form').reset();     // Чистим форму
        }
    );
    return false;
});

// =========================