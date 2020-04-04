import React, {useState} from 'react';

import Homiez from './Homiez';
import BarberOne from './BarberOne';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = () => ({
  root: {
    background: '#5F7485',
  },
})

export default function App() {
  const classes = useStyles();
  const ThemeContext = React.createContext({});
  
  const [currentData, setCurrentData] = useState({
      img: 'https://medias.timeout.co.il/www/uploads/2016/05/DSC3957_t-1140x641.jpg',
      title: 'מספרת ויטוריו',
      description: 'האגנדה האסתטית של הספר הוותיק ויטוריו דוד נשמעת הגיונית על פני השטח, אבל בוודאי תבהיל את מי שרגיל למספרה שגרתית. ',
      tel: '0546336950',
      url: 'https://www.facebook.com/vittorio.david',
  });

  return (
    <>
    <ThemeContext.Provider value="dark">
      <Router>
          <Switch>
            <Route exact path="/">
              <div className={classes.root}>
                <Homiez setShop={setCurrentData}/>
              </div>
            </Route>
            <Route 
              path="/barber" 
              render={(props) => <BarberOne {...props} data={currentData} />}>
            </Route>
          </Switch>
      </Router>
      </ThemeContext.Provider>
    </>
  );
}
