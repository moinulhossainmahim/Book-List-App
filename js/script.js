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
		const storedBooks = [
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

		const books = storedBooks
		books.forEach((book) => UI.addBookToList(book))
	}

	static addBookToList(book) {
		const list = document.querySelector('#book-list')
		const row  = document.createElement('tr')
		row.innerHTML = `
			<td>${book.title}</td>	
			<td>${book.author}</td>	
			<td>${book.isbn}</td>	
			<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`
		list.appendChild(row)	
	}

	static deleteBook(el) {
		if(el.classList.contains('delete')) {
			el.parentElement.parentElement.remove()
		}
	}

	static showAlert(message, className) {
		const div = document.createElement('div')
		div.className = `alert alert-${className}`
		div.appendChild(document.createTextNode(message))
		const container = document.querySelector('.container')
		const form      = document.querySelector('#book-form')
		container.insertBefore(div, form)
		setTimeout(() => document.querySelector('.alert').remove(), 3000)
	}

	static clearFields() {
		document.querySelector('#title').value  = ''
		document.querySelector('#author').value = ''
		document.querySelector('#isbn').value   = ''
	}
}

class Store {
	static getBooks() {

	}

	static addBook(book) {

	}

	static removeBook(isbn) {

	}
}

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
	e.preventDefault()
	const title = document.querySelector('#title').value
	const author = document.querySelector('#author').value
	const isbn = document.querySelector('#isbn').value

//Validate
	if(title === '' || author === '' || isbn === '') {
		UI.showAlert('Please, fill in all fields', 'danger')
	} else {
		const book = new Book(title, author, isbn)
		UI.addBookToList(book)
		UI.showAlert('Book Added', 'success')
		UI.clearFields()
	}
})

document.querySelector('#book-list').addEventListener('click', (e) => {
	UI.deleteBook(e.target)
	UI.showAlert('Book Removed', 'success')
})




















