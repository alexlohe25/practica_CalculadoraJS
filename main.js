function calcula(operacion){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    console.log(num1);
    console.log(num2);
    var url = "http://localhost:8085/"+ operacion +"/?num1=" + num1 + "&num2=" + num2;
    
    $.getJSON(url,
        function(json) {
            console.log(json);
            window.alert("Resultado: " + json.result)
        }
    );
}