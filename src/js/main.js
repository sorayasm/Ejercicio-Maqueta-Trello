// Add List
function newlist() {
    console.log("boton nueva lista apretado");
    document.getElementById("list-button").classList.add("hide"); // hide list button
    document.getElementById("list-form").classList.remove("hide"); //show list form
}

function addlist() {
    console.log("boton agregar lista apretado");
    let input = document.getElementById("title").value;
    if (input == "") {
        alert("Por favor ingresa un nombre para la lista.")
    } else {
        document.getElementById("list-form").classList.add("hide"); //hide list form
        document.getElementById("newlist").style.visibility = "visible"; // show new list
        const p = document.createElement("p");
        p.innerHTML = `<p>` + input + `</p>`;
        newlist.appendChild(p);
    }
}