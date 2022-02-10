// https://raw.githubusercontent.com/Alexandreblnqro/Webeorit/master/src/translation.json

var request = new XMLHttpRequest();
request.open(
    "GET",
    "https://raw.githubusercontent.com/Alexandreblnqro/Webeorit/master/src/translation.json",
    false
);
request.onload = function() {
    var data = JSON.parse(request.responseText);
    console.log(data);
};
request.send();
