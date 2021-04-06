
var theme = "l";

function otherTheme(){
       // window.alert("hi");
    if(theme == "l"){
        theme = "d"
        document.documentElement.style.setProperty('--text-color', "lightblue");
        document.documentElement.style.setProperty('--back-color', "#1F1E26");
        document.documentElement.style.setProperty('--nav-color', "rgba(31, 30, 38, .55)");
    } else {
        theme = "l"
        document.documentElement.style.setProperty('--text-color', "black");
        document.documentElement.style.setProperty('--back-color', "white");
        document.documentElement.style.setProperty('--nav-color', "rgba(255, 255, 255, .55)");
        
        
    }

 // window.alert(theme);
}





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