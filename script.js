function display() {
    var userName = document.getElementById("userName").value;

    var typicalJason = document.getElementById("typicalJason");
    var typicalAngel = document.getElementById("typicalAngel");
    var typicalOmphile = document.getElementById("typicalOmphile");
    var typicalHenry = document.getElementById("typicalHenry");
    var typicalTryphina = document.getElementById("typicalTryphina");
    var typicalError = document.getElementById("typicalError");
    var typicalError2 = document.getElementById("typicalError2");

    typicalJason.textContent = "";
    typicalAngel.textContent = "";
    typicalOmphile.textContent = "";
    typicalHenry.textContent = "";
    typicalTryphina.textContent = "";
    typicalError.textContent = "";
    typicalError2.textContent = "";

    if(userName === "Jason" || userName === "jason" || userName === "ofentse" || userName === "Ofentse") {
        typicalJason.textContent = `This is how ${userName} writes😎`;
    } else if(userName === "Omphile" || userName === "omphile") {
        typicalOmphile.textContent = "Come on dude, i don't know how to write yet😭";
    } else if(userName === "Angel" || userName === "angel" || userName === "Kagiso" || userName === "kagiso") {
        typicalAngel.textContent = `This is how ${userName} writes`;
    } else if(userName === "Tryphina" || userName === "tryphina" || userName === "mama" || userName === "Mama") {
        typicalTryphina.textContent = `This is how ${userName} writes`;
    } else if(userName === "Henry" || userName === "henry" || userName === "papa" || userName === "Papa") {
        typicalHenry.textContent = `This is how ${userName} writes😂`;
    } else{
        typicalError.textContent = `I really don't know how ${userName} writes!!!`;
        typicalError2.textContent = `maybe like this😂😂😂`;

    }
}
