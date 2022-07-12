//Manipular conteudo usando textContent 
const element = document.querySelector('h1')

element.textContent += "Hey!"

console.log(element.textContent)

//Manipular conteudo usando innerContentTexto interno

const element = document.querySelector("h2")

element.innerContent = "Hey everybody!"

//Manipular conteudo usando innerHTML

const element =  document.querySelector('h1')

element.innerHTML += "Hey!" //+ uma tag de HTML //faz uma adição em html

