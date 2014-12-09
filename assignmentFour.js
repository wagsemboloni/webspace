var submit = document.getElementById("submit");
submit.addEventListener("click", showEvents);

function showEvents(){
otherform.style.display = "block";
}

var submit1 = document.getElementById("submit1");
submit1.addEventListener("click", hideEvents);

function hideEvents(){
otherform.style.display = "none";
}

//slider banner-----------------------------------
       var hovering = false;
        var slideshow = $("#slider");

        slideshow.mouseenter(function() {
            hovering = true;
        }).mouseleave(function() {
            hovering = false;
            slideShow();
        });
        function slideShow() {
            if (!hovering) {
                var currentImg = (slideshow.children("img:visible").length) ? slideshow.children("img:visible") : slideshow.children("img:first");
                var nextImg = (currentImg.next().length) ? currentImg.next() : slideshow.children("img:first");

                currentImg.delay(1000).fadeOut(500, function() {
                    nextImg.fadeIn(500, function() {
                        setTimeout(slideShow, 1000);
                    });
                });
            }
        }
        $(document).ready(function() {
            slideShow();
        });

		

	
