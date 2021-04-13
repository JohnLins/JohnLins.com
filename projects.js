    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/JohnLins/repos",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                $("#repo_list").append(
                    "<li><a href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a><br/>" /* <a href=\"" + result[i].homepage + "\">" + result[i].homepage + "</a> " */ + result[i].description + "<br/> <p> Created at: " + result[i].created_at + ", Updated at: " + result[i].updated_at + "</p> <b>" + result[i].language + "</b></li>"
                );
                console.log("i: " + i);
            }
            console.log(result);
            $("#repo_count").append("Total Repos: " + result.length);
        }
    });
