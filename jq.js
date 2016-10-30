$(document).ready(function(){
    $(".pp").slideUp(600,"swing");
    
    $(".personalProfile").mouseover(function(){
                $(".pp").slideDown(600,"swing");
    });
    
    $(".personalProfile").mouseout(function(){
        $(".pp").slideUp(600,"swing");
    });
});

$(document).ready(function(){
    $(".cc").slideUp(800);
    
    $(".contact").mouseover(function(){
        $(".cc").slideDown();
    });
    
    $(".contact").mouseout(function(){
        $(".cc").slideUp(800);
    });
                                                            
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
        }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
