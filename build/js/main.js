(function ($) {
    ("use strict");

    var preloader = function () {
        setTimeout(function () {
            $(".preload-container").fadeOut("slow", function () {
                $(this).remove();
            });
        }, 1000);
    };

    var headerFixed = function () {
        if ($("header").hasClass("header-fixed")) {
            var nav = $("#header-main");
            if (nav.length) {
                var offsetTop = nav.offset().top,
                    headerHeight = nav.height(),
                    injectSpace = $("<div>", {
                        height: headerHeight,
                    });
                injectSpace.hide();

                if ($("header").hasClass("style-absolute")) {
                    injectSpace.hide();
                } else {
                    injectSpace.insertAfter(nav);
                }

                $(window).on("load scroll", function () {
                    if ($(window).scrollTop() > offsetTop + headerHeight) {
                        nav.addClass("is-fixed");
                    } else {
                        nav.removeClass("is-fixed");
                    }
                    if ($(window).scrollTop() > 300) {
                        nav.addClass("is-small");
                    } else {
                        nav.removeClass("is-small");
                    }
                });
            }
        }
    };

    $("ul.dropdown-menu").on("click", function (event) {
        event.stopPropagation();
    });

    //btnmobile
    var btnMobile = function () {
        if ($("header").hasClass("header")) {
            $(".mobile-button").on("click", function () {
                $(this)
                    .closest("#header-main")
                    .find(".mobile-nav-wrap")
                    .toggleClass("active");
            });
            $(".mobile-nav-close").on("click", function () {
                $(this)
                    .closest("#header-main")
                    .find(".mobile-nav-wrap")
                    .toggleClass("active");
            });
            $(".mobile-nav-wrap .overlay-mobile-nav").on("click", function () {
                $(this)
                    .closest("#header-main")
                    .find(".mobile-nav-wrap")
                    .toggleClass("active");
            });

            $(document).on(
                "click",
                ".menu-item-has-children-mobile",
                function () {
                    var args = { duration: 300 };
                    if ($(this).hasClass("active")) {
                        $(this).children(".sub-menu-mobile").slideUp(args);
                        $(this).removeClass("active");
                    } else {
                        $(".sub-menu-mobile").slideUp(args);
                        $(this).children(".sub-menu-mobile").slideDown(args);
                        $(".menu-item-has-children-mobile").removeClass(
                            "active"
                        );
                        $(this).addClass("active");
                    }
                }
            );
        }
    };

    //changeValue
    var changeValue = function () {
        if ($(".tf-dropdown-sort").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());

                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");

                $(this).addClass("active");
            });
        }
    };

    var btnQuantity = function () {
        $(".minus-btn").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest("div").find("input");
            var value = parseInt($input.val());

            if (value > 1) {
                value = value - 1;
            }

            $input.val(value);
        });

        $(".plus-btn").on("click", function (e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest("div").find("input");
            var value = parseInt($input.val());

            if (value > 0) {
                value = value + 1;
            }

            $input.val(value);
        });
    };

    /* flatAccordion
    -------------------------------------------------------------------------*/
    var flatAccordion = function (class1, class2) {
        var args = { duration: 400 };
        $(class2 + " .toggle-title.active")
            .siblings(".toggle-content")
            .show();
        $(class1 + " .toggle-title").on("click", function () {
            $(class1 + " " + class2).removeClass("active");
            $(this).closest(class2).toggleClass("active");

            if (!$(this).is(".active")) {
                $(this)
                    .closest(class1)
                    .find(".toggle-title.active")
                    .toggleClass("active")
                    .next()
                    .slideToggle(args);
                $(this).toggleClass("active");
                $(this).next().slideToggle(args);
            } else {
                $(class1 + " " + class2).removeClass("active");
                $(this).toggleClass("active");
                $(this).next().slideToggle(args);
            }
        });
    };

    //tabs
    var tabs = function () {
        $(".widget-tabs").each(function () {
            $(this).find(".widget-content-tab").children().hide();
            $(this).find(".widget-content-tab").children(".active").show();
            $(this)
                .find(".widget-menu-tab")
                .children(".item-title")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".widget-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".widget-tabs")
                        .find(".widget-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
        $(".widget-tabs1").each(function () {
            $(this).find(".widget-content-tab1").children().hide();
            $(this).find(".widget-content-tab1").children(".active").show();
            $(this)
                .find(".widget-menu-tab1")
                .children(".item-title1")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".widget-tabs1")
                        .find(".widget-content-tab1")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".widget-tabs1")
                        .find(".widget-content-tab1")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };

    var selectImages = function () {
        if ($(".image-select").length > 0) {
            const selectIMG = $(".image-select");
            selectIMG.find("option").each((idx, elem) => {
                const selectOption = $(elem);
                const imgURL = selectOption.attr("data-thumbnail");
                if (imgURL) {
                    selectOption.attr(
                        "data-content",
                        "<img src='%i'/> %s"
                            .replace(/%i/, imgURL)
                            .replace(/%s/, selectOption.text())
                    );
                }
            });
            selectIMG.selectpicker();
        }
    };

    // select
    var changeValue = function () {
        if ($(".tf-dropdown-sort").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-sort")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());

                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");
                $(this).addClass("active");
            });
        }
        if ($(".tf-dropdown-number").length > 0) {
            $(".select-item").click(function (event) {
                $(this)
                    .closest(".tf-dropdown-number")
                    .find(".text-sort-value")
                    .text($(this).find(".text-value-item").text());

                $(this)
                    .closest(".dropdown-menu")
                    .find(".select-item.active")
                    .removeClass("active");
                $(this).addClass("active");
            });
        }
    };
    //wg-counter
    var counter = function () {
        if ($(document.body).hasClass("counter-scroll")) {
            var a = 0;
            $(window).scroll(function () {
                var counterEl = $(".counter");
                if (counterEl.length > 0 && counterEl.offset()) {
                    var oTop = counterEl.offset().top - window.innerHeight;
                    if (a == 0 && $(window).scrollTop() > oTop) {
                        if ($().countTo) {
                            counterEl
                                .find(".number")
                                .each(function () {
                                    var to = $(this).data("to"),
                                        speed = $(this).data("speed");
                                    $(this).countTo({
                                        to: to,
                                        speed: speed,
                                    });
                                });
                        }
                        a = 1;
                    }
                }
            });
        }
    };

    // hide visible password
    var togglePassword = function (
        formSelector,
        inputSelector,
        toggleSelector
    ) {
        $(formSelector)
            .find(toggleSelector)
            .on("click", function () {
                const $passwordInput = $(formSelector).find(inputSelector);
                const type =
                    $passwordInput.attr("type") === "password"
                        ? "text"
                        : "password";
                $passwordInput.attr("type", type);
                $(this).toggleClass("unshow");
            });
    };
    // change avt
    var changAvt = function () {
        // Khi click vào nút, mở hộp thoại chọn tệp
        $("#chooseImageChange").on("click", function () {
            $("#fileInput").click();
        });

        // Khi người dùng chọn tệp
        $("#fileInput").on("change", function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                // Khi tệp được đọc hoàn tất, hiển thị ảnh đã chọn
                reader.onload = function (e) {
                    $("#previewAvt").attr("src", e.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    };
    var faqWrap = function () {
        $(".faq-wrap-tabs").each(function () {
            $(this).find(".faq-wrap-content-tab").children().hide();
            $(this).find(".faq-wrap-content-tab").children(".active").show();
            $(this)
                .find(".faq-wrap-menu")
                .children(".item-title")
                .on("click", function () {
                    var liActive = $(this).index();
                    var contentActive = $(this)
                        .siblings()
                        .removeClass("active")
                        .parents(".faq-wrap-tabs")
                        .find(".faq-wrap-content-tab")
                        .children()
                        .eq(liActive);
                    contentActive.addClass("active").fadeIn("slow");
                    contentActive.siblings().removeClass("active");
                    $(this)
                        .addClass("active")
                        .parents(".faq-wrap-tabs")
                        .find(".faq-wrap-content-tab")
                        .children()
                        .eq(liActive)
                        .siblings()
                        .hide();
                });
        });
    };
    var menuleft = function () {
        if ($("div").hasClass("section-menu-left")) {
            var bt = $(".section-menu-left").find(".has-children");
            bt.on("click", function () {
                var args = { duration: 300 };
                if ($(this).hasClass("active")) {
                    $(this).children(".sub-menu").slideUp(args);
                    $(this).removeClass("active");
                } else {
                    $(".sub-menu").slideUp(args);
                    $(this).children(".sub-menu").slideDown(args);
                    $(".menu-item.has-children").removeClass("active");
                    $(this).addClass("active");
                }
            });
            $(".sub-menu-item").on("click", function (event) {
                event.stopPropagation();
            });
        }
    };

    // selectCountry
    var selectCountry = function () {
        if ($(".fieldPhoneNumber").length > 0) {

            const phoneInput = $("#phoneInput");

            // Initialize intlTelInput
            const iti = window.intlTelInput(phoneInput[0], {
                utilsScript:
                    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js",
            });

            // Set initial country based on the user's location
            iti.promise.then(function () {
                $(".iti__selected-flag").text(`+84`);
            });

            // Listen for the country change event
            phoneInput.on("countrychange", function () {
                const dialCode = iti.getSelectedCountryData().dialCode;
                $(".iti__selected-flag").text(`+${dialCode}`);
            });
            $(".iti__flag-container").on("click", function () {
                $(".iti__selected-flag").toggleClass("active");

                $(".iti__country-list").toggleClass("show");
                $(".iti__country-list").addClass("overflow-y-auto");
            });
        }
    };

    var collapse_menu = function () {
        if ($("div").hasClass("layout-wrap")) {
            $(".button-collapse-menu").on("click", function (e) {
                $(this).toggleClass("active");
                $(".layout-wrap").toggleClass("active");
                $(".section-menu-left").toggleClass("active");
                $(".section-menu-left-mobile").toggleClass("active");
                $(".section-content-right").toggleClass("active");
                $(".button-show-hide")
                    .find(".mobile-button")
                    .toggleClass("active");
            });
            $(".button-show-hide").on("click", function (e) {
                $(".section-menu-left").toggleClass("active");
                $(".button-show-hide")
                    .find(".mobile-button")
                    .toggleClass("active");
            });
        }
    };

    var video = function () {
        if ($("div").hasClass("widget-video")) {
            $(".popup-youtube").magnificPopup({
                type: "iframe",
            });
        }
    };

    var btn_sidebar = function () {
        $(".button-sidebar-dashboard").on("click", function (e) {
            $(this).toggleClass("active");
            $(".sidebar-dashboard").toggleClass("active");
        });
    };

    var autoPopup = function () {
        if ($("body").hasClass("popup-loader")) {
            if ($(".auto-popup").length > 0) {
                let showPopup = sessionStorage.getItem("showPopup");
                if (!JSON.parse(showPopup)) {
                    setTimeout(function () {
                        $(".auto-popup").modal("show");
                    }, 3000);
                }
            }
            $(".btn-hide-popup").on("click", function () {
                sessionStorage.setItem("showPopup", true);
            });
        }
    };
    //goTop
    var goTop = function () {
        if ($("div").hasClass("progress-wrap")) {
            var progressPath = document.querySelector(".progress-wrap path");
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition =
                progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition =
                progressPath.style.WebkitTransition =
                "stroke-dashoffset 10ms linear";
            var updateprogress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateprogress();
            $(window).scroll(updateprogress);
            var offset = 200;
            var duration = 200;
            jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery(".progress-wrap").addClass("active-progress");
                } else {
                    jQuery(".progress-wrap").removeClass("active-progress");
                }
            });
            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    };

    var retinaLogos = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
          if(retina) {
            var tfheader =$('.header-logo').find('img').data('retina');
            $('.header-logo').find('img').attr({src:tfheader,width:170,height:60});

            var tfmobile =$('#mobile-logo_header').data('retina');
            $('#mobile-logo_header').attr({src:tfmobile,width:170,height:60});

            var tffooter =$('.footer-logo').find('img').data('retina');
            $('.footer-logo').find('img').attr({src:tffooter,width:170,height:60});
          }
    };  

    // Dom Ready
    $(function () {
        preloader();
        headerFixed();
        btnMobile();
        changeValue();
        flatAccordion(".tf-accordion", ".tf-toggle");
        flatAccordion(".tf-accordion1", ".tf-toggle1");
        tabs();
        counter();
        selectImages();
        changeValue();
        btnQuantity();
        togglePassword(
            "#form-register",
            "#pass1",
            ".toggle-password.first-time"
        );
        togglePassword(
            "#form-register",
            "#confirmPass1",
            ".toggle-password.second-time"
        );
        togglePassword(
            "#form-security",
            "#pass2",
            ".toggle-password.first-time"
        );
        togglePassword(
            "#form-security",
            "#confirmPass2",
            ".toggle-password.second-time"
        );
        togglePassword("#form-login", "#pass", ".toggle-password");
        changAvt();
        faqWrap();
        menuleft();
        collapse_menu();
        video();
        selectCountry();
        btn_sidebar();
        autoPopup();
        retinaLogos();
        goTop();
    });
})(jQuery);