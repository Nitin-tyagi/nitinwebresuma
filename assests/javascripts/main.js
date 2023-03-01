$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
var target = $(this).attr("href");
$(target).addClass("show");
    });

     $(".type-effect").typed({
        strings:["HTML Developer", "CSS Developer","Javascript Developer", "React.js","Node.js"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
     })
});