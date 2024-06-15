/*
function des(name, id){
$.ajax({
    type: "GET",
    url: "https://api.github.com/repos/johnlins/" + name,


    
    dataType: "json",
    success: function(result) {
        
            $("#"+id).append(
              result.description 
            );
        
        
    }
});

}


function stats(name, id){
  $.ajax({
      type: "GET",
      url: "https://api.github.com/repos/johnlins/" + name,
  
  
      
      dataType: "json",
      success: function(result) {
          
              $("#"+id).append(
                `<p class="sub">` + result.created_at.slice(0, 10) + ` to `+ result.updated_at.slice(0, 10) + ` &#183; <b>` + result.language + `</b> &#183; <a href='` + result.html_url + `' target='_blank'>REPO</a> </p>` 
              );
          
          
      }
  });
  
  }
  

*/

  function listout(projects, id){



    for(let i = 0; i < projects.length; i++){
      let images = ""
      $.ajax({
        type: "GET",
        url: "https://api.github.com/repos/johnlins/" + projects[i].name,
    
   
        
        dataType: "json",
        success: function(result) {

          
            
          for(let j = 0; j < projects[i].imgs.length; j++){
           
            let height = 100;
           

            images = images + `<img src="`+ projects[i].imgs[j] + `" height="` + height + `"/>`
            //height = 100;
          }

          $("#"+id).append(`
              <div class="project">
              <h3>`+projects[i].title+`</h3>
              <br/>
              `+result.description+`
              <br/>`+images+`
              <p class="sub">` + result.created_at.slice(0, 10) + ` to `+ result.updated_at.slice(0, 10) + ` &#183; <b>` + result.language + `</b> &#183; <a href='` + result.html_url + `' target='_blank'>REPO</a> 
              `+ ((typeof projects[i].vid !== 'undefined') ? (`</b> &#183; <a href='` + projects[i].vid + `' target='_blank'>VID</a>`) : ``)  +`
              </p><br/><span>
              `+
              ((typeof projects[i].award !== 'undefined') ? (`&#127942; `+projects[i].award) : ``)
              +`</span>
              </div>`
            )

        }
    });
    }


  }
  

  function listoutworkshops(workshops, id){

    var insert = document.getElementById(id);



    for(let i = 0; i < workshops.length; i++){
      if(workshops[i].vid != ""){
        video = `<div clas="sub"><a href="`+workshops[i].vid+`">VIDEO</a></div>`;
      }

      insert.innerHTML += `<div class="project">
          <h3>`+workshops[i].title+`</h3>
          <br/>
          <iframe src="https://docs.google.com/presentation/d/e/` + workshops[i].code + `/embed?start=true&loop=true&delayms=1000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          <br/>`
          +video+`</div>`

    }

    

    
  }