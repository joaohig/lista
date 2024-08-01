<?php
        
        function converteFahrenheitParaCelsius($fahrenheit) {
            return ($fahrenheit - 32) * 5 / 9;
        }

        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            $fahrenheit = isset($_POST['fahrenheit']) ? (float)$_POST['fahrenheit'] : 0;

            
            $celsius = converteFahrenheitParaCelsius($fahrenheit);

           
            echo "<div class='result'>" . sprintf("%dF é equivalente a %.2fC", $fahrenheit, $celsius) . "</div>";
        }
        ?>