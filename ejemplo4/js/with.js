//Iniciarlizar variables
var area, peri, coorx, coory;
//solicitar el valor para el radio del circulo
var radio = parseInt(prompt('Ingrese un numero',''));
document.write("<header>");
document.write("<h1>Area del circulo</h1>");
document.write("</header>");
document.write("<section>");
document.write("<article>");
/* document.write("<div id=\"ballWrapper\">");
document.write("<div id=\"ball\"></div>");
document.write("</div>"); */

document.write("<div id=\"circle\">");
document.write("</div>");
document.write("<p>");
//Recorrer propiedades del objeto Math usadno la instruccion with

with(Math){
    //AREA DE UN CIRUCLO DE RADIO "RADIO"
    area = PI*radio*radio;
    //Valor del lado horizontal definido por el radio
    coorx = abs(radio*cos(PI/4));
    //Valor del lado vertical definido por el radio
    coory = abs(radio*sin(PI/4));
    pericir = 2*PI*radio;
    perirec = 2*coorx + 2*coory;
    //Invocar la propiedad write del objeto documento con with
    with(document){
        write("El area es: " + area);
        write("<br>El lado x del rectangulo generado es: " + coorx);
        write("<br>El lado y del rectangulo generado es: " + coory);
        write("<br>El perímetro del circulo es: " + pericir);
        write("<br>El perímetro del rectángulo es: " + perirec);
    
    }
}
document.write("</p>");
document.write("</article>");
document.write("</section>");