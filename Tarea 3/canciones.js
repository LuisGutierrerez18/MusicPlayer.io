let index = 0;
const imagenes = ["images/Shivers.png","images/Photograph.png","images/ShapeofYou.png"]
const nombres = ["Shivers","Photograph","Shape of You"]
function cambiarImagen(){
        // Obtener la imagen actual del carrusel
        let img = document.getElementById('imagenCarrusel');
        
        // Cambiar al siguiente index
        index = (index + 1) % imagenes.length;
        
        // Cambiar la fuente de la imagen
        img.src = imagenes[index];
}
