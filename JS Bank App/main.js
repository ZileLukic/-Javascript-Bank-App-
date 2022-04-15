var datumH4 = document.getElementById("datum");
var vremeH4 = document.getElementById("vreme");
var tBody = document.getElementsByTagName("tBody")[0];
var accountBtn = document.getElementById("accountBtn");
var addAccountBtn = document.getElementById("addAccountBtn");
var mainRow = document.getElementById("mainRow");
var id_i = document.getElementById("id_i");
var name_i = document.getElementById("name_i");
var deposit_i = document.getElementById("deposit_i");
var cCard_i = document.getElementById("cCard_i");
var sub_i = document.getElementById("sub_i");
var editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click",newTable);
accountBtn.addEventListener("click",displayAccounts);
addAccountBtn.addEventListener("click",showForm);
sub_i.addEventListener("click",addToDb);
var text = "";

var db = [
    {
       id : 001,
       name : "Zaklina",
       deposit : "102000",
       cCard : "visa"
    },
    {
        id : 002,
        name : "Skoljkica",
        deposit : "202000",
        cCard : "Maestro",
    }
];


prikaziDatumiVreme();
displayAccounts();
function prikaziDatumiVreme() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var date = now.toDateString();
    if (h < 10) {
        h = "0"+h;
    }
    if (m < 10) {
        m = "0"+m;
    }
    if (s < 10) {
        s = "0"+s;
    }
    var time = h+":"+m+":"+s;
    vremeH4.innerHTML = time;
    datumH4.innerHTML = date;
    setTimeout(prikaziDatumiVreme,1000); 
}

function displayAccounts() {
    mainRow.style.display = "block";
    formRow.style.display = "none";
    text = "";
    for(var i = 0; i < db.length;i++) {
        text += "<tr><td>"+db[i].id+"</td><td>"+db[i].name+"</td><td>"+db[i].deposit+"</td><td>"+db[i].cCard+"</td></tr>"
    }
    tBody.innerHTML = text;
}
function showForm() {
    mainRow.style.display = "none";
    formRow.style.display = "block";
}

function addToDb() {
    var obj = {
        id : id_i.value,
        name : name_i.value,
        deposit : deposit_i.value,
        cCard : cCard_i.value
    }
    db.push(obj);
    id_i.value = "";
    name_i.value = "";
    deposit_i.value = "";
    cCard_i.value = "";
    displayAccounts();

}
function newTable() {
        mainRow.style.display = "block";
        formRow.style.display = "none";
        text = "";
        for(var i = 0; i < db.length;i++) {
            text += "<tr><td>"+db[i].id+"</td><td>"+db[i].name+"</td><td>"+db[i].deposit+'</td><td>'+db[i].cCard+
            '</td><td><input type="button" value="edit" class="'+i+' tablebtns btn btn-sm btn-warning"/></td><td><input type="button" value="delete" class="'+i+' tablebtns btn btn-sm btn-danger"/></td></tr>'
        }
        tBody.innerHTML = text;
        var allBtns = document.getElementsByClassName("tableBtns");
        for (var i = 0; i < allBtns.length; i++) {
            allBtns[i].addEventListener("click",editAccount);
        }
}
function editAccount() {
    console.log(this);
    //if (this.value === "delete") {
       // var accForDelete = this.className[0];
       // db.splice(accForDelete,1);
        //displayAccounts();
   
}

