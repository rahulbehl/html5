$(document).ready(function () {
    initialize();
});

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(49.6267318, 11.0418231),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-wrap"), mapOptions);

    var styles = [
        {
            stylers: [
                {visibility: "simplified"},
                {gamma: 1.56},
                {saturation: -10},
                {hue: "grey"}
            ]
        }
    ];
    map.setOptions({styles: styles, scrollwheel: false});

    var info_window = new google.maps.InfoWindow({
        content: 'loading'
    });



    var t = [];
    var x = [];
    var y = [];
    var h = [];
    var z = [];

    t.push('Standesamt');
    z.push('img/pointer-entlas-keller.png');
    x.push(49.6082036);
    y.push(11.001571);
    h.push('<p class="highlight-map txtpink">Entla\'s Keller</p><p>Sat 22 Aug 2015 4:30pm – 7:30pm</p><br><p class="map"><a href="https://www.google.com/maps/dir//Entlas-Keller+Biergarten+GmbH,+An+den+Kellern+5,+91054+Erlangen/@49.60801,11.00342,17z/data=!4m13!1m4!3m3!1s0x47a1f8fab31b85d5:0x5913460112b87abc!2sEntlas-Keller+Biergarten+GmbH!3b1!4m7!1m0!1m5!1m1!1s0x47a1f8fab31b85d5:0x5913460112b87abc!2m2!1d11.00342!2d49.60801?hl=en" target="_blank">Directions to here</a><br><a href="https://www.google.com/maps/dir/Entlas-Keller+Biergarten+GmbH,+An+den+Kellern+5,+91054+Erlangen,+Germany//@49.6082036,11.001571,15.25z/data=!4m8!4m7!1m5!1m1!1s0x47a1f8fab31b85d5:0x5913460112b87abc!2m2!1d11.00342!2d49.60801!1m0?hl=en" target="_blank"> Directions from here</a><br><a href="files/Frühschoppen.ics">Add to iCal</a><br><a href="https://www.google.com/calendar/event?action=TEMPLATE&tmeid=Z3BwNTVodG9iaG1yY3I0ZXR2YTZldnJhb2sga2FyZW5qaWxsb25nQG0&tmsrc=karenjillong%40gmail.com">Add to Google calendar</a></p><br>');

    t.push('Hyatt Regency');
    z.push('img/pointer-nh-erlangen.png');
    x.push(49.5901763);
    y.push(11.0074023);
    h.push('<p class="highlight-map txtpink">NH Erlangen</p><p>Fri 21 Aug 2015</p><br><p class="map"><a href="https://www.google.com/maps/dir//Hotel+NH+Erlangen,+Beethovenstra%C3%9Fe+3,+91052+Erlangen/@49.5902641,10.9335853,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47a1f8d8ed52e079:0x3058c3523d492b13!2m2!1d11.0074023!2d49.5901763?hl=en" target="_blank"> Directions to here</a><br><a href="https://www.google.com/maps/dir/\'\'//@49.5873602,10.9982374,13z/data=!4m8!4m7!1m5!1m1!1s0x0:0x3058c3523d492b13!2m2!1d11.0074023!2d49.5901763!1m0?hl=en" target="_blank">Directions from here</a><br><a href="files/Check-into-Hotel-NH-Erlangen.ics">Add to iCal</a><br><a href="http://www.google.com/calendar/event?action=TEMPLATE&tmeid=cjZlbW5yZjVkZ3RhcmgxNmd2dmZnMWFnc2sga2FyZW5qaWxsb25nQG0&tmsrc=karenjillong%40gmail.com">Add to Google calendar</a></p><br>');

    t.push('Hyatt Regency');
    z.push('img/pointer-schloss-atzelsberg.png');
    x.push(49.6267318);
    y.push(11.0418231);;
    h.push('<p class="highlight-map txtpink">Schloss Atzelsberge</p><p>Fri 21 Aug 9:30pm – Sat 22 Aug 2015 6:30am</p><br><p class="map"><a href="https://www.google.com/maps/dir//Schloss+Atzelsberg,+Atzelsberg+1,+91080+Marloffstein/@49.6267349,11.0420348,17.75z/data=!4m13!1m4!3m3!1s0x47a1f9bb1249aea3:0x22915b22b5716d04!2sSchloss+Atzelsberg!3b1!4m7!1m0!1m5!1m1!1s0x47a1f9bb1249aea3:0x22915b22b5716d04!2m2!1d11.0418231!2d49.6267318?hl=en" target="_blank">Directions to here</a><br><a href="https://www.google.com/maps/dir/Schloss+Atzelsberg,+Atzelsberg+1,+91080+Marloffstein,+Germany//@49.6266166,11.0411755,15.25z/data=!4m8!4m7!1m5!1m1!1s0x47a1f9bb1249aea3:0x22915b22b5716d04!2m2!1d11.0418231!2d49.6267318!1m0?hl=en" target="_blank">Directions from here</a><br><a href="files/Polterabend-von-Karen-und-Michael.ics">Add to iCal</a><br><a href="https://www.google.com/calendar/event?action=TEMPLATE&tmeid=dTFmcjh1NzJkODFobTJicTgya24wc2h2ZTAga2FyZW5qaWxsb25nQG0&tmsrc=karenjillong%40gmail.com">Add to Google calendar</a></p><br>');

    var i = 0;
    for (item in t) {
        var m = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            title: t[i],
            position: new google.maps.LatLng(x[i], y[i]),
            html: h[i],
            icon: z[i]
        });

        google.maps.event.addListener(m, 'click', function () {
            info_window.setContent(this.html);
            info_window.open(map, this);
        });
        i++;
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

