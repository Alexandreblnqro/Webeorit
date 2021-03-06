// https://raw.githubusercontent.com/Alexandreblnqro/Webeorit/master/src/translation.json

let activeLang = "en"; // DEFAULT TRANSLATION
let jsonValue;

$.ajax({
    url: "https://raw.githubusercontent.com/Alexandreblnqro/Webeorit/master/src/translation.json",
    type: "get",
    dataType: 'text',
    success: function (data) {
        let jsonValue = JSON.parse(data); // TRANSFORM STRING JSON IN OBJECT JSON
        console.log(jsonValue.lang[0].fr[0].title); // RECUPERE LE TITRE DU JSON


        $("#traductionDebug").click(traduction) // QUAND ON CLIQUE, EFFECTUE LA TRADUCTION

        function traduction() {

            console.log('traduction'); // ETRE SUR QUE LA FONCTION SE LANCE

            $.each($(".aTraduire"), function () { // POUR CHAQUE CLASSE A TRADUIRE DANS LE HTML
                //console.log($(this).attr("id"));
                // console.log($(this).attr("id")); // RECUPERE L'ID DE L'ELEMENT A TRADUIRE
            })


            if (activeLang == "en") {
                $('#titleHeader').text(jsonValue.lang[0].fr[0].title);
                $('#rightTitle').text(jsonValue.lang[0].fr[0].title);
                $('#rightSubTitle').text(jsonValue.lang[0].fr[0].subTitle);
                $('#presentationLeft').text(jsonValue.lang[0].fr[0].presentationLeft);
                $('#worldMap').text(jsonValue.lang[0].fr[0].menu[0].WorldMap);
                $('#americaMap').text(jsonValue.lang[0].fr[0].menu[0].AmericaMap);
                $('#europeMap').text(jsonValue.lang[0].fr[0].menu[0].EuropeMap);
                $('#asiaMap').text(jsonValue.lang[0].fr[0].menu[0].AsiaMap);
                activeLang = "fr";
            } else {
                $('#titleHeader').text(jsonValue.lang[0].en[0].title);
                $('#rightTitle').text(jsonValue.lang[0].en[0].title);
                $('#rightSubTitle').text(jsonValue.lang[0].en[0].subTitle);
                $('#presentationLeft').text(jsonValue.lang[0].en[0].presentationLeft);
                $('#worldMap').text(jsonValue.lang[0].en[0].menu[0].WorldMap);
                $('#americaMap').text(jsonValue.lang[0].en[0].menu[0].AmericaMap);
                $('#europeMap').text(jsonValue.lang[0].en[0].menu[0].EuropeMap);
                $('#asiaMap').text(jsonValue.lang[0].en[0].menu[0].AsiaMap);
                activeLang = "en";
            }

        }

    }
});

