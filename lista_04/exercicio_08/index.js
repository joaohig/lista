function converteFahrenheitParaCelsius() {
    
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

   
    if (isNaN(fahrenheit)) {
        alert("Por favor, insira um valor de temperatura válido.");
        return;
    }

    
    const celsius = (fahrenheit - 32) * 5 / 9;

   
    document.getElementById('resultado').textContent = `${fahrenheit}F é equivalente a ${celsius.toFixed(2)}C`;
}