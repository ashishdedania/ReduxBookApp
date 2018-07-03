// selectBook is Actioncreator, it needs to return action
//an object with type property

export function selectBook(book) {
    return {
        type:'BOOK_SELECTED',
        payload: book
    }
}