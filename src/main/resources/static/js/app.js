$(document).ready(function(){
    $('#consultarPersona').click(function(){
        event.preventDefault();
        var urlData = $('#element_1').val() + ":8080/obtener_tarjeta";
        var fechaNacimiento = $('#element_3_1').val() + "-" + $('#element_3_2').val() + "-" + $('#element_3_3').val();
        var msg = "{" +
            " \"nombre\": \"" + $('#element_2').val() + "\"," +
            " \"fechaNacimiento\": \"" + fechaNacimiento + "\"" +
            "}";

        $.ajax({
            method: "POST",
            url: urlData,
            data: msg,
            dataType: 'json',
            contentType: "application/json"
        }).done(function(data) {
            var personas = $('#listaPersonas');
            personas.append("<tr>\n");
            personas.append("<td>" + data.nombre + "</td>\n");
            personas.append("<td>" + data.apellido + "</td>\n");
            personas.append("<td>" + fechaNacimiento.replace("-","/").replace("-","/") + "</td>\n");
            personas.append("<td>" + data.edad + "</td>\n");
            if (data.saludoCumpleannos){
                var linea = "<td><p>" + data.saludoCumpleannos + "</p><p>Un poema para ti</p>";
                if (data.titulo){
                    linea += "<p>" + data.titulo + "</p>";
                }
                if (data.poema){
                    linea += "<p>" + data.poema + "</p>";
                }
                linea += "</td>";
                personas.append(linea);
            } else {
                personas.append("<td style=\"width: 20%;\">" + data.diasProximo);
            }
            personas.append("</tr>\n");

        }).fail(function(jqXHR, textStatus, errorThrown){
            var respuesta = jqXHR.responseJSON.valueOf().message;
            alert(respuesta);
        });
    })
});