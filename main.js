$(window).keydown(function (evt) {
    if (evt.which == 18) {
        $(".key").toggleClass("red");
        $(".gr").toggleClass("active");
    }
    if (evt.which == 65) {
        $("body")
            .removeClass("two three")
            .addClass("one");
        $("#s").removeClass("active");
        $("#d").removeClass("active");
        $("#a").toggleClass("active");
    }
    if (evt.which == 83) {
        $("body")
            .removeClass("one three")
            .addClass("two");
        $("#a").removeClass("active");
        $("#d").removeClass("active");
        $("#s").toggleClass("active");
    }
    if (evt.which == 68) {
        $("body")
            .removeClass("one two")
            .addClass("three");
        $("#a").removeClass("active");
        $("#s").removeClass("active");
        $("#d").toggleClass("active");
    }
    if (evt.which == 32) {
        $(".space").toggleClass("active");
        $(".stand").toggleClass("open");
    }
});

$(".space").click(function () {
    $(".stand").toggleClass("open");
});

$("#a").click(function () {
    $("body").removeClass("two three");
    $("body").addClass("one");
});

$("#s").click(function () {
    $("body").removeClass("one three");
    $("body").addClass("two");
});

$("#d").click(function () {
    $("body").removeClass("one two");
    $("body").addClass("three");
});

$(".gr").click(function () {
    $(".key").toggleClass("red");
});

const w = $("#w"),
    f = $(".fn"),
    k = $(".key");

$(window).keydown(function (evt) {
    if (evt.which == 87) {
        w.toggleClass("green active");
        f.toggleClass("green");
    } else {
        w.removeClass("green active");
    }
});

if (w.click(function () {
        w.toggleClass("green");
    }))

    f.click(function () {
        f.toggleClass("green active");
        testStatus();
    });

function testStatus() {
    if (w.hasClass("green") & f.hasClass("active")) {
        k.toggleClass("green");
    } else {
        k.toggleClass("green");
    }
}