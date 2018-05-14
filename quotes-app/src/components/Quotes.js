import React, { PureComponent } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import quotesActions from './../actions/quotes';

class Quotes extends PureComponent {
    onHandleClick = () => {
      axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20')
        .then(response => quotesActions.fetchQuotes(response.data));
    }
    render() {
        const { quotes } = this.props;
        const quotesList = Object.values(quotes);
        return (
            <div>
                <h1>Welcome to Quotes</h1>
                <div className="button-container">
                    <button className="button" onClick={this.onHandleClick}>DRAG QUOTES</button>
                </div>
                { quotesList ? quotesList.map(i => <ul>{i.content}</ul>) : null }
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