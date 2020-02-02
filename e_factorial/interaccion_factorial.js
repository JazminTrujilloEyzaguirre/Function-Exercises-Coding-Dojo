     
        var buton = document.getElementById("gou");
        var num = document.getElementById("numero");

        function factorial(n){        
            if(n<=1){
        		return 1;
        	}
            var fac = n*factorial(n-1);
            document.getElementById('resultado').innerHTML = "Resultado es: " + fac;
            return fac;
        }
