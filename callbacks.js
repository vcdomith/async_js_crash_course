// Callbacks
//
// No JavaScript, funções são objetos de primeira classe.
//
// > Assim como um objeto, uma função pode ser passada como um argumento para uma função (mesma ou outra)
// > Uma função também pode ser retornada como valores de uma outra função

function greet(name) {

    console.log(`Hello ${name}`);

}

function higherOrderFunction(callback) {

    const name = 'Nilvo'
    callback(name)

}

greetNilvo(greet)

// Why callbacks?
//
// Synchronous vs Assynchronous
//
// Uma callback que é executada imediatamente é chamada de callback síncrona
//
// Callbacks Assíncronos
//
// Uma callback assíncrona é uma função comumente utulizada para 'continuar' ou 'retomar' execução de um código após uma operação assíncrona terminar, ou seja, espere essa operaçao terminar, então faça algo após isso
//
// Callbacks são utilizadas para suspender a execução de uma função até que um intervalo ocorra ou um evento.
//
// O problema de callbacks é que quando a aplicação cresce e ela possuí várias funções que depende do resultado da anterior para funcionar, um aninhament0 (nesting) grande começa a existir, tornando seu código confuso e complexo sem necessidade
//
// Resumo Callbacks para entrevistas:
//
// > Callbacks são funções passadas como argumentos para outras funções
// > Elas podem ser síncronas caso sejam executadas imediatamente ou assíncronas caso sejam executadas com delay, seja por um tempo, por um evento ou dados foram pegos de uma API
// > Callbacks eram o padrão mais comum para ser utilizado com códigos assíncronos após receber dados de uma API
// > Quanto mais requisições eram feitas, o nesting de callbacks iriam aumentando, causando o chamado de "Callback Hell"
// > Callback Hell faz o código dificil de manejar

