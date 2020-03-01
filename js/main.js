

    $(document).ready(function() {
        $("#lightSlider").lightSlider({
            item: 3,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,
     
            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////
     
            speed: 400, //ms'
            auto: true,
            loop: true,
            slideEndAnimation: true,
            pause: 2000,
     
            keyPress: true,
            controls: true,
            prevHtml: '',
            nextHtml: '',
     
            rtl:true,
            pager: false,
            adaptiveHeight:true,
     
            responsive : [
            {
                breakpoint:991,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:767,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
          ],
        });
    });


      $(function () {
        var rating = 4.5;
        $(".result").text(rating);
        var changeRating = function (rating) {
          $(this).next().text(rating);
        };
        $(".rateYo1").rateYo({
          rating: rating,
          readOnly: false,
          halfStar: true,
          numStars: 5,
          maxValue: 5,
          rtl: true,
          starWidth: "20px",
          normalFill: "#d0d0d0",
          ratedFill: "#ffcd37",
          spacing: "2px"
        }).on("rateyo.change", function (e, data) {
          changeRating.apply(this, [data.rating]);
        }).on("rateyo.set", function (e, data) {
          changeRating.apply(this, [data.rating]);
        });
      });