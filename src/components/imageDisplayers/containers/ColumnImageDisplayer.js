import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    maxWidth: '400px',
  },
});

export const ColumnImageDisplayer = (props) => {
  const classes = useStyles();
  const { images, ImageComponent } = props;

  const renderImages = (images = []) => {
    return images.map((image, i) => (
      <ImageComponent image={image} key={i}></ImageComponent>
    ));
  };

  return <div className={classes.container}>{renderImages(images)}</div>;
};
