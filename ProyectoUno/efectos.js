/**
 * Created by YESEREL on 3/4/14.
 */
$(document).ready(
    function(){
            $("#calendar").datepicker();
        $("#spring").click(function(){
            var url='/ProyectoUno/spring.txt';
            $.get(url,function(data){
                $("#contents").html(data);
            })
        });
        $("#summer").click(function(){
            var url='/ProyectoUno/summer.txt';
            $.get(url,function(data){
                $("#contents").html(data);
            })
        });
        $("#fall").click(function(){
            var url='/ProyectoUno/fall.txt';
            $.get(url,function(data){
                $("#contents").html(data);
            })
        });
        $("#winter").click(function(){
            var url='/ProyectoUno/winter.txt';
            $.get(url,function(data){
                $("#contents").html(data);
            })
        });



}
);

function alertar (){
    alert("Salga de esta zona de inmediato");
}
