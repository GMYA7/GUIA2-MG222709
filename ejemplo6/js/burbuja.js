function inicializar() {
    //iniciaiizacion de variables
    var numeros = new Array();
    var i,max,temp,contenido="",tdelement;
    //validacion para que el numero de elementos del arreglo sea numerico y mayor o igual que dos
    do{
        max= prompt("Cuantos numero va a ingresar (valor entero):");
        //verificar que se ingrese un dato numerico
        if(isNaN(max)){
            alert("El valor digitado no es numerico.");
            continue;
        }
        //verificar que el valor ingresado sea maoy o igual que dos
        if (max < 2 ) {
            alert("El arreglo debe ser de dimension 2 o superior");
        }
    }while(isNaN(max) || max < 2);

    //Lazo para solicitar el ingreso de los elementos del arreglo
    for(i=0; i<max; i++){
        numeros[i] = parseInt(prompt("Número " + (parseInt(i) + 1), ""));
    
    }
    //Obteniendo el elemento donde se cargará el contenido
    //generado dinámicamente desde JavaScript
    var datos = document.getElementById('datos');

    with(document){
        contenido +="<h1><Numeros ingresados/h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        for(i=0;i<max;i++){
            contenido += "\t\t\t<td class=\"off\">" + numeros[i] + "</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Lazo que ordena el arreglo mediante el método de la burbuja
        for(i=0;i<max-1;i++){
            for(j=i+1;j<max;j++){
                if(numeros[i]>numeros[j]){
                    temp = numeros[j];
                    numeros[j] = numeros[i];
                    numeros[i] = temp
                }
            }
        }
        contenido += "<h1>Numeros ordenados ascendentemente</h1>\n";
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo que han sido
        //ordenados con el método de la burbuja
        for(i=0;i<max;i++){
            contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
    }
    datos.innerHTML = contenido;
    //capturando los elementos con calsee off
    tdelement = document.getElementsByClassName('Off');
    alert(tdelement.length);
    for( var i=0; i<tdelement.length;i++){
        tdelement[i].onmouseover = function(){
            this.className = 'On';
        }

        tdelement[i].onmouseout = function(){
            this.className= 'Off';
        }
    }
}
window.onload = inicializar;