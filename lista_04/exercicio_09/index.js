
        /**
         
         *
         * @param {number} ano O ano a ser verificado.
         * @return {boolean} Retorna true se o ano for bissexto, false caso contrário.
         */
        function ehBissexto(ano) {
            return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        }

        
        function verificarAno() {
           
            const ano = parseInt(document.getElementById('ano').value, 10);

            
            if (isNaN(ano)) {
                alert("Por favor, insira um valor de ano válido.");
                return;
            }

          
            const resultado = ehBissexto(ano);

           
            const mensagem = resultado 
                ? `O ano ${ano} é bissexto` 
                : `O ano ${ano} não é bissexto`;
            
            document.getElementById('resultado').textContent = mensagem;
        }