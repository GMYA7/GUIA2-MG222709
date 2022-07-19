function vendedor(){

    var producto = [];
    var precioProducto = [];
    var totalVentas = 0,i=0, salir, imprimir = "", imprimirVentas= "";

    do{
        producto[i] = prompt("Digite el nombre del Producto: ","");
        
        if(producto[i].length == 0){ //verifficamos que no venga solo el arrelo osea vacio
            alert("El espacio de nombre esta vacio");
            salir = true;

        }else{
            

            do{
                precioProducto[i] = prompt("Digite el precio del producto", "");

                if (precioProducto[i].length == 0 ) { //verificamos si viene la posicion vacia o no

                    alert("El espacio de producto esta vacio");
    
    
                }else if(isNaN(precioProducto[i])){//verificamos si viene un numero o no

                    alert("El espacio de producto no es un numero");

                }else{

                    salir = confirm("¿Desea seguir introduciendo productos?"); //CON CONFIRM LOGRAMOS PREGUNTAR SI SIGUIRA USANDO EL PROGRAMA SI COLOCA ACEPTAR ES TRUE PARA LA VARIABLE 
                                                                              // SI NO SI DA CLICK EN CANCERLAR ES TRUE
                    totalVentas+=1;
                }
                
            }while(precioProducto[i].length == 0 || isNaN(precioProducto[i]));

        }

        if(salir == true && producto[i].length != 0 ){//aqui hacemos el aumento en una posicion en el arreglo
            i++;
        }
        


    }while(salir == true);





    with(document){//AQUI VAMOS A REALIZAR LA IMPRSION DE CADA UNO DE LOS PRODUCTOS

        for(var i= 0; i<totalVentas;i++){
            imprimir+= "<tr><td>"+ producto[i] +"</td><td>$"+ precioProducto[i] +"</td></tr>"; //AQUI HACEMOS UN CICLO QUE VA A IMPRIMIR EL NUMERO DE PRODUCTOS QUE HAY EN LOS ARRELOGS
        }

    }
    var datos = document.getElementById('contenidoTabla'); //MANDAMOS A LLAMAR AL ELEMENTO DONDE COLOCAREMOS TODA LA INFORMACION
    datos.innerHTML = imprimir; //CON INNER.HTML LO COLOCAMMOS PARA PODER VISUALIZAR




    var ImprimirTotal = document.getElementById('totalVentas');
    imprimirVentas+="<h2> Total de ventas en el dia: "+ totalVentas+ "</h2>";
    ImprimirTotal.innerHTML =  imprimirVentas;


}

window.onload = vendedor;