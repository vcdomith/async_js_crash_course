
// Métodos tradicionais que o JavaScript possúi para lidar com código assíncrono:
// 
// > Após um periodo definido de tempo ocorreu setTimeout() ou;
// > Em intervalos regulares de tempo entre si setInterval()

// setTimeout()
// A função setTimeout() executa um bloco de código assim que o tempo definido passou:
//
// setTimeout(function, duration, param1, param2, ...)
//
// Primeiro parâmetro é uma função que irá ser chamada assim que o tempo definido terminar.
// Segundo parâmetro é o tempo definido para a função ocorrer após.
// Os próximos parâmetros são valores que deseja passar para a função quando ela é chamada
function greet(message) {

    console.log(message);

}

const timeoutId = setTimeout(greet, 2000, 'Oi')
clearTimeout(timeoutId)

// setInterval()
// setInterval(function, duration, param1, param2, ...)
const intervalId = setInterval(greet, 2000, 'Oi')
intervalId

// Notas Importantes:
// 
// 1) Timers e Intervalos não são partes do javaScript em si. Eles são implementados pelo browser (ou node) e setTimeout() e setInterval() são apenas nomes dados a essas funções;
//
// 2) O parâmetro de duration é um delay MÍNIMO, não é delay garantido
// Nessa chamada de setTimeout() não é garantido que o greet vai ser chamado imediatamente após 0 milissegundos, mas sim o mínimo após o setTimeout ser chamado na queue
// setTimeout(greet, 0)
//
// 3) É possível atingir o mesmo efeito do setInterval utilizando um setTimeout recursivo
// A diferença entre os dois métodos é que o intervalo em um setTimeout recursivo é garantido ser sempre igual, já o setInterval pode mudar com o tempo de execução do código incluso. O intervalo pode mudar em cada recursão também, um outro ponto notável.