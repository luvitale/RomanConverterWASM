# Convertir enteros a n�meros romanos

## Requisitos

 - Navegador con soporte para WebAssembly.
 - Compilador de C a WebAssembly.
 - Compilador para C.
 - Servidor web local (por ejemplo, python -m http.server 9000)

## Compilar C en WebAssembly

Generar el c�digo de pegamento de Javascript con el compilador de Emscripten.
```console
if not exist bin mkdir bin && emcc app.c -s WASM=1 -O3 -o bin/app.js
```

- emcc - El compilador Emscripten.
- app.c - El archivo de entrada que contiene el c�digo C.
- -s WASM=1 - Especifica la relaci�n con WebAssembly.
- -03 - El nivel de optimizaci�n de c�digo deseado.
- -o index.js - Dice a emcc que genere un archivo JS con todo el c�digo de pegamento necesario para el m�dulo wasm.

Despu�s de ejecutar el comando, se a�adir�n dos archivos en la carpeta de binarios del directorio de trabajo: app.wasm e app.js. Uno contiene el m�dulo de WebAssembly, y el otro, el c�digo de pegamento, respectivamente.

## Cargar c�digo en el navegador

En el archivo index.html est� especificado el v�nculo con el script de Javascript creado por el compilador.
```html
<script src="bin/app.js"></script>
```
Con esto se podr�n ejecutar las funciones codificadas en C, utilizando su nombre respectivo comenzando con un gui�n bajo.

Por ejemplo, teniendo la funci�n riskNumber en C:
```c
char EMSCRIPTEN_KEEPALIVE get_roman_character(int pos) {
	if (pos >= strlen(roman_number)) return '\0';
	return roman_number[pos];
}
```
En Javascript la llamar�a as�:
```javascript
var i = 3;
romanValue = String.fromCharCode(_get_roman_character(i));
```
Por problemas de cross-origin, para ejecutar el proyecto ser� necesario un servidor web local. Con Python es posible iniciar uno.

 1. Para consultar la versi�n instalada:
	```console
	python -V
	```
 2. Posteriormente ejecutar el siguiente comando para crear un servidor local:
	```console
	# Versi�n 2.x
	python -m SimpleHTTPServer 9000

	# Versi�n 3.x
	python -m http.server 9000
	```

## Iniciar la aplicaci�n en el navegador

Ahora ingresando en ```localhost:9000``` se podr� visualizar la interfaz para ingresar un n�mero del 1 al 3999 y convertirlo a n�meros romanos.