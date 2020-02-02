    const PI = 3.1416;

        function getArea(r){        
            if(isNaN(r) || r<0){
                alert("no valido");
            }else{
                var area = PI * (r*r);
            }
            document.getElementById('resultado').innerHTML = "Resultado es: " + area;
            return area;
        }
