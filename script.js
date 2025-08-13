$(document).ready(function(){
   
    $("#lado").change(function (){
        try {
            let valor = parseInt($("#lado").val());
            let perimetro = valor+valor+valor+valor;
            let area = valor*valor;
            $("#perimetro").text(perimetro);
            $("#area").text(area);

        } catch (error) {
            alert("Error en el cálculo")
        }
    });

})