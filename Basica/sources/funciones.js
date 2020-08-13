

function insertar() {

    var user = 'sa';
    var pass = 'usac';
    
    
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open('POST', 'https://api.softwareavanzado.world/administrator/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap', true);
        xmlhttp.setRequestHeader ("Authorization", "Basic " + btoa(user + ":" + pass));
        // build SOAP request
        var sr =
       ' <Envelope xmlns="http://www.w3.org/2003/05/soap-envelope">'+
        '<Body>'+
            '<create xmlns="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'+
               ' <name xmlns="">'+document.getElementById("nombre").value+'</name>'+
            '</create>'+
            '</Body>'+
    '</Envelope>';

        xmlhttp.onreadystatechange = function () {
            
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    
                    console.log('Listo!');
                }
            }
        }
        // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);
        // send request
        // ...

}

function obtener() {
    

    var user = 'sa';
    var pass = 'usac';
    
    
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open('POST', 'https://api.softwareavanzado.world/administrator/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap', true);
        xmlhttp.setRequestHeader ("Authorization", "Basic " + btoa(user + ":" + pass));
        // build SOAP request
        var sr =
        '<Envelope xmlns="http://www.w3.org/2003/05/soap-envelope">'+
        '<Body>'+
           ' <readList xmlns="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'+
                '<limitStart xmlns="">0</limitStart>'+
                '<limit xmlns="">0</limit>'+
                '<filterSearch xmlns="">201603166</filterSearch>'+
               
                
          '</readList>'+
        '</Body>'+
    '</Envelope>';

        xmlhttp.onreadystatechange = function () {
            
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xmlhttp.responseText,"text/xml");
                    // alert('done. use firebug/console to see network response');
                    var ob =xmlDoc.getElementsByTagName("name");
                    var id = xmlDoc.getElementsByTagName("id");
                    
            
                    for (i = 0; i< ob.length; i++) {
                var newRow=document.getElementById('customers').insertRow();
                newRow.innerHTML="<td>"+id[i].childNodes[0].nodeValue+"</td><td>"+ob[i].childNodes[0].nodeValue+"</td>"; 
            };
                }
            }
        }
        // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);
        // send request
        // ...
    

}

obtener()


