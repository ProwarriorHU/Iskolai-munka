const books = [
    {
        "title": "A Katedrális",
        "author": "Raymond Carver",
        "publisher": "Magvető Kiadó",
        "published": 1981,
        "ISBN": generateISBN()
    },
    {
        "title": "A Megálló",
        "author": "Kazuo Ishiguro",
        "publisher": "Magvető Kiadó",
        "published": 2005,
        "ISBN": generateISBN()
    },
    {
        "title": "Az utolsó előtti előadás",
        "author": "Randy Pausch",
        "publisher": "Gabo Kiadó",
        "published": 2008,
        "ISBN": generateISBN()
    },
    {
        "title": "Bűn és bűnhődés",
        "author": "Fjodor Mihajlovics Dosztojevszkij",
        "publisher": "Magvető Kiadó",
        "published": 1866,
        "ISBN": generateISBN()
    },
    {
        "title": "Kisasszonyok",
        "author": "Louisa May Alcott",
        "publisher": "Csengőkönyvek",
        "published": 1868,
        "ISBN": generateISBN()
    },
    {
        "title": "Az asszony a vörös kalapban",
        "author": "Orhan Pamuk",
        "publisher": "Magvető Kiadó",
        "published": 2002,
        "ISBN": generateISBN()
    },
    {
        "title": "A világ összes fénye",
        "author": "Janne Teller",
        "publisher": "Európa Könyvkiadó",
        "published": 1996,
        "ISBN": generateISBN()
    },
    {
        "title": "A Füveskönyv",
        "author": "Mikszáth Kálmán",
        "publisher": "Alexandra Kiadó",
        "published": 1901,
        "ISBN": generateISBN()
    },
    {
        "title": "Szent Johanna kúria",
        "author": "Szabó Magda",
        "publisher": "Magvető Kiadó",
        "published": 1939,
        "ISBN": generateISBN()
    },
    {
        "title": "Hűség",
        "author": "Zsófia Ruttkay",
        "publisher": "Libri Kiadó",
        "published": 2017,
        "ISBN": generateISBN()
    },
    {
        "title": "Az elveszett jelkép",
        "author": "Dan Brown",
        "publisher": "Gabo Kiadó",
        "published": 2003,
        "ISBN": generateISBN()
    },
    {
        "title": "Az ötödik hegy",
        "author": "Paulo Coelho",
        "publisher": "Magvető Kiadó",
        "published": 1996,
        "ISBN": generateISBN()
    }
]

let isCard = true;
let card = document.getElementById("outputCard");
let table = document.getElementById("outputTable");
document.addEventListener("DOMContentLoaded", load());
document.getElementById("cardBtn").addEventListener("click", load());
document.getElementById("tableBtn").addEventListener("click", ()=>{
    isCard = false;
    load();
});

function generateISBN(){
    let ISBN = "978";
    while (ISBN.length <= 13){
        ISBN += Math.floor(Math.random()*10);
    }
    return ISBN;
}

function load(){
    if (isCard){
        card.style.display = "block";
        table.style.display = "none";
        document.getElementById("cardBtn").classList.add("active");
        document.getElementById("tableBtn").classList.remove("active");
        books.forEach(book => {
            card.innerHTML += 
            `<div class="col-sm-12 col-md-6 col-lg-3 mb-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
                        <p class="card-text">${book.published}-ben/ban tette közzé a ${book.publisher}</p>
                    </div>
                </div>
            </div>`
        i++;
        });
    }
    else{
        card.style.display = "none";
        table.style.display = "block";
        document.getElementById("cardBtn").classList.remove("active")
        document.getElementById("tableBtn").classList.add("active")
        books.forEach(book => {
            table.innerHTML += 
            `<thead>
                <tr>
                    <th>ISBN</th>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Kiadó</th>
                    <th>Kiadás éve</th>
                </tr>
            </thead>
            <tbody>
            <td>${book.ISBN}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publisher}</td>
            <td>${book.published}</td>
            </tbody>`
        });
    }
}