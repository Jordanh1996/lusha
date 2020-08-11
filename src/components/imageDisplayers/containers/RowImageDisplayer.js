import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export const RowImageDisplayer = ({ images, ImageComponent }) => {
  const classes = useStyles();

  const renderImages = (images = []) => {
    return images.map((image, i) => (
      <ImageComponent image={image} key={i}></ImageComponent>
    ));
  };

  return <div className={classes.container}>{renderImages(images)}</div>;
};
