
// hacer las variables y llamar por id a los elementos
 
let deletbtn = document.getElementById("borrar")
let addBtn = document.getElementById("add");
let showBtn = document.getElementById("showi");
let resul = document.getElementById("resultado")
let mostrarResul = document.getElementById("mostrarResultado")



addBtn.addEventListener("click",  function(event) {
    event.preventDefault();

    let imgsave = document.getElementById("imgadd").value.trim();

    if (imgadd !== "") {
        let img = document.createElement("img")
        img.src = imgadd

        resul.innerHTML= "";

        resul.appendChild(img)
        
    }else {
        resul.innerHTML= "Ingrese una url valida";
    }
})


 
showBtn.addEventListener("click", function(event) {
    event.preventDefault();


    
   mostrarResul.innerHTML = resul.innerHTML;



})

 
