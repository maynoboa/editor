<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://files.codepedia.info/files/uploads/iScripts/html2canvas.js"></script>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="cajameme.css">
</head>
<body>
    <!-- <button class="show_img">mostrar</button> -->
    <!-- <span class="btn btn-primary btn-file">
    Browse <input type='file' onchange="readURL(this);" />

    </span> -->
    <div class="hide">
        <input id="btn-Preview-Image" type="button" value="Preview"/>
        <a id="btn-Convert-Html2Image" href="#">Download</a>
        <div class="caja">
            <input type='file' onchange="readURL(this);" />
            <div class=" borde">
                
                <div id="editor" class="editor"> 
                    <img id="blah" src="fondo.png" alt="your image" />
                    <div class="edit">
                        <div id='edit' contenteditable="true" class="edit1" style="margin-top: 30px;">Escribe tu texto aquí.</div>
                    </div>
                    <!-- <div class="otra"></div> -->
                </div>
                <div class="iconos">
                    <img id="aumentar" src="mas.png">
                    <img id="disminuir" src="resta.png">
                </div>
                    
                    <!-- <button id="aumentar">Aumentar tamaño de letra</button>
                    <button id="disminuir">Disminuir tamaño de letra</button> -->
            </div>
                
        </div>
        <div id="previewImage"></div>
    </div>
    <div class="cajaimg">
        <div class="box man">
            <img id="man" src="memes/man.jpeg" >
            <button class="show" onclick="pulsar()">mostrar</button>
        </div>
        <div class="box no">
            <img src="memes/no.jpeg">
            <button class="show" onclick="pulsar1()">mostrar</button>
        </div>
        <div class="box pooh">
            <img src="memes/pooh.jpeg">
            <button class="show" onclick="pulsar2()">mostrar</button>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script type="text/javascript" src="motor.js"></script>
    <script type="text/javascript" src="js.js"></script>
</body>
</html>