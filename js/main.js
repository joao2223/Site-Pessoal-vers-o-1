//seção de habilidades
const imagens = document.querySelectorAll('.imagem_unica_habilidade');
const descricao = document.querySelector('.texto_habilidades')
const frases_linguagens = [
    '<p>Python</p> <br> <p>Python é uma linguagem de programação popular conhecida por sua clareza de código e ampla utilização em diversas áreas, desde ciência de dados e aprendizado de máquina até desenvolvimento web e automação de tarefas</p> <br>',
    '<p>JavaScript</p> <br> <p>JavaScript é uma linguagem de programação usada para criar interatividade em páginas web, possibilitando efeitos visuais, validação de formulários e muito mais.</p> <br>',
    '<p>CSS</p> <br> <p>CSS é uma linguagem de estilo utilizada para descrever a apresentação de um documento escrito em HTML ou XML, permitindo a separação da apresentação do conteúdo.</p> <br>',
    '<p>HTML</p> <br> <p>HTML é uma linguagem de marcação usada para criar páginas web, fornecendo a estrutura básica para um documento web. Ele é usado em conjunto com CSS e JavaScript para criar páginas interativas e estilizadas.</p> <br>',
]

let index = 0;

imagens.forEach((elemento, index) => {
    elemento.addEventListener('mouseover', (evento) => {
        descricao.innerHTML = `<p>${frases_linguagens[index]} </p>`
    })
    elemento.addEventListener('mouseout', (evento, elemento) => {
        descricao.innerHTML = `<p>Para ver as habilidades, passe<br> o mouse por cima do botão!</p>`
    })
});
