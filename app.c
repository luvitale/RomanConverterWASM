#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <emscripten/emscripten.h>
#define MAXCHAR 12
#define VALUESTOROMAN 13
#define MIN 1
#define MAX 3999

char roman_number[MAXCHAR];

void inicialize_roman_number() {
	int i;
	for (i = 0; i < MAXCHAR; i++) {
		roman_number[i] = '\0';
	}		
}

int main(int argc, char ** argv) {
    printf("WebAssembly module loaded\n");
	inicialize_roman_number();
}

int EMSCRIPTEN_KEEPALIVE int_to_roman(int number) {
	int len = 0;
	
	if(number < MIN || number > MAX) return len;
	
	inicialize_roman_number();
	char str_roman[VALUESTOROMAN][3] = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
	int roman_values[VALUESTOROMAN] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};

	for(int i = 0; i < VALUESTOROMAN; ++i) {
		while(number >= roman_values[i]) {
			strcat(roman_number, str_roman[i]);
			len += strlen(str_roman[i]);
			number -= roman_values[i];
		}
	}
	
	return len;
}

char EMSCRIPTEN_KEEPALIVE get_roman_character(int pos) {
	if (pos >= strlen(roman_number)) return '\0';
	return roman_number[pos];
}
