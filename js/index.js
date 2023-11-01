window.addEventListener('DOMContentLoaded', function() {

    // Swiper

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        // пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        a11y: {
            paginationBulletMessage: 'Тут название слайда {{index}}',
        }
    });

    // Бургер меню

    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__left_button').toggleClass('is_active'),
                $('.header__right_nav').toggleClass('is_active')
        });
    });


    // Поиск

    $(document).ready(function() {
        $('.header__right-search-btn-one').click(function(event) {
            $('.header__right-search-btn-one').toggleClass('header__right-search-btn-one-closed')
            $('.header__right-search-form').toggleClass('header__right-search-form-active')
        });
    });

    // Навигация

    document.querySelectorAll('.section-work__nav-item_button').forEach(function(tabsBtn) {

        tabsBtn.addEventListener('click', function(e) {
            const path = e.currentTarget.dataset.path;

            //Изменение цвета табов
            document.querySelectorAll('.section-work__nav-item_button').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__nav-item_button-active');
            });
            this.classList.add('section-work__nav-item_button-active');

            //Переходы на другие табы
            document.querySelectorAll('.section-work__box').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__list-left-active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__list-left-active');
        });

    });


    // Смена картинок по табам


    $(function() {
        var icons = {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        };
        $("#accordion").accordion({
            icons: icons,
            heightStyle: "content",
            active: false,
            collapsible: true
        });

        $("#toggle").button().on("click", function() {
            if ($("#accordion").accordion("option", "icons")) {
                $("#accordion").accordion("option", "icons", null);
            } else {
                $("#accordion").accordion("option", "icons", icons);
            }
        });
    });
})
