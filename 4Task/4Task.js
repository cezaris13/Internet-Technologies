
function submitData() {
    validateData();
}

function validateData() {
    let number = document.getElementById("number").value;
    checkIfInt(number, "juostu kiekis negali buti mazesnis uz 0");

    let dateValue = document.getElementById("date").value;
    const date = dateValue.split("-");
    const year = parseInt(date[0]);
    const month = parseInt(date[1]) - 1;
    const day = parseInt(date[2]);
    let datee = new Date(year, month, day);
    if (datee.getDate() != day || datee.getMonth() != month || datee.getFullYear() != year) {
        alert("Nekorektiška data. Turi būti formatu MMMM-mm-dd");
    }
}

function toggleList() {
    let list = $(".toggle-list");
    let listCss = list.css("display");
    if (listCss == "none") {
        list.show();
    }
    else {
        list.hide();
    }
}

function checkIfInt(number, message) {
    if (parseInt(number) < 1) {
        alert(message);
    }
}

function removeParagraph() {
    let number = $(".remove-paragraph-number").val();
    checkIfInt(number, "Paragrafo numeris negali būti mažesnis už 1");
    let paragraphs = $("p");

    if (paragraphs.length == 0) {
        alert("Nėra paragrafų");
        return;
    }
    if (number > paragraphs.length) {
        alert("Paragrafo su tokiu numeriu nėra");
        return;
    }
    let paragraph = paragraphs.eq(number - 1);

    paragraph.remove();
}

function addParagraph() {
    let paragraphText = $(".add-paragraph-text").val();
    if (paragraphText.length == 0) {
        alert("Paragrafo tekstas negali būti tuščias");
        return;
    }
    $(".paragraph-list").append("<p>" + paragraphText + "</p>");
}

function editParagraph() {
    let number = $(".edit-paragraph-number").val();
    checkIfInt(number, "Paragrafo numeris negali būti mažesnis už 1");
    let paragraphs = $("p");

    if (paragraphs.length == 0) {
        alert("Nėra paragrafų");
        return;
    }

    if (number > paragraphs.length) {
        alert("Paragrafo su tokiu numeriu nėra");
        return;
    }

    let paragraph = paragraphs.eq(number - 1);
    let paragraphText = $(".edit-paragraph-text").val();
    if (paragraphText.length == 0) {
        alert("Paragrafo tekstas negali būti tuščias");
        return;
    }
    // jei noriu kazko geriau, t.y. html elementai vidueje tai tada naudoti .html()
    paragraph.text(paragraphText);
}

function toggleStyle() {
    let paragraphList = $(".paragraph-list");
    if (paragraphList.css("color") !== "rgb(255, 0, 0)") {
        paragraphList.css("color", "red");
    }
    else {
        paragraphList.css("color", "black");
    }
}

function addPerson() {
    let person = $(".add-human").val();
    if (person.length == 0) {
        alert("Žmogaus vardas negali būti tuščias");
        return;
    }
    $(".people-list").append("<li>" + person + "</li>");
}

// ajax requests

function getJson() {
    let jsonObject = {};
    let elements = $(".people-list > li").toArray().map(li => li.innerText);
    jsonObject.people = elements;
    return jsonObject;
}

function sendRequest() {
    let jsonOfPeople = getJson();

    $.ajax("https://jsonblob.com/api/jsonBlob", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(jsonOfPeople),
        success: function (data, _textStatus, request) {
            alert("Success");
            console.log(data);
            updateTable(data, request.getResponseHeader("Location"));
        },
        error: function (error) {
            alert("Error");
            console.log(error);
        }
    });
}

function getBlobInfo() {
    const blobId = $(".blob-info").val();

    $.ajax(`https://jsonblob.com/api/jsonBlob/${blobId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        success: function (data) {
            alert("Success");
            console.log(data);
            showBlobResponse(data);
        },
        error: function (error) {
            alert("Toks blobas neegzistuoja");
            console.log(error);
        }
    });
}

function addBlobToList(location) {
    let endpointSplit= location.split("/");
    let blobId = endpointSplit[endpointSplit.length - 1];
    $(".blob-list").append("<li>" + blobId + "</li>");
}

function updateTable(data, location) {
    addBlobToList(location);
    let parsedData = data;
    let table = $(".server-response-table > tbody");
    let tableElementCount = $(".server-response-table > tbody > tr").length;

    parsedData.people.forEach(element => {
        table.append("<tr><td>" + tableElementCount + "</td><td>" + element + "</td></tr>");
        tableElementCount++;
    });
}

function showBlobResponse(data) {
    // let parsedData = JSON.parse(data);
    let parsedData = data;
    let table = $(".blob-response-table > tbody");
    let tableElementCount = 1;
    table.children().not(':first').remove();

    parsedData.people.forEach(element => {
        table.append("<tr><td>" + tableElementCount + "</td><td>" + element + "</td></tr>");
        tableElementCount++;
    });
}