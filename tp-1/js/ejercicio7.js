const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));
const num3 = parseInt(prompt("Ingrese el tercero número:"));

const mayor = 0;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

document.write("El número mayor de los tres números ingresados es: " + mayor);