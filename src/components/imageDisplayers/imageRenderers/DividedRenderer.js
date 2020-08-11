import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    margin: theme.spacing(3),
  },
  likesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  description: {
    fontSize: 14,
    marginBottom: theme.spacing(2),
  },
  image: {
    minHeight: '40vh',
    maxHeight: '40vh',
    flex: 1,
    backgroundSize: 'cover',
    marginBottom: theme.spacing(2),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 8,
    boxShadow: '0 0 4px 0 #404040',
  },
  likeCount: {
    alignSelf: 'center',
    paddingLeft: theme.spacing(1),
  },
}));

export default ({ image = {} }) => {
  const classes = useStyles();
  const { url, description, likes } = image;

  const renderImage = () => {
    if (url) {
      return (
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${url})` }}
        />
      );
    }
    return 'No Image Source Found';
  };

  return (
    <div className={classes.container}>
      {renderImage()}
      <div className={classes.description}>
        {description || 'No Title Available'}
      </div>
      <div className={classes.likesContainer}>
        <Favorite />
        <div className={classes.likeCount}>{likes}</div>
      </div>
    </div>
  );
};
