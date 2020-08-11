import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import Refresh from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  fabProgress: {
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
}));

export default (props) => {
  const classes = useStyles();

  const { loading, ...rest } = props;
  return (
    <div className={classes.wrapper} {...rest}>
      <Fab aria-label='refresh' color='primary' disabled={loading}>
        <Refresh />
      </Fab>
      {loading && (
        <CircularProgress size={68} className={classes.fabProgress} />
      )}
    </div>
  );
};
