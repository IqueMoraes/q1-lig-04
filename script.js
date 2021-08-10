//Variáveis
const mainContainer = document.getElementById('container');
//Variáveis

//Layout
const layout = [
    "lllllll",
    "lllllll",
    "lllllll",
    "lllllll",
    "lllllll",
    "lllllll",
];
//Layout

//Funções 
function createDiv(container,className){
    const celula = document.createElement('div');
        celula.classList.add(className);
        container.appendChild(celula);
};


function createLayout(){
    for(let row in layout){
        const container = document.createElement('div');
            container.classList.add('container');
            mainContainer.appendChild(container);
        for(let column in layout[row]){
            let print = layout[row][column];
            if(print === 'l'){
                createDiv(container,'espaco');

               // container.id="column"
            }
        }
    }
}
createLayout();
//Funções 

let player1 = true;

const bloques = (cor, numero) => {
    const coluna = document.querySelectorAll("#columna" + `${numero}`)

    for(let i=5; i>=0; i--){
        if(coluna[i].childElementCount === 0){
            const blocos = document.createElement("div")
            blocos.classList.add(cor)
            coluna[i].appendChild(blocos)
            if(player1 === true){
                player1=false
            }else{
                player1=true
            }
            break
        }
    }

}
//////////////////////
const destino = () => {
    const destin = document.getElementById("container")
    // console.log(destin.children)
    //let final = [];
    //for(let i = 0; i < )
}
////////////////////////
mainContainer.addEventListener("click", (event) =>{
    
    let keyName = event.target.id;
    let numero = parseInt(keyName[keyName.length -1])
    let filaName = event.srcElement.parentNode.id;
  //  console.log(keyName)
  //  console.log(filaName)
    const fila = document.getElementById(filaName)
    console.log(fila.id)
    if(player1 === true){
        bloques("black", numero);
    }else {
    bloques("red", numero);
    }

    destino();
})
/*
 listener de click
 */
const lineas = () =>{
    const fila = document.getElementById("container")
    let contFila = fila.childNodes
    let bloques;
    for(let i = 0; i < contFila.length; i++){
        contFila[i].id = "filera"+(i+1)
        bloques = contFila[i].childNodes
        for(let j = 0; j < bloques.length; j++){
            bloques[j].id = "columna"+(j+1)
        }
    }
}
lineas();

