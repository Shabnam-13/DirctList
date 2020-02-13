$(document).ready(function () {
    // Navbar hover
    var navItem = $("#myNav .navbar .collapse .nav-item");
    var navDropdownItem = $("#myNav .navbar .collapse .nav-item .dropdown-menu div")
    console.log(navDropdownItem)
    navItem.mouseenter(function () {
        $(this).addClass("show");
        $(this).children().eq(0).attr("aria-expanded", true);
        $(this).children().eq(1).addClass("show");  
    })
    navItem.mouseleave(function () {
            $(this).removeClass("show");
            $(this).children().eq(0).attr("aria-expanded", false);
            $(this).children().eq(1).removeClass("show");
    })

    navDropdownItem.mouseenter(function () {
        if($(window).width()>992){
           $(this).children().eq(1).css("visibility", "visible"); 
        }else{
            $(this).children().eq(1).css("visibility", "visible");
            $(this).children().eq(1).addClass("myHoverUl")
        }
    })
    navDropdownItem.mouseleave(function () {
        if($(window).width()>992){
        $(this).children().eq(1).css("visibility", "hidden");  
        }else{
            $(this).children().eq(1).css("visibility", "hidden");  
            $(this).children().eq(1).removeClass("myHoverUl")
        }
    })  
    // Navbar resposive style
    var navBtn = $('#myNav button');
    var ok = true;
    navBtn.click(function () {
        if (ok) {
            $("#myNav nav").addClass("myCollapse");
            $(this).children().removeClass("fa-bars");
            $(this).children().addClass("fa-times");
            $("#myNav nav .dropdown-menu").addClass("myDropdown");
            $("#myNav nav .dropdown-menu a").addClass("myItem");
            ok = false;
        } else {
            $("#myNav nav").removeClass("myCollapse");
            $(this).children().removeClass("fa-times");
            $(this).children().addClass("fa-bars");
            $("#myNav nav .dropdown-menu").removeClass("myDropdown");
            $("#myNav nav .dropdown-menu a").removeClass("myItem");
            ok = true;
        }
    })
    $(window).resize(function () {
        if (!ok) {
            if ($(window).width() > 992) {
                $("#myNav nav").removeClass("myCollapse");
                $("#myNav nav .dropdown-menu").removeClass("myDropdown");
                $("#myNav nav .dropdown-menu a").removeClass("myItem");
                ok = true;
            } else if($(window).width() < 992) {
                $("#myNav nav").addClass("myCollapse");
                $("#myNav nav .dropdown-menu").addClass("myDropdown");
                $("#myNav nav .dropdown-menu a").addClass("myItem");
            }
            ok = false;
        }
    })


    $(window).scroll(function () {
        //Fixed nav
        if ($(document).scrollTop() > 70) {
            $("#myNav").css({ "position": "fixed", "background-color": "#5E72E4" });

        } else {
            $("#myNav").css({ "position": "absolute", "background-color": "rgba(48,32,87,.7)" });
        }
    })

    // List/grid layout
    var gridIcon = $('#layout #content .icons .gridIcon');
    var listIcon = $('#layout #content .icons .listIcon');
    var gridView = $('#layout #content #grid');
    var listView = $('#layout #content #list');
    gridIcon.click(function () {
        if (gridView.css("display", "none")) {
            listView.css("display", "none");
            gridView.css("display", "block");
        }
        console.log(gridView);
    })
    listIcon.click(function () {
        if (listView.css("display", "none")) {
            gridView.css("display", "none")
            listView.css("display", "block")
        }
    })
        var btns = $("#dingloyPlace .content .buttons a");
    var text = $("#dingloyPlace .content .text .show");
    console.log(text)
    btns.click(function () {
        btns.removeClass("active");
        $(this).addClass("active");
        var dataIndex = this.dataset.index;
        console.log(dataIndex)
        for(var i=0; i<text.length; i++){
            if(text[i].classList.contains("myActive")){
                text[i].classList.remove("myActive");
            }
            if(text[i].dataset.index==dataIndex){
                text[i].classList.add("myActive");
            }
        }
    })

    // Home carousel
    $('#categories .owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            766: {
                items: 2,
                center: false
            },
            1034: {
                items: 4,
                center: true
            }
        }
    })
    $('#visitedPlaces .owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                center: false
            },
            990: {
                items: 3
            }
        }
    })
})