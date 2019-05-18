$(document).ready(function () {
	$(".show_img").click(function (event) {

    	$.ajax({
        		type: "POST",
        		url: "memes.php",
    	}).done(function (msg) {
        		$(".cajaimg").html(msg);
        		// LIMPIEZA DE CONTROLES
        		//$("#texto1").val("");
    	});
    });
    $(".show").click(function (event) {

	});
});
function pulsar(){
    var imagen = document.getElementById("blah");   
    imagen.src= memes/man.jpeg; 
}