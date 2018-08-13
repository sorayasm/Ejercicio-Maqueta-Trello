window.onload = create();

function create() {
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
    li.textContent = " + Añada una lista ...";
    li.addEventListener("click", newTitle)
    ul.appendChild(li);

    //Create Write New Title List 
    function newTitle() {
        listbutton.classList.add("hide");
        const listformdiv = document.createElement("div");
        listformdiv.id = "listform";
        listformdiv.className = "list-form";
        divList.appendChild(listformdiv);

        inputlist = document.createElement("input");
        inputlist.className = "form-control inputlist";
        inputlist.type = ("text");
        inputlist.placeholder = "Introduzca el título de la lista...";
        listformdiv.appendChild(inputlist);

        const addListbutton = document.createElement("button");
        addListbutton.id = "addlist";
        addListbutton.className = "btn btn-success";
        addListbutton.textContent = "Añadir lista";
        listformdiv.appendChild(addListbutton);

        addListbutton.addEventListener("click", function() {
            listformdiv.classList.add("hide");
            listDisplay();
            inputlist.value = "";
            create();
        });
    }

    //Create new list display
    function listDisplay() {
        // Create List Display Div
        const listDisplayDiv = document.createElement("div");
        listDisplayDiv.id = "newlistdisplay";
        listDisplayDiv.className = "list-form";
        divList.appendChild(listDisplayDiv);

        // Create Delete List Button
        const deleteList = document.createElement("li");
        deleteList.className = "btn buttons float-right";
        listDisplayDiv.appendChild(deleteList);

        const deleteicon = document.createElement("i");
        deleteicon.className = "fas fa-times";
        deleteList.appendChild(deleteicon);
        deleteList.addEventListener("click", eraseList);

        function eraseList() {
            divList.removeChild(listDisplayDiv);
        };

        // Create card Div
        let cardDiv = document.createElement("div");
        cardDiv.className = "titlelist";
        let input = document.getElementsByClassName("inputlist");
        for (var i = 0; i < input.length; i += 1) {
            inputValue = input[i].value;
        }
        cardDiv.innerHTML = "<p>" + inputValue + "</p>";
        listDisplayDiv.appendChild(cardDiv);

        // Create Card Button
        const cardbuttonDiv = document.createElement("div");
        cardbuttonDiv.id = "cardbutton";
        listDisplayDiv.appendChild(cardbuttonDiv);

        const ulList = document.createElement("ul");
        ulList.className = "nav nav-pills";
        cardbuttonDiv.appendChild(ulList);

        const liList = document.createElement("li");
        liList.id = "newcard";
        liList.className = "btn buttons main";
        liList.textContent = "+ Añada una tarjeta";
        ulList.appendChild(liList);

        // Onclick
        liList.addEventListener("click", function() {
            // hide Card Button
            cardbuttonDiv.classList.add("hide");
            showCardInput();
        });

        function showCardInput() {
            //Create text card Div
            const textcardDiv = document.createElement("div");
            textcardDiv.className = "textcard";
            cardDiv.appendChild(textcardDiv)

            // Create New Text card input
            const cardformDiv = document.createElement("div");
            cardformDiv.id = "cardform";
            cardDiv.appendChild(cardformDiv)

            const inputcardArea = document.createElement("textarea");
            inputcardArea.className = "form-control inputcard";
            inputcardArea.rows = "3"
            inputcardArea.placeholder = "Introduzca el contenido de la tarjeta...";
            cardformDiv.appendChild(inputcardArea)

            const addcardButton = document.createElement("button");
            addcardButton.id = "addcard";
            addcardButton.className = "btn btn-success";
            addcardButton.textContent = "Añadir"
            cardformDiv.appendChild(addcardButton);

            // Onclick
            addcardButton.addEventListener("click", function() {
                // Add card and keep the form
                addCard();
            });

            function addCard() {
                const cardtext = document.getElementsByClassName("inputcard");
                for (var i = 0; i < cardtext.length; i += 1) {
                    cardtextValue = cardtext[i].value;
                }

                const pCardtext = document.createElement("p");
                pCardtext.textContent = cardtextValue;
                textcardDiv.appendChild(pCardtext)

                const deleteicon = document.createElement("i");
                deleteicon.className = "far fa-times float-right";
                pCardtext.appendChild(deleteicon)

                deleteicon.addEventListener("click", function() {
                    textcardDiv.removeChild(pCardtext);
                });

                inputcardArea.value = "";

            };

        };
    };
};