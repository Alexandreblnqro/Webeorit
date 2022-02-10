````javascript```
```
$(document).ready(function () { // WHEN DOCUMENT IS READY
$.getJSON("src/translation.json", function (json) {

        //console.log(json);

        $.each(json, function (i) {

            //console.log(json[i]);

            let jsonLang = json.eng
            $.each(jsonLang, function (j){
                console.log(jsonLang[j]);
            })
        })

    });
})

```



