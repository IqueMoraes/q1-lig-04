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
    let keyName = event.target;

    console.log(keyName)
})
/*
 asignar id pra criar columnas
 */
/*
 listener de click
 */
const lineas = () =>{
    const fila = document.querySelectorAll(".container");
    for(let i = 0; i < fila.length; i++){
        fila[i] = [];
        fila[i].id = "filera"+(i+1);
    }
     
}
lineas();

const columnas = () =>{
    const linea1 = document.getElementById("filera1");
    const linea2 = document.getElementById("filera2");
    const linea3 = document.getElementById("filera3");
    const linea4 = document.getElementById("filera4");
    const linea5 = document.getElementById("filera5");
    const linea6 = document.getElementById("filera6");
    let materia1 = linea1.childNodes;
    for(let i = 0; i < materia1.length; i ++){
        materia1[i].id = "columna"+ (i+1);
    }
 let materia2 = linea2.childNodes;
    for(let i = 0; i < materia2.length; i ++){
        materia2[i].id = "columna"+ (i+1);
    }
 let materia3 = linea3.childNodes;
    for(let i = 0; i < materia3.length; i ++){
        materia3[i].id = "columna"+ (i+1);
    }
 let materia4 = linea4.childNodes;
    for(let i = 0; i < materia4.length; i ++){
        materia4[i].id = "columna"+ (i+1);
    }
 let materia5 = linea5.childNodes;
    for(let i = 0; i < materia5.length; i ++){
        materia5[i].id = "columna"+ (i+1);
    }
 let materia6 = linea6.childNodes;
    for(let i = 0; i < materia6.length; i ++){
        materia6[i].id = "columna"+ (i+1);
    }
}

columnas();
//Event Listener
const div = document.querySelector('.espaco');
let change = true;

/*div.addEventListener('click', () =>{

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
