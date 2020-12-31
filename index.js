
        function showResume(){
        document.getElementById("show-resume").innerHTML = `
        <center>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQZnJ2QiKZ2vch7WrK__jSiaBoxlffCgNhq7aIfxFuQ4WqNWwG39ScnYizwqU1VeAB-DmhiakO1TGIw/pub?embedded=true" class="resume-iframe">
        </iframe>
        </center>


        <style>
        .resume-iframe {
        border: 0;
        border-radius: 5px;
        height: 700px;
        width: 700px;
        box-shadow: 0px 0px 15px lightgray;
        
        border: solid 1.5em rgba(#000, .2);
        }
        </style>`
        }