// General container
const container = document.getElementById("container");

// Create List
const divList = document.createElement("div");
divList.className = "list";
container.appendChild(divList);

//Create Button New Title list
const listbutton = document.createElement("div");
listbutton.id = "listbutton";
divList.appendChild(listbutton);

const ul = document.createElement("ul");
ul.className = "nav nav-pills";
listbutton.appendChild(ul);

const li = document.createElement("li");
li.id = "newlist";
li.className = "btn main";
li.innerHTML = " + Añada una lista ...";
li.addEventListener("click", newTitle)
ul.appendChild(li);

//Create Write New Title List 
function newTitle() {
    console.log("newTitle")
    listbutton.classList.add("hide");
    const listformdiv = document.createElement("div");
    listformdiv.id = "listform";
    listformdiv.className = "list-form";
    divList.appendChild(listformdiv);

    inputlist = document.createElement("input");
    inputlist.id = ("inputlist");
    inputlist.className = "form-control";
    inputlist.type = ("text");
    inputlist.placeholder = "Introduzca el título de la lista...";
    listformdiv.appendChild(inputlist);

    const addListbutton = document.createElement("button");
    addListbutton.id = "addlist";
    addListbutton.className = "btn btn-success";
    addListbutton.innerText = "Añadir lista";
    listformdiv.appendChild(addListbutton);

    addListbutton.addEventListener("click", function() {
        listformdiv.classList.add("hide");
        listDisplay();
    });



    //Create new list display
    function listDisplay() {
        console.log("listDisplay")
        const listDisplayDiv = document.createElement("div");
        listDisplayDiv.id = "newlistdisplay";
        listDisplayDiv.className = "list-form";
        divList.appendChild(listDisplayDiv);

        let cardDiv = document.createElement("div");
        cardDiv.id = "titlelist";
        let input = document.getElementById("inputlist").value;
        console.log(input);
        cardDiv.innerHTML = input;
        listDisplayDiv.appendChild(cardDiv);

        const cardbuttonDiv = document.createElement("div");
        cardbuttonDiv.id = "cardbutton";
        listDisplayDiv.appendChild(cardbuttonDiv);

        const ulList = document.createElement("ul");
        ulList.className = "nav nav-pills";
        cardbuttonDiv.appendChild(ulList);

        const liList = document.createElement("li");
        liList.id = "newcard";
        liList.className = "btn buttons main";
        liList.innerHTML = "+ Añada una tarjeta";
        ulList.appendChild(liList);
    }
}




/*
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
            p.innerHTML = cardtext + ` <li class="btn buttons delete ">&#xf00d;</li>`;
            textcard.appendChild(p);
            document.getElementById("inputcard").value = "";
        }
    })*/