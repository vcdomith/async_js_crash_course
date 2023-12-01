
// async / await
//
// Método mais utilizado para lidar com código assíncrono. Faz seu código assíncrono visualmente pode ser estruturalizado como um síncrono.
//
// async:
//
// Keyword para declarar uma função assíncrona. Que são funções instanciadas do constructor AsyncFunction.
// Diferente de funções normais, elas retornam Promises, por serem assíncronas.
//
// await:
//
// keyword utilizado em frente de uma async Promise para pausar ou espere seu código até que essa Promise resolva e retorna seu valor
//
// Apenas funciona dentro de função async, não pode ser usadas em funções normais.
//
//
// Sequential vs Concurrent vs Parallel Executions
//

function resolveHello() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('Hello')
        }, 2000)
    })
}

function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('World')
        }, 1000)
    })
}

async function sequentialStart() {

    // Demora 2s para resolver
    const hello = await resolveHello()
    console.log(hello);

    // Demora 1s para resolver
    const world = await resolveWorld()
    console.log(world);

    // No total demora 3s para terminar a função, primeiro 2s e depois 1s
}
sequentialStart()

async function concurrentStart() {

    // Metodo ideal para montar uma página. Aciona todos os request de uma vez e usa-se o await para carregar na ordem necessária para montar o UI, sem aumentar o tempo de carregamento.
    const hello = resolveHello()
    const world = resolveWorld()

    console.log(await hello); // Logs depois de 2 segundos
    console.log(await world); // Logs depois de 2 segundos

    // Tempo total é de 2s nesse método
}
concurrentStart()

function parallel() {

    // Nesse método o código que resolver primeira é rodado primeiro, sem estrutura de ordem.

    Promise.all([
        (async () => console.log(await resolveHello()))(), // Logs depois de 2 segundos
        (async () => console.log(await resolveWorld()))() // Logs depois de 1 segundo
    ])
    console.log('Finally');

    // World será logado ANTES de Hello e depois o Finally. Com o tempo total de 2 segundos.
}
parallel()

// Resumo async / await
//
// > Os keywords async/await permitem um comportamento assíncrono, baseado em promises, ser escrito e estruturado de forma mais síncrona, em um estilo mais limpo. Sem precisar a necessidade de explicitamente configurar cadeias de Promises
//
// > Introduzidos no ES2017
//
// > async keywors - sempre retorna uma Promise
//
// > await keyword - pausa execução até que a Promise esteja concluida ou rejeitada
//
// Sequential x concurrent x parallel