import React, { PureComponent } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import quotesActions from './../actions/quotes';

const Quote = ({ quote, deleteQuote }) => {
    return (
        <div className="quote-container">
            <div className="delete-container" onClick={() => quotesActions.deleteQuote(quote.ID)}>
                <div className="quote">
                    <a className="delete-button">Delete quote</a>
                    <p className="quote-author">{quote.title}</p>
                    <p className="quote-text">{quote.content}</p>
                </div>
            </div>
        </div>
    )
}

class Quotes extends PureComponent {
    onHandleClick = () => {
      axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20')
        .then(response => quotesActions.fetchQuotes(response.data));
    }
    render() {
        const { quotes } = this.props;
        const quotesList = Object.values(quotes);
        return (
            <div className="app-quotes-container">
                <h1>Welcome to Quotes !</h1>
                <div className="button-container">
                    <button className="button" onClick={this.onHandleClick}>DRAG QUOTES</button>
                </div>
                { quotesList ? quotesList.map(quote => <Quote key={quote.ID} deleteQuote={quotesActions.deleteQuote} quote={quote}/>) : null }
            </div>
        )
    };
};

const mapStateToProps = (quotes) => {
    return {
        quotes
    }
}

export default connect(mapStateToProps)(Quotes);