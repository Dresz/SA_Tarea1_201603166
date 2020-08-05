const Url = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator'
    +'&webserviceVersion=1.0.0&option=contact&api=hal'
function insertar() {
    let parametros = {
        name: document.getElementById("nombre").value
    }
    
    $.ajax({
        url:Url,
        type: 'Post',
        data: JSON.stringify(parametros),
        success: function(result){
            console.log(result)
        },
        error: function(error){
            console.log(error)
        }
    });

}

function obtener() {
    var GUrl = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator'
    +'&webserviceVersion=1.0.0&option=contact&api=hal'
    +'&list[limit]=0&filter[search]=201603166'
    
    $.ajax({
        url:GUrl,
        type: 'Get',
        success: function(result){
            var ob = result._embedded.item
            console.log(ob)
            
            ob.forEach(element => {
                var newRow=document.getElementById('customers').insertRow();
                newRow.innerHTML="<td>"+element.id+"</td><td>"+element.name+"</td>"; 
            });
            
        },
        error: function(error){
            console.log(error)
        }
    });

}
obtener()

