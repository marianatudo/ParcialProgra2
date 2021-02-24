//Funcion para mostrar contenido de pestañas de HTML
function hideDivById(divId) {
    hideAllDivW3Includes()
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    }
}

//Ocultar todo el contenido de pestañas de HTML
function hideAllDivW3Includes() {
    var elementArray = document.getElementsByName("pages")
    for (var element of elementArray) {
        element.style.display = "none"
    }
}

w3.includeHTML()

//Enviar Respuestas

function sendAnswers() {
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var Hobbys = document.getElementById("hob-select").value

    alert("Hello I am " + name + " having " + age + " years of age and my hobby is " + Hobbys)

}