import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ViewChanger from '../components/imageDisplayers/ViewChanger';
import LoadingButton from '../components/common/LoadingButton';
import { getImages } from '../actions/images/actions';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();

  const loadImages = () => {
    dispatch(getImages());
  };

  useEffect(() => loadImages(), []);

  if (!state) return <div></div>;
  const { loading, data: images } = state;

  return (
    <div className={classes.container}>
      <ViewChanger images={images} />
      <LoadingButton onClick={loadImages} loading={loading} />
    </div>
  );
};
