var TONGA = { init: function() { intro.init() } };

$(function() { TONGA.init() });

var intro = {
    getElements: function() { $blockLeft = $(".block--left"), $blockLeftBackground = $blockLeft.find(".block__bgi"), $blockLeftCtaWrapper = $blockLeft.find(".block__cta"), $blockLeftCta = $blockLeft.find(".block__cta a"), blockLeftCtaWidth = $blockLeftCta.width(), $blockLeftTitle = $blockLeft.find(".block__title:eq(0) span"), $blockLeftSocialIcon = $blockLeft.find(".block__social__link"), $blockLeftSub = $blockLeft.find(".block__title:eq(1) span"), $blockRight = $(".block--right"), $content = $(".content") },
    setElements: function() { TweenMax.set($blockLeft, { xPercent: -100 }), TweenMax.set($blockLeftBackground, { xPercent: 90 }), TweenMax.set($blockLeftCta, { x: 2 * -blockLeftCtaWidth }), TweenMax.set($blockLeftTitle, { xPercent: -100, autoAlpha: 0 }), TweenMax.set($blockLeftSub, { xPercent: -100, autoAlpha: 0 }), TweenMax.set($blockLeftSocialIcon, { autoAlpha: 0 }), TweenMax.set($content, { y: 5, autoAlpha: 0 }) },
    slideIn: function() {
        var a = new TimelineMax;
        a.to($blockLeft, .1, { autoAlpha: 1 }).to($blockLeft, 1.2, { xPercent: 0, ease: Power4.easeInOut }).to($blockLeftBackground, 0, { autoAlpha: 1 }, "-= 1.2").to($blockLeftBackground, 1.2, { autoAlpha: 1, xPercent: 0, ease: Power4.easeInOut }, "-= 1.2").to($blockLeftTitle, .7, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut, delay: .5 }, "-= 1.2").to($blockLeftSub, .7, { xPercent: 0, autoAlpha: 1, ease: Power4.easeInOut, delay: .55 }, "-= 1.15").to($blockLeftCta, .7, { x: 0, ease: Power4.easeInOut, autoAlpha: 1, delay: .55, onCompleteScope: $blockLeftCta, onComplete: intro.setEndState }, "-= 1.1").staggerTo($blockLeftSocialIcon, .3, { autoAlpha: 1 }, .05, "-= 0.1").staggerTo($content, .35, { y: 0, autoAlpha: 1, ease: Sine.easeOut }, .1, "-= 0.05")
    },
    setEndState: function() { TweenMax.set($blockLeftCtaWrapper, { css: { overflow: "visible" } }) },
    init: function() { intro.getElements(), intro.setElements(), intro.slideIn() }
};