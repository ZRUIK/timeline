(function (){
    var xmlHttp = '';
    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    } else {
        // IE6 以下
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var container = document.getElementById('app');
            var res = xmlHttp.responseText;
            if (res != null) {
                var data = JSON.parse(res);
                
                var items = new vis.DataSet(data);
                            
                var options = {
                    width: '100%',
                    height: '500px'
                };
                            
                var timeline = new vis.Timeline(container, items, options);
            }
        }
    };
    xmlHttp.open('GET', '../data/data.json' , true);
    xmlHttp.send();
})();
