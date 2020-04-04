import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Homiez from './Homiez';
import PicsGrid from './PicsGrid';
import NewGrid from './NewGrid';


const useStyles = () => ({
  root: {
    background: '#5F7485',
  },
  table: {
    background: '#5F7485',
  }
})

export default function App() {
  const classes = useStyles();
  // const [showLink, setShowLink] = useState(false);
  // console.log("in app", showLink)

  // const links = (
  //   <div className={classes.table}>
  //     <ul>
  //       <li>
  //         <Link to="/">Homiez-</Link>
  //       </li>
  //       <li>
  //         <Link to="/1">PicsGrid-</Link>
  //       </li>
  //     </ul>
  //   </div>
  //   );

  return (
    <div className={classes.root}>
      <Homiez />
    {/* <Router>
      {showLink ? links: null}
        <div>
          <button onClick={() => setShowLink(!showLink)}>
            Show/hide links
          </button>
        </div>
        <Homiez />
        <Switch>
          <Route path="/1">
            <PicsGrid />
          </Route>
        </Switch>
    </Router> */}
    </div>
  );
}
