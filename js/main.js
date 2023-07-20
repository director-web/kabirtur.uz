// NAV

const $body = $('body');
const $menuOpen = $('.menu-toggle');
const $menuClose = $('.cancel-btn');
const $btnSearch = $('.search-toggle');
$(function () {
    $menuOpen.click(function () {
        $body.addClass('menu-open');
    });
    $menuClose.click(function () {
        $body.removeClass('menu-open');
    });

    $btnSearch.click(function () {
        $body.toggleClass('search-open');
    });
});


// COUNTER
var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav__menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

console.log(hamburger);
