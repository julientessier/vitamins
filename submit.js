var pageyes = "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<meta charset=\"UTF-8\">\n" +
    "<head>\n" +
    "    <title>CHOCO HEAVEN</title>\n" +
    "    <script src=\"submit.js\"></script>\n" +
    "    <link rel=\"stylesheet\" href=\"style.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3 col-md-offset-4\">\n" +
    "        <h1>OK Cool voici un chat: </h1>\n" +
    "\n" +
    "<img src=\"facepalm.gif\">"+
    "</div>\n" +
    "</body>\n" +
    "\n" +
    "</html>";

var pageno = "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<meta charset=\"UTF-8\">\n" +
    "<head>\n" +
    "    <title>CHOCO HEAVEN</title>\n" +
    "    <script src=\"submit.js\"></script>\n" +
    "    <link rel=\"stylesheet\" href=\"style.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-3 col-md-offset-4\">\n" +
    "        <h1>OK cool </h1>\n" +
    "\n" +
    "<img src=giphy.gif>" +
    "    </div>\n" +
    "</div>\n" +
    "</body>\n" +
    "\n" +
    "</html>"

function reponse() {
    var answer = $('input[name=exampleRadios]:checked', '#cats').val();
    // alert(answer);
    if( answer == "option1") {
        return document.documentElement.innerHTML = pageyes;
    }
    else {
        return document.documentElement.innerHTML = pageno;
    }
}