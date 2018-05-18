import React from 'react'
import { connect } from 'react-redux';

const Authors = ({ quote }) => {
  return (
      <div className="quote-container">
          <div>
              <div className="quote">
                  <p className="quote-author">{quote.title}</p>
                  <a href={quote.link} className="quote-link">{quote.link}</a>
              </div>
          </div>
      </div>
  )
}

const Profile = (props) => {
  const { quotes } = props;
  const quotesList = Object.values(quotes);
  return (
      <div className="app-quotes-container">
          <h1>Authors</h1>
          <h2>You should go to 'Quotes' first and click 'Drag quotes' to see list of authors</h2>
          <div>
            { quotesList ? quotesList.map(quote => <Authors key={quote.ID} quote={quote}/>) : null }
          </div>
      </div>
  )
}

const mapStateToProps = (quotes) => {
  return {
      quotes
  }
}

export default connect(mapStateToProps)(Profile);