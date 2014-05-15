/**
 * Created by YESEREL on 5/13/14.
 */
$(document).ready(function(){

    var images = ["dali1.jpg",
                "carloemanueleruspoli.jpg",
                "beyzaylidrin.jpg",
                "abduzeedo.jpg"];
    var imageIndex = 0;
    $("#buttonNext").click(function(){
        imageIndex++;
        if(imageIndex == 4){
            imageIndex = 0;
        }

        $("#slide").attr("src", "img/" + images[imageIndex]);
    });

    $("#buttonBefore").click(function(){
        imageIndex--;
        if(imageIndex == -1){
            imageIndex = 3;
        }

        $("#slide").attr("src", "img/" + images[imageIndex]);
    });
});