let index = 0;
const imagenes = ["images/Shivers.png","images/Photograph.png","images/ShapeOfYou.png","images/ThinkingOutLoud.png",
                  "images/Perfect.png", "images/CastleOnTheHill.png"
                ]
const names = ["Shivers", "Photograph", "Shape of You", "Thinking Out Loud", "Perfect", "Castle On The Hill"]
function nextSong(){
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

function previousSong(){
        // Obtener la imagen actual del carrusel
        let img = document.getElementById('imagenCarrusel');
        let nombre = document.getElementById('nombreCancion')
        // Cambiar al siguiente index
        index = (index - 1+imagenes.length) % imagenes.length;
        
        // Actualiza la imagen y nombre
        img.src = imagenes[index];
        nombre.innerText = names[index];
        nombre.style.opacity = "1"; 
        nombre.style.visibility = "visible"; 
}
