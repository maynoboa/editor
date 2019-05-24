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
    <div class="hide" id="app-6">
        <input id="btn-Preview-Image" type="button" value="Preview"/>
        <a id="btn-Convert-Html2Image" href="#">Download</a>
        <input type='file' onchange="readURL(this);" />
        <div class="caja">
            
            <div class=" borde">
                
                <div id="editor" class="editor"> 
                    <img id="blah" src="fondo.png" alt="your image" />
                    <div class="edit" id="editone">
                        <!-- <p id='edit' contenteditable="true" class="edit1" style="margin-top: 30px;">Escribe tu texto aquí.</p> -->
                        <p id='edit' class="edit1">{{message}}</p>                  
                    </div>
                    <div class="edit2">
                        <!-- <p id='edit' contenteditable="true" class="edit1" style="margin-top: 30px;">Escribe tu texto aquí.</p> -->                    
                        <p id='edit' class="edit2">{{mensaje}}</p>
                    </div>
                    <!-- <div class="otra"></div> -->
                </div>
                <div class="iconos">
                    <img id="aumentar" src="mas.png">
                    <img id="disminuir" src="resta.png">      
                    <input v-model="message">
                    <input v-model="mensaje">
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
        <div class="box picachu">
            <img src="memes/pikachu.jpeg">
            <button class="show" onclick="pulsar3()">mostrar</button>
        </div>
        <div class="box mente">
            <img src="memes/mente.png"> 
            <button class="show" onclick="pulsar4()">mostrar</button>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script type="text/javascript" src="motor.js"></script>
    <script type="text/javascript" src="js.js"></script>
</body>
</html>