$(document).ready(function(){

	
    var element = $("#editor"); // global variable
    var getCanvas; // global variable
     
        $("#btn-Preview-Image").on('click', function () {
             html2canvas(element, {
             onrendered: function (canvas) {
                    $("#previewImage").append(canvas);
                    getCanvas = canvas;
                 }
             });
        });
    
        $("#btn-Convert-Html2Image").on('click', function () {
        var imgageData = getCanvas.toDataURL("image/png");
        // Now browser starts downloading it instead of just showing it
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
        });
    
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result);
            };
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    function doRichEditCommand(aName, aArg){
        document.execCommand(aName,false, aArg);
      }
/*----------aumentar tamaño----------*/

var fontSize = 1,
    factor = 0.1;

$('#aumentar').on('click', function() {
  fontSize = fontSize + factor;
  $('.edit1').css( {"font-size": fontSize + 'em'});
});

$('#disminuir').on('click', function() {
  fontSize = fontSize - factor;
  $('.edit1').css( {"font-size": fontSize + 'em'});
});

/*------hide-show-----------*/
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
     $(".show").click(function(){
    //   $(".hide").show();
    });
  });