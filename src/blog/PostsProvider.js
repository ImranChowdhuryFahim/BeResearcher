import React, { createContext } from 'react';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

export const PostsContext = createContext();

class PostsProvider extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    Promise.all([fetch(post1), fetch(post2), fetch(post3)]).then((resp) => {
      Promise.all([
        resp[0].text(),
        resp[1].text(),
        resp[2].text(),
      ]).then((resp) => this.setState({ posts: [resp[0], resp[1], resp[2]] }));
    });
  }

  render() {
    console.log('ananan', this.state.posts);
    return (
      <PostsContext.Provider value={this.state.posts}>
        {this.props.children}
      </PostsContext.Provider>
    );
  }
}

export default PostsProvider;
