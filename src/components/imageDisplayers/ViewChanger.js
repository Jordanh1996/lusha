import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { RowImageDisplayer } from './containers/RowImageDisplayer';
import { ColumnImageDisplayer } from './containers/ColumnImageDisplayer';
import ModePicker from './modePickers/ModePicker';
import DividedRenderer from './imageRenderers/DividedRenderer';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
  },
});

const defaultModes = [
  {
    key: 'row',
    Icon: ArrowForward,
    DisplayStyle: RowImageDisplayer,
  },
  {
    key: 'column',
    Icon: ArrowDownward,
    DisplayStyle: ColumnImageDisplayer,
  },
];

export default ({ modes = defaultModes, images }) => {
  const [modeKey, setModeKey] = useState(modes[0].key);
  const classes = useStyles();

  const mode = modes.find((defaultMode) => defaultMode.key === modeKey);
  if (!mode) {
    return <div>Diplay mode not found</div>;
  }

  const onModeClick = (mode) => {
    setModeKey(mode.key);
  };

  const { DisplayStyle } = mode;
  return (
    <div className={classes.container}>
      <div>
        <ModePicker
          modes={modes}
          selectedKey={modeKey}
          onModeClick={onModeClick}
        />
      </div>
      <DisplayStyle images={images} ImageComponent={DividedRenderer} />
    </div>
  );
};
