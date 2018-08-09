// Add List
function newlist() {
    console.log("boton nueva lista apretado");
    document.getElementById("list-button").classList.add("hide"); // hide list button
    document.getElementById("list-form").classList.remove("hide"); //show list form
}

function addlist() {
    let input = document.getElementById("title").value;
    if (input == "") {
        alert("Por favor ingresa un nombre para la lista.")
    } else {
        document.getElementById("list-form").classList.add("hide"); //hide list form
        document.getElementById("newlistdisplay").classList.remove("hide"); // show new list
        const div = document.createElement("div");
        div.innerHTML = `
        <p><h1>` + input + `</h1></p>
            <div id="card-button">
                <ul class="nav nav-pills">
                    <li onclick="newcardinput()" class="btn buttons main"> + Añada una tarjeta</li>
                </ul>
            </div>
            <div id="card"></div>
        `;
        newlistdisplay.appendChild(div);
        //new list 
        const newlist = document.createElement("div");
        newlist.innerHTML = `
        <div class="list">
            <div id="list-button">
                <ul class="nav nav-pills">
                    <li onclick="newlist()" class="btn main"> + Añada otra lista</li>
                </ul>
            </div>
            <div id="list-form" class="list-form hide">
                <input id="title" class="form-control" type="text" placeholder="Introduzca el título de la lista...">
                <button id="newlist" class="btn btn-success>Añadir lista</button>
            </div>
            <div id="newlistdisplay" class="list-form hide"></div>
        </div>`
        otherlists.appendChild(newlist);
    }

    console.log("boton agregar lista apretado");
}

function newcardinput() {
    document.getElementById("card-button").classList.add("hide"); //hide card button
    const div = document.createElement("card");
    div.innerHTML = `
    <div id="cardinput">
    <textarea  id="cardtext" class="form-control" rows="3" placeholder="Introduzca el contenido de la tarjeta..."></textarea>
    <button id="newlist" class="btn btn-success" onclick="addcard()">Añadir</button>
    </div>`;
    card.appendChild(div);
}

function addcard() {
    const cardtext = document.getElementById("cardtext").value;
    if (cardtext == "") {
        alert("Por favor ingresa un texto para la tarjeta.")
    } else {
        document.getElementById("cardinput").classList.add("hide"); //hide card button
        const div = document.createElement("card");
        div.innerHTML = `
        <div class="cardtext">
        <p>` + cardtext + `</p>
        </div>
        <div id="cardinput">
        <textarea  id="cardtext" class="form-control" rows="3" placeholder="Introduzca el contenido de la tarjeta..."></textarea>
        <button id="newlist" class="btn btn-success">Añadir</button>
        </div>`;
        card.appendChild(div);
    }
}

function addnewlist() {

}