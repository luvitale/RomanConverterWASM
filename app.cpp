#include <iostream>
#include <emscripten/emscripten.h>

using namespace std;

int main() {
  printf("WebAssembly module loaded\n");
}

string EMSCRIPTEN_KEEPALIVE int_to_roman(int number) {
  string roman = "Ingresar un número entero válido";
  return roman;
}