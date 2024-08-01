const PI = 3.14159;

        function calcularArea() {
          
            const raio = parseFloat(document.getElementById('raio').value);

           
            if (isNaN(raio) || raio <= 0) {
                alert("Por favor, insira um valor de raio válido.");
                return;
            }

            
            const area = PI * Math.pow(raio, 2);

           
            document.getElementById('resultado').textContent = `A área do círculo é: ${area.toFixed(3)}`;
        }