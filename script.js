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

const vert = () =>{
    const vertical = document.getElementById()
    console.log()
}
const bloques = () => {
    const blocos = document.createElement("div")
    blocos.classList.add("black")
    let keyName = event.srcElement.id;
    const destino = document.getElementById(keyName)
    destino.appendChild(blocos);
}
//////////////////////
const destino = () => {
    const destin = document.getElementById("container")
    console.log(destin.children)
    //let final = [];
    //for(let i = 0; i < )
}
////////////////////////
const click = document.addEventListener("click", (event) =>{
    let keyName = event.srcElement.id;
    let filaName = event.srcElement.parentNode.id;
  //  console.log(keyName)
  //  console.log(filaName)
    const fila = document.getElementById(filaName)
    console.log(fila.id)
    bloques( );
    destino();
    vert();
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
//Event Listener
/*const div = document.querySelector('.espaco');
let change = true;

div.addEventListener('click', () =>{

    if(change === true){
      const red = document.createElement('div');
        red.classList.add = ('red');
        div.appendChild(red);

        change = false;
    }

    if(change === false){
        const black = document.createElement('div');
        red.classList.add = ('black');
        div.appendChild(black);

        change = true;
    }
});
*/
//Event Listener
