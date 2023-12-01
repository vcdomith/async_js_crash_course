
// Promise
// 
// Uma Promise é uma proxy de um valor não necessáriamente sabido quando a Promise é criada. Permite a associação de um manipulador a ações assíncronas com suas eventuais respostas de sucesso ou fracasso (Só podem ser um dos dois ou ainda está pendente).
//
// A Promise é incerta em sua criação, pois não se sabe como vai ser a resposta de uma API, servidor etc. 
//
// Permite tratar os dois cenários quando a Promise retonar, algo a ser feito com o valor retornado caso obteve sucesso ou chamar um erro ou ação caso obtenha fracasso.
//
// O que é uma Promise?
//
// Uma Promise é simplesmente um objeto em JavaScript
//
// Uma Promise sempre está em um dos seguintes 3 estados:
// 1) pending(pendente): Estado inicial, nem está completo ou rejeitado
// 2) fulfilled(completo): Significa que a operação foi completa com sucesso
// 3) rejected(rejeitada): Significa que a operação falhou. 
//
// Por que usar Promises?
//
// Promises nos permitem lidar com código assíncrono de uma forma bem mais símples do que comparadas com 'callbacks'
//
// Callback Hell pode ser evitado com Promises

// 1) Como criar uma Promise?

const promise_a = new Promise()


// 2) Como completar ou rejeitar um Promise?

const promise_b = new Promise((resolve, reject) => {

    // Quando chamada, muda o estado da Promise de pending para fulfilled
    setTimeout(() => {
        //  Food truck found
        //  Change status from pending to fulfilled
        resolve()

    }, 5000)


    // Quando chamada, muda o estado da Promise de pending para fulfilled
    setTimeout(() => {
        // Food truck not found
        // Change status from pending to rejected
        reject()
        
    }, 5000)

    // O estado de uma Promise não pode ser mutada manualmente, você precisa de uma função para que o estado mude.

})


// 3) Como executar uma função callback baseada na resposta da Promise?

const onFulfillment = (result) => {

    // Resolve was cancelled
    console.log(result);
    console.log('Set up the table to eat tacos');

}

const onRejection = (error) => {

    // Reject was called
    console.log(error);
    console.log('Start cooking pasta');

}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //  Food truck found
        //  Change status from pending to fulfilled
        resolve('Bringing Tacos')
    }, 5000)

    setTimeout(() => {
        //  Food truck found
        //  Change status from pending to fulfilled
        reject('Not bringing tacos. Food truck not there')
    }, 5000)
})


promise.then(onFulfillment)
promise.catch(onRejection)

// Resumo Promises Entrevista:
//
// Explicar o que é uma Promise, explique de uma forma mais pessoal, em suas próprias palavras
// Analogia em um cenário da vida real
// Como são usadas para operações async no JavaScript
// Explicar os tres possíveis estados de uma Promise
// ..

// Promises - Part 2
//
// 1) .then() function:
//
// Pode-se escrever assim, porém, com o catch dentro do .then(). Não é a metodo ideal, pois manuseia apenas o erro da Promise. 
// Se a função callback chama um erro ou exceção, não tem codigo para lidar com isso
//
promise.then(onFulfillment, onRejection)

// 2) Chanining Promises
//
// Ambos .then() e .catch() retornam Promises. Podendo então serem encadeados.
//

// 3) Promise - static Methods
//
// 3.1) Promise.all(Promise[])
//
//  Consulta multiplos APIs e executa algumas ações APENAS após TODAS as APIs terem sido carregadas, ou seja, depois que todas as Promises retornarem com resposta 'fulfilled'.
//
//  Tem um input de um iterável de Promises, mais comumente uma Array, e retorna uma única Promise the conclui em uma Array com o resultado das outras Promises
//  A Promise retornada irá se concluir se todos as Promises no input tiverem sido concluídas ou se o input não tiver nenhuma Promise
//
// 3.2) Promise.allSettled()
//
//  Espera que todas a Promises do input resolvam, independete do resultado, fullfilled ou rejected
//
// 3.3) Promise.race()
//
//  Retorna uma Promise que 'fulfills' ou 'rejected' assim que a primeira Promise que for passada no input resolva, com o valor ou razão dessa Promise. uma 'corrida' de Promises.
//
//