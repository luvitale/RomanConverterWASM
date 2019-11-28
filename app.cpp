#include <iostream>
#include <emscripten/emscripten.h>

int main() {
  printf("WebAssembly module loaded\n");
}

std::string EMSCRIPTEN_KEEPALIVE int_to_roman(int number) {
  std::string roman = "Ingresar un número entero válido";
  return roman;
}