<?php

define('PI', 3.14159);


function areaCirculo($raio) {
    return PI * pow($raio, 2);
}


$raio = (float)readline("Digite o raio do círculo: ");


$area = areaCirculo($raio);


printf("A area do circulo eh %.3f\n", $area);
?>