import React, { PureComponent } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import quotesActions from './../actions/quotes';

const Quote = (props) => (
    <li className="quote">
        {props.children}
    </li>
)

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
                { quotesList ? quotesList.map(i => 
                    <Quote>
                        <p className="quote-author">{i.title}</p>
                        <p className="quote-text">{i.content}</p>
                        <p className="quote-link">{i.link}</p>
                    </Quote>
                    ) : null }
            </div>
        );
    };
};

const mapStateToProps = (quotes) => {
    return {
        quotes
    }
}

export default connect(mapStateToProps)(Quotes);