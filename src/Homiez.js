import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from '@material-ui/icons/FilterList';


const tags = {
  BEAUTY: 'beauty',
  FOOD: 'food',
  GROCERY: 'grocery',
  JEWELRY: 'jewelry'
}
const tagsArray = [
  {
    name: '',
    label: 'נקה פילטרים', 
  },
  {
    name: 'beauty',
    label: 'טיפוח', 
  },
  {
    name: 'food',
    label: 'אוכל', 
  },
  {
    name: 'grocery',
    label: 'מצרכים', 
  },
  {
    name: 'jewelry',
    label: 'תכשיטים', 
  },
]

const useStyles = makeStyles({
  card: {
    width: 350,
    height: 350,
    maxWidth: 345,
    margin: '20px',
    position: 'relative',
  },
  media: {
    height: 140,
  },
  a: {
    textDecoration: 'none',
  },
  cover: {
    height: 600,
    margin: 0,
    background: '#121F2A',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  coverText: {
    color: 'white',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: '20px',
    fontFamily: "Verdana",
    fontWeight: 'bold',
  },
  primaryTest: {
    fontSize: '50px',
  },
  coverPicContainer: {
    display: 'flex',
    marginLeft: 200,
  },
  coverPic: {
    width: 400,
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    background: '#EDEDED',
  },
  body: {
    background: '#EDEDED',
  },
  secondText: {
    paddingTop: 30,
    fontSize: '30px',
  },
  cardActions: {
    position: 'absolute',
    bottom: 0,
  },
  menu: {
    background: '#D1DFEA',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px 25px 10px 0px',
  },
  button: {
    marginLeft: '5px',
  }
});

const tileData = [
  {
    img: 'https://medias.timeout.co.il/www/uploads/2016/05/DSC3957_t-1140x641.jpg',
    title: 'מספרת ויטוריו',
    description: 'האגנדה האסתטית של הספר הוותיק ויטוריו דוד נשמעת הגיונית על פני השטח, אבל בוודאי תבהיל את מי שרגיל למספרה שגרתית. ',
    tag: tags.BEAUTY,
    tel: '0546336950',
    url: 'https://www.facebook.com/vittorio.david',
  },
  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/שאפה_4_p_wo_500_367.jpg',
    title: 'מספרת שאפה',
    description: 'אין כמו יפו בלילות, אין כמו יפו בימים, אין כמו יפו במספרות.',
    tag: tags.BEAUTY,
    tel: '03-5181573',
    url : 'https://www.facebook.com/%D7%A9%D7%90%D7%A4%D7%94-%D7%9E%D7%A1%D7%A4%D7%A8%D7%94-189925317820106/',
  },
  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/מישל_5_P_wo_500_367.jpg',
    title: 'מספרת מישל מרסייה',
    description: 'יש לשם שלו ניחוח בינלאומי, וכל מה שמזכיר לנו את חו"ל בא עם זרימה. בגיל 23 מרסייה פתח את המספרה הראשונה שלו ברחוב דיזינגוף ועם השנים הפך לשם דבר בישראל בתחום עיצוב השיער',
    tag: tags.BEAUTY,
    tel: '03-604-8135',
    url: 'http://www.michelmercier.co.il/he/home/a/main/',
  },
  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/רפי_חובב_7_p_wo_500_367.jpg',
    title: 'מספרת רפי חובב',
    description: 'חובב מטפל כבר שנים במיטב מחלפותיהן של נשות ישראל אך שלל התספורות שרקח עבור נינט (בעידן טרום הקרחת) שירבבו את שמו גם אל מדורי הרכילות.',
    tag: tags.BEAUTY,
    tel: '03-522-5555',
    url : 'https://www.facebook.com/%D7%9E%D7%A1%D7%A4%D7%A8%D7%AA-%D7%97%D7%95%D7%91%D7%91-Hovav-Hairdesign-123483217662970/',
  },
    {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/שבזי_6_P_wo_500_367.jpg',
    title: 'מספרת רואי דניאל',
    description: 'איזור נווה צדק מוכר בזכות הבוטיקים הקטנים שמושכים אליהם כמו מגנט תיירות וגם מקומיות, אבל אם אתם כבר שם אפשר לקפוץ לריענון פריזורה אצל רואי דניאל. ',
    tag: tags.BEAUTY,
  },
  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2014/10/sizes/miki-buganim-p_wo_500_333.jpg',
    title: 'מספרת מיקי בוגנים',
    description: 'האיש והבלונד. מעצב השיער שגלית גוטמן לא זזה בלעדיו ושאילנית לוי שומרת בחיוג המהיר. ',
    tag: tags.BEAUTY,
  },
  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/מרמורק_17_P_wo_500_367.jpg',
    title: 'מספרת עושר ויגאל במרמורק',
    description: 'איכשהו יצא שרחוב מרמורק הפיצפון מפוצץ במספרות – יש את "סלון נינט" בפינה עם יהודה הלוי, יש את דודי השכן של הפיקוק ויש גם את המספרה של עושר שתביא לכם את האושר, כך לפי השמועה',
    tag: tags.BEAUTY,
  },

  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/גזוז_7_P_wo_500_367.jpg',
    title: 'מספרת גזוז במסריק',
    description: 'הספר עוזי בטיש מתפעל את המספרה שלו במסריק כבר שני עשורים ומאחוריו רקורד של 30 שנה בתחום הספרות. ',
    tag: tags.BEAUTY,
  },
  {
    img: 'https://medias.timeout.co.il/www/uploads/2016/04/030-1_p.jpg',
    title: 'מספרת הברבריה',
    description: 'בעידן שבו גברים מתעקשים להיראות כחוטבי עצים, מספרות זקנים הן שירות נצרך. צריך מישהו שיודע לגזום את שיח הפנים הזה ולעצב אותו כך שיזכיר יותר את המינגווי ופחות את גואל רצון.',
    tag: tags.BEAUTY,
  },
  {
    img: 'https://timeoutil-static.s3.eu-central-1.amazonaws.com/media/2017/03/sizes/ברבר_8_p_wo_500_367.jpg',
    title: 'מספרת ברבר שופ',
    description: 'יש גברים צפונים בקהל? מצוין, כי גם לכם יש מקום בו תוכלו לבקש להתספר, להתגלח, ולבדוק שהתסרוקת החדשה מתאימה לעניבת הסקיני שלכם.',
    tag: tags.BEAUTY,
  },

  {
    img: 'https://commondatastorage.googleapis.com/easy/images/UserThumbs/10050460_1559019391784.jpg',
    title: 'סיטי מרקט',
    description: '  סופר שכונתי, אחד העם 29',
    tag: tags.GROCERY,
  },
  {
    img: 'https://commondatastorage.googleapis.com/easy/images/UserPics/25982549_1562658805579.jpg',
    title: 'מספרת אייל',
    description: 'מספרה לעיצוב שיער ברמה גבוהה, תספורות ערב, תספורות לכלות, מספרה לגברים, נשים וילדים',
    tag: tags.BEAUTY,
  },
  {
    img: 'https://www.super-market.co.il/images//uploaded/1508305172DSC00411.jpg',
    title: 'סופר נווה יהושע',
    description: ' סופר שכונתי, ארנון 29 תלא אביב',
    tag: tags.GROCERY,
  },
  {
    img: 'https://d25t2285lxl5rf.cloudfront.net/images/shops/25606.jpg',
    title: 'גרציאני',
    description: 'בית קפה, יהודה הלוי 123',
    tag: tags.FOOD,
  },
];


export default function MediaCard() {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (tag) => {
    setFilter(tag.name)
    handleClose()
  };

  const call = num => {
    window.location.href="tel://"+num;
  }
  const navigate = url => {
    window.location.href=url;
  }

  console.log("in homiez", filter, tileData[0], tileData[0].tag == filter);
  const menu = (
    <div className={classes.menu}>
      <Button onClick={handleClick} variant="contained">
        סנן
        <FilterListIcon className={classes.button}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {tagsArray.map(tag => (
          <MenuItem onClick={() => handleSelect(tag)}>{tag.label}</MenuItem>
        ))}
      </Menu>
    </div>
  )
  return (
    <>
    <div className={classes.cover}>
      <div className={classes.coverText}>
        <div className={classes.primaryTest}>
        המקומות האהובים שלך
        <br/>  זקוקים לך עכשיו יותר מתמיד
        </div>
        <div className={classes.secondText}>
        כנסו לעמוד העסק בשביל לראות כיצד ניתן לתמוך
        </div>
      </div>
      <div className={classes.coverPicContainer}>
        <img src='/pandora.svg' alt={'homiez'} className={classes.coverPic}/> 
      </div>
    </div>
    <div className={classes.body}>
      {menu}
      <div className={classes.grid}>
          {tileData.filter(tile => filter === "" || tile.tag === filter)
          .map(tile => (
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={tile.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {tile.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {tile.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => call(tile.tel)}>
                    Call
                </Button>
                <Button size="small" color="primary" onClick={() => navigate(tile.url)}>
                    Visite Website
                </Button>
              </CardActions>
            </Card>))}
      </div>
    </div>

    </>
  );
}
