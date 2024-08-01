
<?php
        /**
         * Função para verificar se um ano é bissexto.
         *
         * @param int $ano O ano a ser verificado.
         * @return int Retorna 1 se o ano for bissexto, 0 caso contrário.
         */
        function ehBissexto($ano) {
            if (($ano % 4 == 0 && $ano % 100 != 0) || ($ano % 400 == 0)) {
                return 1;
            } else {
                return 0;
            }
        }
