import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
      {
        img: 'https://storage.cloud.google.com/www.github4designers.com/galIdo8.gif',
        title: 'galido8',
        author: 'author',
      },
    {
      img: '/galido11.png',
      title: 'galido11',
      author: 'author',
    },
    {
      img: '/galido3.png',
      title: 'galido3',
      author: 'author',
    },
      {
        img: '/galido9.png',
        title: 'galido9',
        author: 'author',
      },
      {
        img: 'https://storage.cloud.google.com/www.github4designers.com/galIdo10.gif',
        title: 'galido10',
        author: 'author',
      },
      {
        img: 'https://storage.cloud.google.com/www.github4designers.com/galIdo7.gif',
        title: 'galido7',
        author: 'author',
      },

      {
        img: '/galido4.png',
        title: 'galido4',
        author: 'author',
      },
      {
        img: '/galido5.png',
        title: 'galido5',
        author: 'author',
      },
  ];

export default function PicsGrid() {
    const theme = createMuiTheme() ;
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>  
        {tileData.map(tile => (
          <GridListTile key={tile.img} classes={{tile:classes.photo}}>
            <img src={tile.img} alt={tile.title}/>
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
