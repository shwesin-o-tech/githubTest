 $(window).load(function(){
        $(".form-input input").val("");
        $(".input-effect input").focusout(function(){
        if($(this).val() != ""){
        $(this).addClass("has-content");
        }else{
        $(this).removeClass("has-content");
        }
        })

        $(".form-textarea textarea").val("");
        $(".input-effect textarea").focusout(function(){
        if($(this).val() != ""){
        $(this).addClass("has-content");
        }else{
        $(this).removeClass("has-content");
        }
        })

    });