function cambiarImagen(){
    let img = document.getElementById('imagen')
    if(img.src.includes("images/Shivers.jpeg")) {
        img.src = "images/Photograph.jpeg";  // Cambiar a la segunda imagen
    } else {
        img.src = "images/Shivers.jpeg";  // Volver a la primera imagen
    }
}