function calculate() {
    // Obter os valores dos inputs e do select
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    
    var result = 0;
  
    // Verificar a operação selecionada e realizar o cálculo correspondente
    switch(operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Erro: Divisão por zero';
        }
        break;
      default:
        result = 'Operação inválida';
    }
  
    // Exibir o resultado na página
    document.getElementById('result').textContent = 'Resultado: ' + result;
  }
  