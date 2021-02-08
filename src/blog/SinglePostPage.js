import React, { useContext } from 'react';
import Markdown from './Markdown';
import { makeStyles } from '@material-ui/core/styles';
import { PostsContext } from './PostsProvider';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));
const SinglePostPage = (props) => {
  const posts = useContext(PostsContext);
  const classes = useStyles();
  return (
    <div>
      <div>
        <Markdown
          className={classes.markdown}
          key={posts[props.match.params.id].body.substring(0, 40)}
        >
          {posts[props.match.params.id].body}
        </Markdown>
      </div>
    </div>
  );
};

export default SinglePostPage;
