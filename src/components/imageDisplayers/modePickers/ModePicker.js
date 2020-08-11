import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 0,
  },
  iconContainer: {
    padding: 8,
    backgroundColor: '#F3F4F7',
  },
  iconContainerSelected: {
    padding: 8,
    backgroundColor: '#D2D9E6',
  },
}));

export default ({ modes, selectedKey, onModeClick }) => {
  const classes = useStyles();

  const renderModes = (modes) => {
    return modes.map((mode) => {
      const { Icon, key } = mode;
      return (
        <div
          className={
            key === selectedKey
              ? classes.iconContainerSelected
              : classes.iconContainer
          }
          onClick={() => onModeClick(mode)}
          key={key}
        >
          <Icon />
        </div>
      );
    });
  };

  return <div className={classes.container}>{renderModes(modes)}</div>;
};
