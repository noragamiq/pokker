// Custom Scripts
// // Мобильное меню бургер
// function burgerMenu() {
//     const burger = document.querySelector('.burger')
//     const menu = document.querySelector('.menu')
//     const body = document.querySelector('body')
//     burger.addEventListener('click', () => {
//         if (!menu.classList.contains('active')) {
//             menu.classList.add('active')
//             burger.classList.add('active')
//             body.classList.add('locked')
//         } else {
//             menu.classList.remove('active')
//             burger.classList.remove('active')
//             body.classList.remove('locked')
//         }
//     })
//     // Вот тут мы ставим брейкпоинт навбара
//     window.addEventListener('resize', () => {
//         if (window.innerWidth > 991.98) {
//             menu.classList.remove('active')
//             burger.classList.remove('active')
//             body.classList.remove('locked')
//         }
//     })
// }
// burgerMenu()
// Модальное окно
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
      modal = document.querySelector(modal),
      close = document.querySelector(close)
  
    const body = document.body
  
    trigger.addEventListener('click', e => {
      e.preventDefault()
      modal.style.display = 'flex'
      body.classList.add('locked')
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none'
       body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none'
         body.classList.remove('locked')
      }
    })
  }
  
  // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
  // ВТОРОЙ аргумент - класс самого модального окна.
  // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
  bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
  


const leftMenu = document.querySelector('.left-menu');
const menuBtn =document.querySelector('.menu-bttn');
const menuOverlay = document.querySelector('.menu__overlay')

menuBtn.addEventListener('click', (e) => {
    leftMenu.classList.toggle('show-left-menu')
    menuBtn.classList.toggle('menu-active')
    menuOverlay.classList.toggle('overlay__active')
    document.body.classList.toggle('hide')
})
menuOverlay.addEventListener('click', (e) => {
    leftMenu.classList.toggle('show-left-menu')
    menuBtn.classList.toggle('menu-active')
    menuOverlay.classList.toggle('overlay__active')
    document.body.classList.toggle('hide')

})


const dropdownList = document.querySelectorAll('.dropdown-list');
const hasDropDown = document.querySelectorAll('.has-dropdown')
const arrowMenu = document.querySelectorAll('.arrow-menu')

// hasDropDown.forEach((item, i) => {
//     console.log(item[i]);
//     item[i].addEventListener('click', (e) => {
//         dropdownList.forEach((item, i) => {
//             item[i].classList.toggle('dropping-down')
//             console.log(item[i]);
//             arrowMenu.forEach(item => {
//                 item.classList.toggle('arrow-rotate')
//             })
//         })
//     })
// })

function dropdown() {
    const selectItem = document.querySelectorAll(".has-dropdown");
    console.log(selectItem);
    selectItem.forEach((item, i) => {
      item.addEventListener("click", (event) => {
        const selectBody = document.querySelectorAll(".dropdown-list");
        
        selectBody[i].classList.toggle("dropping-down");
      });
    });
  }
  
  
dropdown();

if(leftMenu.classList.contains('show-left-menu')){
    document.body.addEventListener('click', (e) => {
        
            leftMenu.classList.remove('show-left-menu')
        
    })
}


const boxOffer = document.querySelectorAll('.box-offer')
console.log(boxOffer);
boxOffer.forEach((item, i) => {
    item.classList.remove('active')
    item.addEventListener('click', () => {
        
        item.classList.toggle('active')
    })
    
})





