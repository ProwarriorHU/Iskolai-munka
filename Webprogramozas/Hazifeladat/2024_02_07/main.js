let books = [
    {
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "year": 1951,
        "publisher": "Little, Brown and Company",
        "language": "English",
        "ISBN": "0316769177",
        "pages": 277,
        "price": 8.99
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960,
        "publisher": "J. B. Lippincott & Co.",
        "language": "English",
        "ISBN": "0446310786",
        "pages": 281,
        "price": 9.99
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925,
        "publisher": "Charles Scribner's Sons",
        "language": "English",
        "ISBN": "9780743273565",
        "pages": 180,
        "price": 7.99
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "year": 1967,
        "publisher": "Harper & Row",
        "language": "English",
        "ISBN": "0060883286",
        "pages": 417,
        "price": 12.99
    },
    {
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "year": 1932,
        "publisher": "Chatto & Windus",
        "language": "English",
        "ISBN": "0060850523",
        "pages": 311,
        "price": 10.99
    },
    {
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "year": 1890,
        "publisher": "Lippincott's Monthly Magazine",
        "language": "English",
        "ISBN": "9780141439570",
        "pages": 254,
        "price": 6.99
    },
    {
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "year": 1884,
        "publisher": "Chatto & Windus",
        "language": "English",
        "ISBN": "9780141439648",
        "pages": 366,
        "price": 11.99
    },
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "year": 1937,
        "publisher": "George Allen & Unwin",
        "language": "English",
        "ISBN": "9780547928227",
        "pages": 310,
        "price": 13.99
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "year": 1954,
        "publisher": "George Allen & Unwin",
        "language": "English",
        "ISBN": "9780547928210",
        "pages": 1178,
        "price": 29.99
    },
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "year": 1979,
        "publisher": "Pan Books",
        "language": "English",
        "ISBN": "9780345391803",
        "pages": 193,
        "price": 5.99
    },
    {
        "title": "The Da Vinci Code",
        "author": "Dan Brown",
        "year": 2003,
        "publisher": "Doubleday",
        "language": "English",
        "ISBN": "9780385504201",
        "pages": 454,
        "price": 14.99
    },
    {
        "title": "The Girl with the Dragon Tattoo",
        "author": "Stieg Larsson",
        "year": 2005,
        "publisher": "Norstedts Förlag",
        "language": "English",
        "ISBN": "9780307269751",
        "pages": 590,
        "price": 16.99
    }
]
let isForint = false;
//1. feladat
let accordion = document.getElementById("accordion");
let i = 0;
books.forEach(e => {
    accordion.innerHTML += `<div class="accordion-item">
    <h2 class="accordion-header" id="heading${i}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
            ${e.title}
        </button>
    </h2>
    <div id="collapse${i}" class="accordion-collapse collapse" aria-labelledby="heading${i}" data-bs-parent="#accordion">
        <div class="accordion-body">
            <ul class="list-group">
                <li class="list-group-item">ISBN: ${e.ISBN}</li>
                <li class="list-group-item">Author: ${e.author}</li>
                <li class="list-group-item">Year: ${e.year}</li>
                <li class="list-group-item">Publisher: ${e.publisher}</li>
                <li class="list-group-item">Language: ${e.language}</li>
                <li class="list-group-item">Pages: ${e.pages}</li>
                <li class="list-group-item">Price: ${e.price}</li>
                </ul><br>
                <button class="btn btn-success" onclick="AddToCart(${e.ISBN})">Add to Cart</button>
        </div>
    </div>
  </div>`
  i++;
});
//2. feladat
let cartArray = [];
document.getElementById("cartBtn").addEventListener("click", () => {
    cartList.innerHTML = "";
    cartArray.forEach(e => 
        {cartList.innerHTML += `<li class="list-group-item">Title: <b>${e.title}</b> - Price: ${isForint ? Math.round(eurToHuf(e.price)) : e.price}${isForint ? "FT" : "€"} - Author: ${e.author}</li>`
    })
});
//3. feladat
document.getElementById("delete").addEventListener("click", () => {cartList.innerHTML= ""});
//4. feladat
function AddToCart(ISBN){
    let j = 0;
    while(books[j].ISBN != ISBN && j < books.length){
        j++;
    }
    cartArray.push(books[j])
}
//5. feladat
window.addEventListener("resize", () => {isForint = true;})
function eurToHuf(num){
    return num * 387
}