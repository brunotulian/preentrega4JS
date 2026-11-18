// === TIENDA DE REMERAS ===

const nombreUsuario = prompt("¡Hola! ¿Cual es tu nombre?");

alert("¡Bienvenido/a a nuestra tienda de remeras, " + nombreUsuario + "!\n\n¡Aprovecha nuestras promos:\n- Comprando mas de $5,000 obtenes un 10% de descuento.\n- Comprando mas de $10,000 obtenes un 20% de descuento.");

// 1.(ARRAYS)

let catalogoRemeras = ["Remera Lisas Basica", "Remera Banda Rock", "Remera Futbol Seleccion", "Remera Oversize Negra", "Remera Estampada Vintage"];

console.log("=== CATALOGO INICIAL ===");
console.log(catalogoRemeras);


// 2. DINAMICA

// elemento al final con push
catalogoRemeras.push("Remera Edicion Especial");

// elemento al principio con unshift
catalogoRemeras.unshift("Remera Promocion Lanzamiento");

// Eliminamos el ultimo elemento y lo guardamos en una variable para mostrarlo
let elementoEliminado = catalogoRemeras.pop();
alert("Se ha eliminado el elemento: " + elementoEliminado);

// 3. BUSQUEDA Y VALIDACION

let listadoTexto = "- " + catalogoRemeras.join("\n- ");

let remeraBusqueda = prompt("¿Que remera te gustaria buscar? Elige una de estas:\n\n" + listadoTexto);

// Verificamos si existe con includes 
if (remeraBusqueda && catalogoRemeras.includes(remeraBusqueda)) {
    let indiceEncontrado = catalogoRemeras.indexOf(remeraBusqueda);
    alert("¡Si tenemos stock! La remera '" + remeraBusqueda + "' se encuentra en la posicion (indice) " + indiceEncontrado + ".");
} else {
    alert("Lo sentimos, el producto ingresado no coincide con nuestro catalogo actual.");
}
// 4. ACTUALIZACION POR INDICE (SPLICE)

let indiceAModificar = 1;
let nuevoModelo = "Remera Estilo Urbano Deluxe";
let elementoReemplazado = catalogoRemeras.splice(indiceAModificar, 1, nuevoModelo);
console.log("Se actualizo el catalogo. Modelo anterior: " + elementoReemplazado[0] + " | Nuevo modelo: " + nuevoModelo);


// 5. REPORTE ITERATIVO (FUNCION + FOR...OF)

function mostrarCatalogo(arrayRemeras) {
    console.log("=== CATALOGO ACTUALIZADO DE REMERAS ===");
    for (const remera of arrayRemeras) {
        console.log("Producto: " + remera);
    }
}

// Invocamos la funcion del reporte iterativo
mostrarCatalogo(catalogoRemeras);

const UMBRAL_DESCUENTO_ALTO = 10000;
const UMBRAL_DESCUENTO_MEDIO = 5000;

const validarNumeroPositivo = (valor) => !isNaN(valor) && valor > 0;

function solicitarDato(mensaje) {
    return prompt(mensaje);
}

function calcularSubtotalConDescuento(precio, cantidad, limiteAlto, limiteMedio) {
    let subtotal = precio * cantidad;

    switch (true) {
        case subtotal > limiteAlto:
            subtotal = subtotal * 0.80; // 20% de descuento
            alert("¡Felicitaciones! Tu compra supera los $" + limiteAlto + " y tiene un 20% de descuento.");
            break;
        case subtotal > limiteMedio:
            subtotal = subtotal * 0.90; // 10% de descuento
            alert("¡Descuento aplicado! Tu compra supera los $" + limiteMedio + " y tiene un 10% de descuento.");
            break;
        default:
            alert("El subtotal para este lote es: $" + subtotal.toFixed(2));
            break;
    }

    return subtotal;
}

let costoTotal = 0;

while (true) {
    const cantidadIngresada = solicitarDato("¿Cuantas remeras vas a llevar en este lote?");
    const precioIngresado = solicitarDato("¿Cual es el precio unitario de las remeras?");

    const cantidadNumero = parseInt(cantidadIngresada);
    const precioNumero = parseFloat(precioIngresado);

    if (!validarNumeroPositivo(cantidadNumero) || !validarNumeroPositivo(precioNumero)) {
        alert("Error: Ingresaste valores invalidos. Este lote no se sumara al carrito.");
        continue;
    }

    let subtotalFinal = calcularSubtotalConDescuento(precioNumero, cantidadNumero, UMBRAL_DESCUENTO_ALTO, UMBRAL_DESCUENTO_MEDIO);

    costoTotal += subtotalFinal;
    console.log("Lote agregado - Cantidad: " + cantidadNumero + " | Subtotal con descuento: $" + subtotalFinal.toFixed(2));

    let continuarComprando = confirm("¿Queres agregar otro lote de remeras?");

    if (!continuarComprando) {
        break;
    }
}

console.log("=== REGISTRO FIN DE COMPRA ===");
console.log("Cliente: " + nombreUsuario);
console.log("Monto total acumulado: $" + costoTotal.toFixed(2));

if (costoTotal > 0) {
    alert("¡Gracias por tu compra, " + nombreUsuario + "! El total final a pagar es: $" + costoTotal.toFixed(2));
} else {
    alert("No se registraron compras. ¡Esperamos verte pronto!");
}