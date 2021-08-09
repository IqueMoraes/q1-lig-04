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

const click = document.addEventListener("click", (event) =>{
    let keyName = event.srcElement.id;
    console.log(keyName)
})
/*
 asignar id pra criar columnas
 */
/*
 listener de click
 */
const lineas = () =>{
    const fila = document.getElementById("container")
    let contFila = fila.childNodes
    let bloques;
    for(let i = 0; i < contFila.length; i++){
        bloques = contFila[i].childNodes
        for(let j = 0; j < bloques.length; j++){
            bloques[j].id = "columna"+(j+1)
        }
    }
}
lineas();
//Event Listener
const div = document.querySelector('.espaco');
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

//Event Listener
