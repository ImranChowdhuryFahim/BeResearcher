import React, { createContext } from 'react';

export const NewsContext = createContext();

class NewsProvider extends React.Component {
  state = { news: [] };

  componentDidMount() {
    fetch('https://beresearcherbd.herokuapp.com/api/news/get-all-news')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ news: res });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <NewsContext.Provider value={this.state.news}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

export default NewsProvider;
