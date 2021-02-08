import React, { createContext } from 'react';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

export const PostsContext = createContext();

class PostsProvider extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    fetch('https://beresearcherbd.herokuapp.com/api/blog/get-all-blog-posts')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ posts: res });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <PostsContext.Provider value={this.state.posts}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}

export default PostsProvider;
