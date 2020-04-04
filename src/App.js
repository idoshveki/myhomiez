import React from 'react';

import Homiez from './Homiez';

const useStyles = () => ({
  root: {
    background: '#5F7485',
  },
})

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Homiez />
    </div>
  );
}
