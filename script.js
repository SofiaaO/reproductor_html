console.log(axios)

axios.get('https://leonardoapi.onrender.com/music')
.then(
    //Callback//
    (response) => {
        let canciones = response.data
        canciones.map( (cancion) => {




            console.log (cancion.duration)
 
    
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