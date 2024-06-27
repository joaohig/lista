function checkAge() {
   
    var age = parseInt(document.getElementById('ageInput').value);
    
    
    if (age >= 18) {
      document.getElementById('result').textContent = 'Você é maior de idade.';
    } else {
      document.getElementById('result').textContent = 'Você é menor de idade.';
    }
  }
  
