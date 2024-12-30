// Função comprar que chama as demais funções para realizar a compra 
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
   
    // Chama a função do ingresso escolhido
    if(tipo.value == 'pista'){
        comprarPista(qtd);
    }else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else if(tipo.value == 'inferior'){
        comprarInferior(qtd);
    }
}

// Função comprar ingressos para pista
function comprarPista(qtd) {
    // Obtêm o elemento 'qtd-pista' e converte em inteiro e atribui a variável
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    // Checa se há ingressos disponíveis ou não
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para pista!');
    }else {
        // Faz o decremento de ingressos da quantidade total
        qtdPista = qtdPista - qtd;
        // Atualiza no html a quantidade do elemento 'qtd-pista'
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert(`Compra de ${qtd} ingresso(s) para pista realizada com sucesso!`);
    }
}

// Função comprar ingressos para cadeira superior
function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior) {
        alert('Quantidade indisponível para cadeira superior!');
    }else{
        qtdSuperior -= qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert(`Compra de ${qtd} ingresso(s) para a cadeira superior realizada com sucesso!`);
    }
}

// Função comprar ingressos para cadeira inferior
function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior) {
        alert('Quantidade indisponível para cadeira inferior!');
    }else{
        qtdInferior -= qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert(`Compra de ${qtd} ingresso(s) para a cadeira inferior realizada com sucesso!`);
    }
}