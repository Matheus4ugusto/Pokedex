// async function operacaoDemorada(){
//     console.log("iniciando...");
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     console.log("Operação concluída!");
//     return "Valor de retorno!";
// };
// async function main() {
//     console.log("Iniciando função...");
//     let resultado = await operacaoDemorada();
//     console.log("Resultado:", resultado);
// }

// main()

async function renderCards(){
    let data = await fetch("https://rickandmortyapi.com/api/character")
    .then((resposta) => resposta.json())
    .then((resposta) => resposta.results)
    .catch(err => console.log(err))
    let ul = document.getElementsByTagName('ul');

    data.forEach(person => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let spanName = document.createElement("Span");
        
        let div = document.createElement("div");
        let spanIsAlive = document.createElement("span")
        let small = document.createElement("small")

        img.src = person.image;
        img.alt = person.name;
        spanName.innerText = person.name;
        if(person.status === "Alive"){
            div.classList.add("is-alive");
            small.innerText = "Vivo";
        }else{
            div.classList.add("is-dead");
            small.innerText = "Morto";
        }

        div.append(spanIsAlive, small);
        li.append(img, spanName, div);

        ul[0].appendChild(li);        
    });
}

renderCards()