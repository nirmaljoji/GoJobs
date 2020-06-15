/*!
    * Start Bootstrap - Freelancer v6.0.3 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
// var y;
//    var request = new XMLHttpRequest();
//    request.open("GET", "/json/freshersworld.json", false);
//    request.send(null);
//    request.onreadystatechange = function() {
//      if ( request.readyState === 4 && request.status === 200 ) {
//        var my_JSON_object = JSON.parse(request.responseText);
//        y=my_JSON_object[0].title;
//        console.log(y);
//        var distinct = [];
//        console.log(my_JSON_object.length);
//        for (var i = 0; i < my_JSON_object.length; i++){
//         var a=my_JSON_object[i].location;
//         var cities=a.split(',');
//         console.log(a);
//         console.log(cities);
//          for(var j=0; j<cities.length;j++){
//           if (!distinct.includes(cities[j])){
//             distinct.push(cities);
//           }
//          }
//        }
//       console.log(distinct);
       
//    var x ="", i;
//    for (i=0; i<distinct.length; i++) {
//      x = x + '<div class="col-md-6 col-lg-4 mb-5"><div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1"><div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"><div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div></div><p id=location_list>'+distinct[i]+'</p><img class="img-fluid" src="assets/img/portfolio/game.png" alt="" /></div></div>';
//    }
//    document.getElementById("demo").innerHTML = x;
      
//      }
//    }
var loadFile = function (filePath, done) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () { return done(this.responseText) }
  xhr.open("GET", filePath, true);
  xhr.send();
}
// paths to all of your files
var myFiles = [ "/json/freshersworld.json", "/json/myamcat.json", "/json/timesjobs.json"];
// where you want to store the data
var jsonData = [];
// loop through each file
myFiles.forEach(function (file, i) {
  // and call loadFile
  // note how a function is passed as the second parameter
  // that's the callback function
  loadFile(file, function (responseText) {
      // we set jsonData[i] to the parse data since the requests
      // will not necessarily come in order
      // so we can't use JSONdata.push(JSON.parse(responseText));
      // if the order doesn't matter, you can use push
      jsonData[i] = JSON.parse(responseText);
      // or you could choose not to store it in an array.
      // whatever you decide to do with it, it is available as
      // responseText within this scope (unparsed!)
  })
})


   
  

  

    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  

