import React,{ Component} from 'react';

import ShowingSingleBook from './ShowingSingleBook';

export default class Shelf extends Component{
  state = {
    ShelfName: ''
  }
  render(){
    const {books, shelf, book,ChangingShelf} = this.props;

    if( shelf === "currentlyReading"){
      this.state.ShelfName ="Currently Reading";
    }
    else if (shelf === "wantToRead"){
      this.state.ShelfName= "Want To Read";
    }
    else if(shelf === "read") {
      this.state.ShelfName= "Read" ;
    }

    return(

                <div className="bookshelf">
                  <h2 className="bookshelf-title">{ this.state.ShelfName }</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {
                          books.filter( book => book.shelf === shelf).map(
                          (book,id) => (
                          <div key = {book.id}>
                            <ShowingSingleBook book = {book} books = {books} ChangingShelf={ChangingShelf}/>
                          </div>
                          )
                          )
                       }
                    </ol>
                  </div>
                </div>
      );
  }
}