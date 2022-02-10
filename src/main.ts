// https://raw.githubusercontent.com/Alexandreblnqro/Webeorit/master/src/translation.json

$.ajax({
    url: "https://raw.githubusercontent.com/Alexandreblnqro/Webeorit/master/src/translation.json",
    type:"get",
    dataType: 'text',
    success:function(data) {
        let jsonValue = JSON.parse(data);
        console.log(jsonValue.lang[0].en[0]);
    }
});
