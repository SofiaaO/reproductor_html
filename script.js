let contenedor = document.querySelector('#track-list')



axios.get('https://leonardoapi.onrender.com/music')
.then(
    //Callback//
    (response) => {
        let canciones = response.data
        canciones.map( (cancion) => {


            let component = document.createElement('ul')
            component.classList.add('cancion')
            component.innerHTML = `
                <li><img src="https://www.lahiguera.net/musicalia/artistas/sza/disco/12611/sza_sos-portada.jpg" width="120" height="120" alt="Representacion visual de la portada del album de SZA"></li>
                <li class="text">Shirt</li>
                <li >SZA</li>
            `

            contenedor.appendChild(component)

        
    
        } )










     }

)













/*

let MifuncionFlecha= (num1, num2) => {
    
    return num1 / num2
}

console.log(MifuncionFlecha(10,2))

let tipoNumero= 7.438043
let tipoCadenaDeTexto= 'Hola Mundo'
let tipoBooleano= false
let tipoUndefinido= undefined
let tipoNulo= null

let tipoObjeto= {
    name: "Sofia",
    password: "9292",
    adress:{
        country: "Venezuela",
        city: "Valencia"
    }
}

let tipoLista=[  
    tipoObjeto,
    tipoObjeto,
    tipoObjeto,
    tipoObjeto,
]

if (2>6) {
    console.log("Se cumplió la condicion")
} 
else {
    console.log("No se cumplió la condición")
}

/* Operador Ternario resume el IF 
(2>6)
? console.log("Se cumplió la condicion")
: console.log("No se cumplió la condición") */


 
/**
 * OPERADORES
 * 
 * =         asignación
 * 
 * 
 * Operadores Lógicos
 * 
 * ==        igual que
 * !=        distinto de
 * >=        mayor o igual que
 * <=        menor o igual que
 * >         mayor que 
 * <         menor que
 * 
 * Operadores Matemáticos
 * 
 * +         sumar
 * -         restar
 * /         dividir
 * *         multiplicar
 * %         ?
 * 
 * 
 * Operadores
 * 
 * &&         and    y
 * ||         or     o
 * 
 */