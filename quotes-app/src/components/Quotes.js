import React, { PureComponent } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import quotesActions from './../actions/quotes';

class Quote extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            newQuote: ''
        }
    }
    onHandleClick = () => {
        const quote = this.state.newQuote;
        const quoteId = this.props.quote.ID;
        this.setState({ editable: !this.state.editable })
        quotesActions.editQuote(quote, quoteId);
    }
    onHandleChange = (e) => {
        this.setState({ newQuote: e.target.value });
    }
    isEditable = () => {
        this.setState({ editable: !this.state.editable })
    }
    render() {
        const { title, content, ID } = this.props.quote;
        return (
            <div className="quote-container">
                <div className="delete-container">
                { this.state.editable ?
                <div className="quote">
                    <p className="quote-author">{ title }</p>
                    <textarea className="quote-editable-cell" onChange={this.onHandleChange}>{ content }</textarea>
                    <div className="button-container small">
                        <button className="button" onClick={this.onHandleClick}> SAVE </button>
                    </div>
                </div> :
                <div className="quote">
                    <div className="button-container">
                        <button className="button" onClick={() => quotesActions.deleteQuote(ID)}> DELETE </button>
                        <button className="button" onClick={this.isEditable}> EDIT </button>
                    </div>
                    <p className="quote-author">{ title }</p>
                    <p className="quote-text">{ content }</p>
                </div>
                }
                </div>
            </div>
        );
    };
};

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
                <h1> Welcome to Quotes ! </h1>
                <div className="button-container">
                    <button className="button" onClick={this.onHandleClick}> DRAG QUOTES </button>
                </div>
                { quotesList.map(quote => <Quote key={quote.ID} quote={quote}/>) }
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