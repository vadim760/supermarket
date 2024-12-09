document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        breakpoints: {
            1024: {
                loop:true,
                slidesPerView: 2,
                centeredSlides: false,
                loopAddBlankSlides: true,
                spaceBetween: 100,
            },
            1920: {
                loop:true,
                slidesPerView: 4,
                centeredSlides: false,
                loopAddBlankSlides: true,
                spaceBetween: 30,
            },
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true, 
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChange : function(){
                updateOpacity(this);
            }
        }


    });
    function updateOpacity(swiperInstance) {
        // Установим полную непрозрачность для всех слайдов
        swiperInstance.slides.forEach(slide => (slide.style.opacity = "1"));
    
        // Определяем, какой индекс слайда изменять
        let offsetIndex;
        if (window.innerWidth <= 1024) {
            // Для экранов с шириной 1024px или меньше
            offsetIndex = 1; // Второй слайд
        } else {
            // Для остальных экранов
            offsetIndex = 3; // Четвертый слайд
        }
    
        const targetIndex = (swiperInstance.activeIndex + offsetIndex) % swiperInstance.slides.length;
    
        // Изменяем прозрачность целевого слайда
        swiperInstance.slides[targetIndex].style.opacity = "0.5";
    }

   

    const openPopup = document.querySelector('.call__back__link');
    const closePopup = document.querySelector('.close');
    const modalWrapper = document.querySelector('.modal__wrapper__close');
    const menuPopup = document.querySelector('.popup__close');

        openPopup.addEventListener('click', () => {
            menuPopup.classList.toggle('popup__open');
            modalWrapper.classList.toggle('modal__wrapper__open');
        });

        closePopup.addEventListener('click', () => {
            menuPopup.classList.remove('popup__open');
            modalWrapper.classList.remove('modal__wrapper__open');
        }); 
        const menuBtn = document.querySelector('.menu__btn');
        const menuClose = document.querySelector('.menu__close');
        const menuList = document.querySelector('.menu__list');
        const menuShadow = document.querySelector('.menu__close');
        menuBtn.addEventListener('click', ()=> {
            menuList.classList.toggle('menu__list__open');
            menuShadow.classList.toggle('menu__open');
        });
        menuClose.addEventListener('click', ()=> {
            menuList.classList.remove('menu__list__open');
            menuShadow.classList.remove('menu__open');
        });
        const dropdownItems = document.querySelectorAll(".dropdown__item");

        dropdownItems.forEach((item) => {
            item.addEventListener("click", () => {
                const dropdownBorder = item.nextElementSibling;
    
                dropdownItems.forEach((otherItem) => {
                    const otherBorder = otherItem.nextElementSibling;
                    if (otherItem !== item) {
                        otherItem.classList.remove("active");
                        otherBorder.classList.remove("active");
                    }
                });
    
                // Переключение активного состояния текущего элемента
                item.classList.toggle("active");
                dropdownBorder.classList.toggle("active");
            });
        });
});
