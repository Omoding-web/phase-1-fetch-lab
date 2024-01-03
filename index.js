async function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const response = await
  fetch('https://www.anapioficeandfire.com/api/books')
     .then(response => response.json())
     .then(data => {
       const main = document.getElementById('book-titles');
       data.forEach(book => {
         const h2 = document.createElement('h2');
         h2.textContent = book.name;
         main.appendChild(h2);
       });
     })
}
      fetchBooks();
 