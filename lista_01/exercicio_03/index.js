document.addEventListener("DOMContentLoaded", function() {
    const botaoCalcularIdade = document.getElementById("calcularIdade");
    const resultadoParagrafo = document.getElementById("resultado");

    botaoCalcularIdade.addEventListener("click", function() {
        // Obter o ano de nascimento digitado pelo usuário
        const anoNascimento = document.getElementById("anoNascimento").value;

        // Validar se o campo não está vazio e se contém um número válido
        if (anoNascimento.trim() === '' || isNaN(anoNascimento)) {
            alert("Por favor, digite um ano de nascimento válido.");
            return;
        }

        // Calcular a idade
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - anoNascimento;

        // Exibir o resultado na página
        resultadoParagrafo.textContent = `Sua idade é ${idade} anos.`;
    });
});
