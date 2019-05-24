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
foto[3] = "memes/pikachu.jpeg";
foto[4] = "memes/mente.png";
function pulsar(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[1];

}
function pulsar1(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[0];
	document.getElementById("edit").style.marginTop = "0px";
	document.getElementById("edit").style.marginLeft = "0px";
	document.getElementById("edit").style.color = "black";
	document.getElementById("edit").style.fontFamily = "Impact";
}
function pulsar2(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[2];
	document.getElementById("edit").style.marginTop = "92px";
	document.getElementById("edit").style.marginLeft = "211px";
	// var btn = document.createElement("div");
	//   btn.innerHTML = "CLICK ME";
	//   document.body.appendChild(btn);
	//  newdiv.setAttribute("id", "nuevo");
}
function pulsar3(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[3];
	/*padre*/
	document.getElementById("editone").style.marginTop = "0px";
	document.getElementById("editone").style.marginLeft = "0%";
	document.getElementById("editone").style.width = "42%";
		/*hijo*/
	document.getElementById("edit").style.marginTop = "0px";
	document.getElementById("edit").style.marginLeft = "0px";
	document.getElementById("edit").style.width = "100%";
	document.getElementById("edit").style.fontSize = "2em";
	document.getElementById("edit").style.color = "white";
}
function pulsar4(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[4];
	document.getElementById("edit").style.marginTop = "0px";
	document.getElementById("edit").style.marginLeft = "0px";
	document.getElementById("edit").style.color = "white";
	document.getElementById("edit").style.fontFamily = "Impact";
	document.getElementById("edit").style.fontSize = "2em";
	document.getElementById("edit").style.color = "white";
	document.getElementById("edit").style.width = "490px";
}
function pulsar(){
    var imagen = document.getElementById("blah");   
	imagen.src=foto[1];


	/*padre*/
	document.getElementById("editone").style.marginTop = "0px";
	document.getElementById("editone").style.marginLeft = "-12%";
	document.getElementById("editone").style.width = "19%";

	/*hijo*/
	document.getElementById("edit").style.marginTop = "379px";
	document.getElementById("edit").style.marginLeft = "0px";
	document.getElementById("edit").style.color = "white";
	document.getElementById("edit").style.fontFamily = "Impact";
	document.getElementById("edit").style.fontSize = "2em";
	document.getElementById("edit").style.color = "white";
	document.getElementById("edit").style.width = "100%";
}
var app6 = new Vue({
	el: '#app-6',
	data: {
	  message: 'Hello Vue	!',
	  mensaje: 'otra caja'
	}
  })