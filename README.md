# 🧪 Dom Lab — Laboratório de Manipulação do DOM com JavaScript

Projeto de estudos focado na manipulação do DOM (Document Object Model) usando JavaScript puro. Cada pasta representa um conceito isolado, com um arquivo HTML e um script JS demonstrando na prática como interagir com elementos da página.

---

## 📁 Estrutura do Projeto

```
Dom_lab/
├── Txt/               → Alterando texto com textContent
├── Inner/             → Alterando texto com innerText
├── InnerHTML/         → Inserindo HTML com innerHTML
├── Value/             → Lendo e definindo valores de inputs
├── Estilos/           → Alterando estilos via JavaScript
├── atributos/         → setAttribute, getAttribute e removeAttribute
└── Praticando/        → Exercício prático: modal com eventos de teclado
```

---

## 🔍 O que cada módulo faz

### `Txt/` — textContent
Seleciona um `<h1>` e adiciona texto ao conteúdo existente usando `.textContent`.

```js
const element = document.querySelector('h1')
element.textContent += " Hey!"
console.log(element.textContent)
```

> 💡 `textContent` trata tudo como texto puro — não interpreta HTML.

---

### `Inner/` — innerText
Tenta manipular conteúdo de um elemento com `.innerContent` (propriedade que **não existe** — o correto seria `.innerText`).

```js
//  Bug: a propriedade certa é innerText, não innerContent
element.innerText = "Hey everybody!"
```

>  `innerText` é parecido com `textContent`, mas respeita a renderização visual (ex: ignora elementos ocultos por CSS).

---

### `InnerHTML/` — innerHTML
Adiciona conteúdo HTML dinamicamente a um elemento.

```js
element.innerHTML += " Hey! " + "everybody"
```

>  `innerHTML` interpreta tags HTML, então você pode inserir `<strong>`, `<span>`, etc. diretamente como string.

---

### `Value/` — value em inputs
Define o valor de um campo `<input>` diretamente via JS.

```js
const element = document.querySelector('input')
element.value = "Qualquer coisa"
```

>  A propriedade `.value` é exclusiva de elementos de formulário como `<input>`, `<textarea>` e `<select>`.

---

### `Estilos/` — Alterando estilos
Seleciona o `<body>` para (futuramente) alterar estilos via `.style`.

```js
const element = document.querySelector('body')
// ex: element.style.backgroundColor = "purple"
```

>  Use `element.style.nomeDaPropriedade` para alterar CSS diretamente pelo JS. Propriedades com hífen viram camelCase: `background-color` → `backgroundColor`.

---

### `atributos/` — Atributos
Demonstra as três operações básicas com atributos HTML.

```js
header.setAttribute('id', 'header')        // define um atributo
headerID.getAttribute('class')             // lê um atributo
header.removeAttribute('id')               // remove um atributo
```

>  `setAttribute` / `getAttribute` / `removeAttribute` funcionam com qualquer atributo HTML: `id`, `class`, `src`, `href`, `data-*`, etc.

---

### `Praticando/` — Modal com Eventos 
O exemplo mais completo do projeto! Um modal que abre ao clicar num botão e fecha com a tecla `ESC`.

```js
// Abre o modal ao clicar no botão
buttonOpenModal.onclick = function() {
  modalWrapper.classList.remove('invisible')
}

// Fecha o modal ao pressionar ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    modalWrapper.classList.add('invisible')
  }
})
```

Usa **Tailwind CSS** via CDN para estilização rápida.

---

## 🚀 Como rodar

Nenhuma instalação necessária! Basta abrir qualquer arquivo `.html` diretamente no navegador ou usar a extensão **Live Server** no VS Code para ver as alterações em tempo real.

```
1. Clone o repositório:
   git clone https://github.com/vndp/Dom_lab.git

2. Abra a pasta no VS Code

3. Clique com o botão direito em qualquer .html → "Open with Live Server"
```

---

## Tecnologias

- HTML5
- JavaScript (Vanilla)
- Tailwind CSS (via CDN, usado em `Praticando/`)

---

## Conceitos abordados

| Conceito | Propriedade/Método |
|---|---|
| Selecionar elementos | `querySelector`, `getElementById` |
| Alterar texto | `textContent`, `innerText` |
| Inserir HTML | `innerHTML` |
| Ler/definir valor de input | `.value` |
| Alterar estilos | `.style.propriedade` |
| Gerenciar atributos | `setAttribute`, `getAttribute`, `removeAttribute` |
| Gerenciar classes CSS | `classList.add`, `classList.remove` |
| Reagir a eventos | `onclick`, `addEventListener` |

---

## Autora

Feito por [vndp](https://github.com/vndp) como laboratório estudos de DOM e JavaScript.