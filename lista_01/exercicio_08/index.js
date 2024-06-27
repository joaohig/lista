function countWords() {
    
    var text = document.getElementById('textInput').value.trim();
    
   
    if (text === '') {
      alert('Por favor, insira um texto para contar as palavras.');
      return;
    }
    
   
    var words = text.split(/\s+/);
    
    
    var wordCount = words.length;
    
   
    document.getElementById('wordCount').textContent = 'Número de Palavras: ' + wordCount;
  }
  