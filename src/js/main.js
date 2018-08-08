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
        document.getElementById("newlistdisplay").classList.remove("hide"); // show new list
        const input = document.getElementById("title").value;
        const div = document.createElement("div");
        div.innerHTML = `
        <div>
        <p><h1>` + input + `</h1></p>
            <div id="card-button">
                <ul class="nav nav-pills">
                    <li onclick="newcard()" class="btn buttons main"> + Añada una tarjeta</li>
                </ul>
            </div>
        </div>
        `;
        newlistdisplay.appendChild(div);
    }
}