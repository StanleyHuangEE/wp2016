var stateP=0;

$(document).ready(function(){
    $(".pp").slideUp();
        $(".personalProfile").mouseover(function(){
              $(".pp").slideDown();
                                });
                                        $(".personalProfile").mouseout(function(){
                                                    $(".pp").slideUp();
                                                            });
                                                            });

$(document).ready(function(){
    $(".cc").slideUp();
        $(".contact").mouseover(function(){
            $(".cc").slideDown();
        });

    $(".contact").mouseout(function(){
        $(".cc").slideUp();
    });
})
