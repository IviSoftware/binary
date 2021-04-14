/*Alumno : Alejandro Ivan Mendieta Acevedo*/

let boton = document.getElementById('boton') /* Obtiene el boton */
let result = document.getElementById('resultado')
let contadorValidar=0;
let valido;
let opciones = document.options.option;


function validarOpcion(){
    let radiovalue=opciones.value;
    return radiovalue;
}

function validar(vector)
{
    valido=0;
    for(elemento of vector)
    {
        if(elemento !='0' && elemento != '1')
        {
            valido++;
        }
    }

    if(valido>0){
        result.innerHTML = `
        <p class="resultadoDecimal">Solo escriba numeros binarios<p>
    `;
    }
}

function mostrarResultado(resultado){
    result.innerHTML = `
    <p class="resultadoDecimal">El resultado en decimal es : ${resultado}<p>
`;
}

function convertirBinario(binario)    /* Se crea una funcion para convertir esperando el numero como parametro*/
{
    let acumulador=0
    let binarioVector = binario.split('').reverse();   /* convierte el numero que se le pase a vector y lo invierte */
    

    binarioVector.forEach( (elemento,indice) =>   /* Recorre el vector */
        { 
            let multiplicacion = elemento * Math.pow(2,indice)  /* Multiplica lo que contenga el indice por la potencia */
            acumulador = acumulador + multiplicacion; /* Los va sumando */
        } 
    );

    mostrarResultado(acumulador)
   
}

function convertirBinarioenHexadecimal(binario){
    /* Binario a decimal*/
    let binarioEnDecimal = parseInt(binario, 2); // La base es 2
    let decimalEnHexadecimal = binarioEnDecimal.toString(16); // A la base 16
    
    mostrarResultado(decimalEnHexadecimal)

}

function convertirHexaEnBinario(hexa){
    let hexaEnDecimal = parseInt(hexa,16)
    let decimalEnBinario = hexaEnDecimal.toString(2); // A la base 2
    mostrarResultado(decimalEnBinario);
}

boton.addEventListener('click', () =>{   /* Escucha el evento al hacer click */
   
    let binarioUsuario = document.getElementById('txtBinario').value   /* Obtenemos el valor del input */
    
    switch(validarOpcion()){
        case 'binario-a-decimal':

            validar(binarioUsuario)
            if(valido==0)
            {
                convertirBinario(binarioUsuario) /* Invoca la funcion y le envia el numero */
                
            }
            break;

        case 'binario-a-hexa' :
            convertirBinarioenHexadecimal(binarioUsuario)
            break;

        case 'hexa-a-binario' :
            convertirHexaEnBinario(binarioUsuario);
            break;
    }


})

