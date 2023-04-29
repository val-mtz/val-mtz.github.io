// Actividad en clase: JavaScript
console.log("Actividad en clase: JavaScript");

// 1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function ejercicio1(string) {
    let counter = {};

    for (let c of string)
    {counter[c] = (counter[c] || 0) + 1;}

    for (c of string)
    {
        if(counter[c] === 1) 
        {return c;}
    }
    return null;
}
console.log("Ejercicio 1");
console.log("Prueba con 'abacddbec' da como resultado: "+ ejercicio1('abacddbec'))

// 2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function ejercicio2(lista) {
    let n = lista.length;

    for (let i = 0; i < n - 1; i++)
    {
        for (let j = 0; j < n - i - 1; j++)
        {
            if (lista[j] > lista[j + 1])
            {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return lista;
}
console.log("Ejercicio 2");
console.log("Prueba con [38, 12, 13, 9, 49, 16, 6] da como resultado: "+ ejercicio2([38, 12, 13, 9, 49, 16, 6]))

// 3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function invierte(lista) { //Función que genera un nuevo arreglo
    let reves=[];
    for (let i = lista.length - 1; i >= 0; i--)
    { reves.push(lista[i]); }
    return reves;
}
function modifica(lista) { //Función que modifica el mismo arreglo
    for (let i = 0; i < lista.length; i++) {
      lista[i] = lista[i] * lista[i];
    }
    return lista;
}
console.log("Ejercicio 3");
console.log("Prueba parte 1 con [38, 12, 13, 9, 49, 16, 6] da como resultado: "+ invierte([38, 12, 13, 9, 49, 16, 6]))
console.log("Prueba parte 2 con [38, 12, 13, 9, 49, 16, 6] da como resultado: "+ modifica([38, 12, 13, 9, 49, 16, 6]))

// 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function ejercicio4(string) {
    string = string.split("");
    string[0] = string[0].toUpperCase();

    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ")
        { string[i + 1] = string[i + 1].toUpperCase();}
    }
    string = string.join("");
    return string;
}
console.log("Ejercicio 4");
console.log("Prueba con 'valeria martínez' da como resultado: "+ ejercicio4('valeria martínez'))

// 5. Escribe una función que calcule el máximo común divisor de dos números.
function ejercicio5(num1, num2) {
    let residuo = 0;
    while (num2 !== 0) {
        residuo = num1 % num2;
        num1 = num2;
        num2 = residuo;
    }
    return num1;
}
console.log("Ejercicio 5");
console.log("Prueba con 42, 51 da como resultado: "+ ejercicio5(42,51))

// 6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function ejercicio6(string) {
    const hacker = {
      a: "4",
      e: "3",
      i: "1",
      o: "0",
      s: "5"
    }; 
    let hstr = '';
    for (let i = 0; i < string.length; i++) {
        if (hacker[string[i].toLowerCase()])
        { hstr += hacker[string[i].toLowerCase()]; } 
        else 
        { hstr += string[i]; }
    }
    return hstr;
}
console.log("Ejercicio 6");
console.log("Prueba con 'Javascript es divertido' da como resultado: "+ ejercicio6('Javascript es divertido'))

// 7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
function ejercicio7(x){
    let lista = []; 
    for (i = 1; i <= x; i++){
        if(x % i == 0)
        { lista.push(i); }
    }
    return lista;
}
console.log("Ejercicio 7");
console.log("Prueba con 12 da como resultado: "+ ejercicio7(12))

// 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function ejercicio8(lista)
{
    let nueva=[];
    for(let i = 0; i < lista.length; i++)
    {
        if(nueva.indexOf(lista[i])== - 1)
        { nueva.push(lista[i]); }
    }
    return nueva;
}
console.log("Ejercicio 8");
console.log("Prueba con [1, 0, 1, 1, 0, 0] da como resultado: "+ ejercicio8([1, 0, 1, 1, 0, 0]))

// 9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function ejercicio9(lista)
{
    let lengths = [];
    for(let i = 0; i < lista.length; i++)
    { lengths.push(lista[i].length); }
    return(Math.min.apply(Math,lengths));
}
console.log("Ejercicio 8");
console.log("Prueba con [Manzana, Pera, Durazno] da como resultado: "+ ejercicio9(['Manzana', 'Pera', 'Durazno']))

// 10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
function ejercicio10(string) {
    let modstring = string.replace(/\s/g, "").toLowerCase();
    let reverso = modstring.toLowerCase().split("").reverse().join("");
    if (modstring === reverso)
    { return "Sí es palíndromo"; }
    else
    { return "No es palíndromo"; }
}

console.log("Ejercicio 10");
console.log("Prueba con 'anita lava la tina' da como resultado: "+ ejercicio10('anita lava la tina'))

// 11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function ejercicio11(lista){
    let alflista = lista.slice();
    alflista.sort();
    return alflista;
}
console.log("Ejercicio 11");
console.log("Prueba con [Manzana, Pera, Durazno] da como resultado: "+ ejercicio11(['Manzana', 'Pera', 'Durazno']))

// 12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function ejercicio12(lista)
{
    let moda = ejercicio13(lista);
    let lista_ord = ejercicio2(lista);
    if(lista_ord.length % 2 != 0)
    { return("moda: "+ moda + "\n" + "mediana: " + lista_ord[(lista_ord.length - 1) / 2]); }
    else
    {
        let mediana = 0; 
        let num1 = 0;
        let num2 = 0;
        num1 = lista_ord[(lista_ord.length / 2) - 1];
        num2 = lista_ord[lista_ord.length / 2];
        mediana = (num1 + num2) / 2;
        return ("Moda: " + moda + ". Mediana: " + mediana);
    }
}
console.log("Ejercicio 12");
console.log("Prueba con [3, 44, 4, 19, 50, 45, 3, 18]: " + ejercicio12([3, 44, 4, 19, 50, 45, 3, 18]))

// 13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function ejercicio13(lista)
{
    const counter = {}; 
    let repeticiones =[];
    for (let c of lista) {
        counter[c] = (counter[c] || 0) + 1;
        repeticiones.push(counter [c]);
    }
    repeticiones.shift();
    max = (Math.max.apply(Math,repeticiones));
    for (let c of lista) 
    {
      if (counter[c] === max)
        { return c; }
    }
}

console.log("Ejercicio 13");
console.log("Prueba con [Manzana, Pera, Durazno] da como resultado: "+ ejercicio13(['Manzana','Pera','Durazno','Pera']))

// 14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function ejercicio14(num)
{
    return (Number.isInteger(Math.log2(num)));
}
console.log("Ejercicio 14");
console.log("Prueba con 8 da como resultado: "+ ejercicio14(8))

// 15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function ejercicio15(lista) {
    //es nuestra función de BubbleSort pero volteada
    const longitud = lista.length;
    //ciclos for para recorrer mi arreglo y ordenarlo
    for (let i = 0; i < longitud - 1; i++) {
      for (let j = 0; j < longitud - i - 1; j++) {
        if (lista[j] < lista[j + 1]) {
            //si es menor el número de lado izq.
          const temp = lista[j]; // implementación de una variable temporal
          lista[j] = lista[j + 1];
          lista[j + 1] = temp;
          
        }
      }
    }
    return lista;
}
console.log("Ejercicio 15");
console.log("Prueba con [3, 44, 4, 19, 50, 45, 3, 18] da como resultado: "+ ejercicio15([3, 44, 4, 19, 50, 45, 3, 18]))