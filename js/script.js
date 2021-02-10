// Book Class:Represents a book
class Book {
	constructor(title, author, isbn) {
		this.title  = title
		this.author = author
		this.isbn   = isbn 
	}
}

//UI class:Handle UI tasks
class UI {
	static displayBooks() {
		const StoredBooks = [
			{
				title: 'Book One',
				author: 'John Doe',
				isbn: 34343434
			},
			{
				title: 'Book Two',
				author: 'Jane Doe',
				isbn: 32564562
			}
		]

		const books = StoredBooks
		books.forEach((book) => UI.addBookToList(book))
	}

	static addBookToList(book) {
		const list = document.querySelector('#book-list')
		const row  = document.createElement('tr')
		row.innerHTMl = `
			<td>${book.title}</td>	
			<td>${book.author}</td>	
			<td>${book.isbn}</td>	
			<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`
		list.appendChild(row)	
	}
}

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)






















