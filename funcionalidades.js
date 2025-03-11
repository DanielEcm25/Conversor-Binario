function ejecutar(texto){
    //para leer el caracter de la entrada del usuario
    let entrada = "";
    //para guardar el código ascii de ese caracter
    let codigo = 0;
    //Para dar la respuesta
    let binario = "";
    //DOM 
    if(texto=="Caracter"){
        //Accediendo al primer caracter de la entrada del user
        entrada = document.getElementById("caracter").value[0];
        //Pasando el caracter a numero decimal
        codigo = entrada.charCodeAt(0);
        //pasando ese decimal a binario
        for(let pos = 7; pos>=0; pos--){
            if (codigo>=2**pos){
            binario+=1;
            codigo-=2**pos;
            }else{
            binario+=0;
            }
        }
        //mostrando el binario en la caja de texto
        document.getElementById("respuestaCar").innerHTML = binario;


    }else{
        entrada = document.getElementById("binario").value;
    for(let a = 0; a < 8; a++){
        if (entrada[a] == 1){
            codigo+=2**(7-a);
        }
    }
        ascii = String.fromCharCode(codigo);
        document.getElementById("respuestaBinario").innerHTML = ascii;
        }
}

function borrar(texto){
    if(texto=="Caracter"){
        document.getElementById("respuestaCar").innerHTML = "";
        document.getElementById("caracter").value = "";
    }else{
        document.getElementById("respuestaBinario").innerHTML = "";
        document.getElementById("binario").value="";
    } 
}