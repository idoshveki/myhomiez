import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: '#5F7485',
    paddingTop: '100px',
  },
  gridList: {
    margin: '0 px 50px',
    width: '50%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  photo: {
      borderRadius: '10px',
  },
});
 
  const tileData = [
    {
      img: '/galido1.png',
      title: 'galido1',
      author: 'author',
    },
    {
        img: '/galido2.png',
        title: 'galido2',
        author: 'author',
      },
    ];

export default function NewGrid() {
    const theme = createMuiTheme() ;
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>  
        {tileData.map(tile => (
          <GridListTile key={tile.img} classes={{tile:classes.photo}}>
            <img src={tile.img} alt={tile.title}/>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
