// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingrese un número:"));

// Inicializar un mensaje para almacenar los resultados
let mensaje = "El " + numero + " es divisible por: ";

// Verificar si el número es divisible por 2, 3, 5 o 7 y actualizar el mensaje en consecuencia
if (numero % 2 === 0) {
    mensaje += "2, ";
}
if (numero % 3 === 0) {
    mensaje += "3, ";
}
if (numero % 5 === 0) {
    mensaje += "5, ";
}
if (numero % 7 === 0) {
    mensaje += "7, ";
}

// Eliminar la coma y el espacio extra al final del mensaje
mensaje = mensaje.slice(0, -2);

// Si el mensaje no cambió, significa que el número no es divisible por ninguno de los cuatro
if (mensaje === "El " + numero + " es divisible por: ") {
    mensaje = "El " + numero + " no es divisible por 2, 3, 5 ni 7.";
}

// Imprimir el mensaje
document.write(mensaje);
