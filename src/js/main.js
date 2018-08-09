// Add List title
const btnNewLisTitle = document.getElementById("newlist");
btnNewLisTitle.addEventListener("click", () => {
    document.getElementById("listbutton").classList.add("hide"); // hide list button
    document.getElementById("listform").classList.remove("hide"); //show list form
});

// Add list
const btnAddList = document.getElementById("addlist");
btnAddList.addEventListener("click", () => {
    let input = document.getElementById("inputlist").value;
    if (input == "") {
        alert("Por favor ingresa un nombre para la lista.")
    } else {
        document.getElementById("listform").classList.add("hide"); //hide list form
        document.getElementById("newlistdisplay").classList.remove("hide"); // show new list
        //Create new card input
        const div = document.createElement("div");
        div.innerHTML = `
        <p><h1>` + input + `</h1></p>`;
        titlelist.appendChild(div);
        //Create new list 

    }
});

// Show card input
const btnNewCard = document.getElementById("newcard");
btnNewCard.addEventListener("click", () => {
    document.getElementById("cardbutton").classList.add("hide"); //hide card button
    document.getElementById("cardform").classList.remove("hide"); //show list form
});

// Add card and keep the form
const btnAddCard = document.getElementById("addcard");
btnAddCard.addEventListener("click", () => {
    const cardtext = document.getElementById("inputcard").value;
    if (cardtext == "") {
        alert("Por favor ingresa un texto para la tarjeta.")
    } else {
        const p = document.createElement("p");
        p.innerHTML = cardtext;
        textcard.appendChild(p);
        document.getElementById("inputcard").value = "";
    }
});

const btnNewList = document.getElementById("addotherlist");
btnNewList.addEventListener("click", () => {
    console.log("boton nueva lista apretado");
})