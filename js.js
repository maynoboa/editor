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
    $("#btn-Preview-Image").click(function () {
		var id = this.id; 
		alert(2);
	});
	// $("#man").click(function () {
	// 	var imagen = document.getElementById("blah");   
    // 	imagen.src= memes/man.jpeg; 
	// });
});

var foto = new Array();
foto[0] = "memes/no.jpeg";
foto[1] = "memes/man.jpeg";
foto[2] = "memes/pooh.jpeg";
function pulsar(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[1];
}
function pulsar1(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[0];
	document.getElementById("edit").style.marginTop = "30px";
	document.getElementById("edit").style.marginLeft = "0px";
}
function pulsar2(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[2];
	document.getElementById("edit").style.marginTop = "92px";
	document.getElementById("edit").style.marginLeft = "211px";
	var btn = document.createElement("div");
	  btn.innerHTML = "CLICK ME";
	  document.body.appendChild(btn);
	//  newdiv.setAttribute("id", "nuevo");
}
