class User{
    constructor(name, email, password, phone, address){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
    }
}
let users = [];
function Save(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    users.push(new User(name, email, password, phone, address));
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
}
document.getElementById('save').addEventListener('click', Save);

function List(){
    let ul = document.getElementById('userList');
    users.forEach(element=>{
        let listItem = document.createElement('li');
        listItem.innerHTML = `Név: <strong>${element.name}</strong> 
        Email: <strong>${element.email}</strong> 
        Jelszó: <strong>${element.password}</strong> 
        Telefonszám: <strong>${element.phone}</strong> 
        Lakhely: <strong>${element.address}</strong>`;
        ul.appendChild(listItem);
    })
}
document.getElementById('list').addEventListener('click', List);