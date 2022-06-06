
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
  
  