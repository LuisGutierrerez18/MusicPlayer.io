let index = 0;
const imagenes = ["images/Shivers.png","images/Photograph.png","images/ShapeofYou.png"]
const names = ["Shivers", "Photograph", "Shape of You"]
function cambiarImagen(){
        // Obtener la imagen actual del carrusel
        let img = document.getElementById('imagenCarrusel');
        let nombre = document.getElementById('nombreCancion')
        // Cambiar al siguiente index
        index = (index + 1) % imagenes.length;
        
        // Actualiza la imagen y nombre
        img.src = imagenes[index];
        nombre.innerText = names[index];
        nombre.style.opacity = "1"; 
        nombre.style.visibility = "visible"; 

}
