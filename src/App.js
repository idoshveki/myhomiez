import React, {useState} from 'react';

import Homiez from './Homiez';
import BarberOne from './BarberOne';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const useStyles = () => ({
  root: {
    background: '#5F7485',
  },
})

export default function App() {
  const classes = useStyles();
  const [showLinks, setShowLinks] = useState(true);

  const [currentData, setCurrentData] = useState({
      img: 'https://medias.timeout.co.il/www/uploads/2016/05/DSC3957_t-1140x641.jpg',
      title: 'מספרת ויטוריו',
      description: 'האגנדה האסתטית של הספר הוותיק ויטוריו דוד נשמעת הגיונית על פני השטח, אבל בוודאי תבהיל את מי שרגיל למספרה שגרתית. ',
      tel: '0546336950',
      url: 'https://www.facebook.com/vittorio.david',
  });

  const links = (
    <ul>
      <li>
        <Link to="/">Homiez</Link>
      </li>
    </ul>
  );
  const button1= (
    <button onClick={() => setShowLinks(!showLinks)}>
        show/hide links
    </button>
  );
  return (
    <>
      <Router>
          <Switch>
            <Route exact path="/" component={() => (
              <div className={classes.root}>
                <Homiez setShop={setCurrentData}/>
              </div>
            )}/>
            <Route 
              path="/barber" 
              render={(props) => <BarberOne {...props} data={currentData} />}/>
          </Switch>
          {showLinks? links : null}
          {button1}
      </Router>
    </>
  );
}
