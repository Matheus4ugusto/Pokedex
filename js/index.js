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

async function getCharacter(){

    try {
        let listaPersonagens = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151",{
            body: JSON.stringify({
                user: "kskakksa",
                senha: "jsjsjsjs"
            })
        })
        .then((resposta) => resposta.json())
        .then((resposta) => console.log(resposta))
    } catch (error) {
        console.log(error);   
    }

}

getCharacter();