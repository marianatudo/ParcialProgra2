//Enviar información

function sendInfo() {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var date = document.getElementById("date").value;
    var drink = document.getElementById("drink").value;
    var glass = document.getElementById("glass").value;
    if (glass<8) {
        var mensaje = "Tomar más agua"
    } if (glass>=8) {
        var mensaje = "Meta alcanzada"
    }
    cell1.innerHTML = date;
    cell2.innerHTML = drink;
    cell3.innerHTML = glass;
    cell4.innerHTML = mensaje;
}


