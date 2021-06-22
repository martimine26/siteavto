var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.1;if
     (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload =
     function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};
     var time = 3,
         cc = 1;
       $(window).scroll(function() {
         $('.fixed').each(function() {
           var
             cPos = $(this).offset().top,
             topWindow = $(window).scrollTop();
           if (cPos < topWindow + 500) {
             if (cc < 2) {
               $(".number").addClass("viz");
               $('div').each(function() {
                 var
                   i = 1,
                   num = $(this).data('num'),
                   step = 1000 * time / num,
                   that = $(this),
                   int = setInterval(function() {
                     if (i <= num) {
                       that.html(i);
                     } else {
                       cc = cc + 2;
                       clearInterval(int);
                     }
                     i++;
                   }, step);
               });
             }
           }
         });
       });
