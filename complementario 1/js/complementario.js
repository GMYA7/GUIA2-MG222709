function proceso(){
    //Inicializar variables
    var prueba;
    var cifras = [];
    var cantCifras;
    var cantImpar = 0;
    var cantPar = 0;
    var sumaPares = 0, sumaImpares = 0,sumaTodas = 0 , cifraMayor=0,cifraMenor=0, numEnt, imprimir="";

    //validacion para ver si el elemento es numerico
    do{
        numEnt = prompt("Digite el numero entero","");

        if(isNaN(numEnt)){
            alert("El valor que digitaste no es numerico");
        }

    }while(isNaN(numEnt));

    //CONTAMOS CUANTAS CIFRAS TIENE EL NUMERO

    cantCifras = numEnt.length;



    //desglozando el entero
    for(var i=0; i<cantCifras;i++){
        
        if(i == 0){
            var j = 1;
        }

        cifras[i] = numEnt.slice(i,j);          // LOS PARAMETRO SON DE SLICE() SON  "SLICE(STAR,END)"
        j++;                                   //POR EJEMPLO SI SE COLOCA EL NUMERO 12 ENTONCES PARA SELECCIONAR CADA UNO DE LAS CIFRAS SERIA SEGUN LA POSICION EN UN ARREGLO
                                              // OSEA PARA SACAR 1 TENDRIAMOS QUE INICIAR EN LA POSICION 0 Y PARA TERMINAR LA 1 QUE ES DONDE FINALIZA Y AGARRARA LA ANTERIOR QUE ES LA DELA POSICION 0

    }




    //evaluamos cuantas cifras imparares y pares se encuentran y tambien sumamos la can entre ellos 

    for(var i=0; i<cantCifras; i++){
        //si es par entrara y se evalurar como que hay un par
       if(cifras[i]%2 == 0){

           if(cifras[i] != 0){
                cantPar++;
           }
            

            //sumamanos los pares
            sumaPares = sumaPares + parseInt(cifras[i]);

       }
       //si es impar entrara y se evalurar como que hay un impar
       if(cifras[i]%2 == 1){
          cantImpar++;
          //sumamanos los impares
          sumaImpares = sumaImpares + parseInt(cifras[i]);
       }

       //SUMANDO TODOS LAS CIFRAS
       sumaTodas+=parseInt(cifras[i]);


    }


    //EVALUAMOS CUAL ES EL NUMERO MAOYR Y MENOR DE TODAS LAS CIFRAS


    for(var i=0; i<cantCifras; i++){

        if(cifras[i] > cifraMayor){

            cifraMayor = cifras[i];

        }


        if (cifraMenor == 0) { //SE HACE ESTA CONDICION PARA INICIALIZAR LA VARIBLE PARA QUE DESPUES SE EVALUE
            
            cifraMenor = cifras[i];

        }else if (cifras[i] < cifraMenor){

            cifraMenor = cifras[i];
        }


    }

    with(document){
        imprimir+="<h1 class=\"n1\">Numero: "+ numEnt +"</h1><br>";
        imprimir+="<h1 class=\"n2\">Cantidad de Cifras: "+ cantCifras +"</h1><br>";
        imprimir+="<h1 class=\"n1\">Cantidad de Cifras Impares: "+ cantImpar +"</h1><br>";
        imprimir+="<h1 class=\"n2\">Cantidad de Cifras Pares: "+ cantPar +"</h1><br>";
        imprimir+="<h1 class=\"n1\">Suma de Cifras Impares: "+ sumaImpares +"</h1><br>";
        imprimir+="<h1 class=\"n2\">Suma de Cifras Pares: "+ sumaPares +"</h1><br>";
        imprimir+="<h1 class=\"n1\">Suma de Todas las cifras: "+ sumaTodas +"</h1><br>";
        imprimir+="<h1 class=\"n2\">La cifra menor es: "+ cifraMenor +"</h1><br>";
        imprimir+="<h1 class=\"n1\">La cifra mayor es: "+ cifraMayor +"</h1><br>";
    }
    
    var datos = document.getElementById('datos');
    datos.innerHTML = imprimir;
    
}

window.onload = proceso;