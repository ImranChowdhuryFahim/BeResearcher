import React, { useContext } from 'react';
import Markdown from 'markdown-to-jsx';
import { makeStyles } from '@material-ui/core/styles';
import { NewsContext } from './NewsProvider';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));
const SinglePostPage = (props) => {
  const news = useContext(NewsContext);
  const classes = useStyles();
  return (
    <div>
      <div>
        {news[0] ? (
          <Markdown key={news[props.match.params.id].body.substring(0, 40)}>
            {news[props.match.params.id].body}
          </Markdown>
        ) : (
          'loading...'
        )}
      </div>
    </div>
  );
};

export default SinglePostPage;
