import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
  cardContainer: {
    margin: '50px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '60%',
    height: 450,
    maxWidth: 645,
    margin: '20px',
  },
  cardActionArea: {
    display: 'flex',
    justifyContent: 'center',
  },
  cover: {
    height: 600,
    margin: 0,
    background: '#121F2A',
    display: 'flex',
    justifyContent: 'center',
  },
  coverPhoto: {
    height: 600,
  },
  root: {
    background: '#EDEDED',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
  },
  titles: {
    fontFamily: "Verdana",
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  primaryText: {
    display: 'flex',
    paddingTop: '10px',
    fontSize: '50px',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 100,
    marginLeft: 100,
  },
  secondaryText: {
    display: 'flex',
    paddingTop: '10px',
    fontSize: '20px',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 100,
    marginLeft: 100,
  },
  discountText: {
    display: 'flex',
    paddingTop: '30px',
    fontSize: '30px',
    textAlign: 'center',
    color: '#002B7F',
    justifyContent: 'center',
    marginRight: 100,
    marginLeft: 100,
  }
});


export default function BarberOne(data) {
  const classes = useStyles();
  const [values, setValues] = React.useState(0)
  const barberData = data.data
  return (
    <div className={classes.root}>
    <div>
      <div className={classes.cover}>
        <img alt='barber' className={classes.coverPhoto} src={barberData.img}/>
      </div>
    </div>
    <div className={classes.body}>
      <div className={classes.titles}>
        <div className={classes.primaryText}>
          {barberData.title}
        </div>
        <div className={classes.secondaryText}>
          {barberData.description}
        </div>
        <div className={classes.discountText}>
          גובה ההנחה  {barberData.discount}%
        </div>
      </div>
      <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
          <CardContent>
            <Typography variant="h5" style={{'textAlign':'center'}}>
                רכישת קופון
            </Typography>
            <Typography variant="h6" color="textSecondary" style={{'textAlign':'center'}}>
            מהו סכום הקופון אותו תרצה לרכוש
            </Typography>
            <FormControl fullWidth>
              <InputLabel>סכום</InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={values}
                  onChange={(event) => setValues(event.target.value)}
                  startAdornment={<InputAdornment position="start">ש"ח</InputAdornment>}
                />
            </FormControl>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    </div>
    </div>
  );
}
