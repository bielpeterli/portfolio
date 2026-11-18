
// Seleciona todas as seções do site
const secoes = document.querySelectorAll("section");

// Configura a animação de entrada
const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
        }

    });

});

// Observa cada seção
secoes.forEach((secao) => {
    observador.observe(secao);
});


// Botão voltar ao topo
const botaoTopo = document.querySelector("#voltar-topo");

// Detecta a rolagem da página
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        botaoTopo.classList.add("visivel");
    } else {
        botaoTopo.classList.remove("visivel");
    }

});

// Volta ao início quando clicar
botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const cursor = document.querySelector("#cursor-personalizado");

document.addEventListener("mousemove", (evento) => {
    cursor.style.left = evento.clientX + "px";
    cursor.style.top = evento.clientY + "px";
});

const elementos = document.querySelectorAll("a, button");

elementos.forEach((elemento) => {
    elemento.addEventListener("mouseenter", () => {
        cursor.classList.add("ativo");
    });

    elemento.addEventListener("mouseleave", () => {
        cursor.classList.remove("ativo");
    });
});

const texto = document.querySelector("#texto-digitando");

const frases = [
    "Desenvolvedor Full Stack em formação",
    "Estudante de ADS",
    "Apaixonado por tecnologia"
];

let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;

function digitar() {
    const frase = frases[fraseAtual];

    if (apagando) {
        texto.textContent = frase.substring(0, letraAtual - 1);
        letraAtual--;
    } else {
        texto.textContent = frase.substring(0, letraAtual + 1);
        letraAtual++;
    }

    let velocidade = apagando ? 40 : 90;

    if (!apagando && letraAtual === frase.length) {
        velocidade = 1500;
        apagando = true;
    } else if (apagando && letraAtual === 0) {
        apagando = false;
        fraseAtual = (fraseAtual + 1) % frases.length;
        velocidade = 400;
    }

    setTimeout(digitar, velocidade);
}

digitar();