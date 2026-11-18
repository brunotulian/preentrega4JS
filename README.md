Tienda de Remeras - Simulador Interactivo

Proyecto desarrollado en JavaScript como parte del Checkpoint de Arrays. Consiste en un simulador de compras y gestion de catalogo para una tienda de remeras (bandas, futbol, lisas, oversize y estampadas), integrando manipulacion dinamica de colecciones, validaciones y calculo de descuentos.

Funcionalidades Principales

Gestion de Catalogo (Arrays y Metodos):

Inicializacion: Coleccion base (catalogoRemeras) con 5 productos iniciales.

Manipulacion Dinamica: Incorporacion de productos al final (push) y al principio (unshift) del listado, asi como eliminacion del ultimo elemento (pop) notificando al usuario.

Busqueda y Validacion: Consulta interactiva de stock mediante prompt, validacion de existencia con includes y obtencion de ubicacion exacta en el inventario con indexOf.

Actualizacion: Reemplazo de productos por indice especifico utilizando splice.

Reporte Iterativo: Recorrido de la coleccion completa mediante una funcion dedicada con bucle for...of para mostrar el inventario actualizado por consola.

Simulador de Compras:

Interaccion continua mediante ciclos (while) y cuadros de dialogo (prompt, alert, confirm).

Validacion de datos numericos positivos mediante funciones flecha.

Calculo automatico de subtotales y aplicacion de descuentos escalonados (10% en compras superiores a $5,000 y 20% en compras superiores a $10,000).

Resumen final del monto acumulado por cliente.

Estructura del Proyecto

index.html: Estructura base de la pagina web con la visualizacion del catalogo disponible y vinculacion al script.

main.js: Logica completa del negocio, manipulacion de arrays, funciones de validacion y flujo del simulador.
