const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function encriptar(stringEncriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
