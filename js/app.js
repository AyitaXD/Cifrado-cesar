function principal(ask){
  do{
     var ask = prompt("¿Que desea hacer? 1.-Cifrar 2.-Descifrar?");

     if(ask != ""){

       if(ask == "1"){
         cipher();

       } else if (ask == "2"){
         decipher();
       } else {
        alert("ingrese una opción valida");
     }
   }
 }while (ask == "" || (ask != "1" && ask != "2"));
}

//se pide la palabra a cifrar
function cipher(sentence){
  do{
     var sentence = prompt("Ingrese palabra que desea cifrar");
     var answer = [];
     var cipherText = [];
     for(var i = 0; i < sentence.length; i++){
       answer.push((string.charCodeAt(i)-65+33)%26+65);
     }

}
principal();
