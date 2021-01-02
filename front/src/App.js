import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from './components/AppBar';
import Dialog from './components/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor:'#f1f1f1'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'blue'
  },
  fullWidth: {
    padding: "0 !important"
  },
  mt: {
    marginTop: 20
  },
  accordionText: {
    color: 'black'
  },
  icons: {
    color: 'blue'
  }
}));

function App({texts, dispatch}) {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);  
  
  const Accord = texts.map((tx, ix) =>
    <Accordion key={ix}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.icons} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{tx.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.accordionText}>
          {tx.text}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
  const getTexts = async () => {
    try {
      const _txts = await (await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=2')).json()
      _txts.forEach((element) => {
        var title = element.split(' ').slice(0,3).join(' ');
        dispatch({ type: 'ADD_TEXT', payload: { title: title, text: element } })
      });
      setLoading(false);
    } catch (err) {
      alert('error fetching data')
    }
  };
  
  useEffect( () => {    
     getTexts();
  }, []);

  return (
    <div className={classes.root}>
      
      <Container maxWidth="xl" disableGutters>
        <AppBar />
        <Grid container>
          <Grid item xs={12} className={classes.mt}>
            <Typography align="center" variant="h6" gutterBottom>
              First two items are loaded by an API. More can be added using the button "ADD TEXT".
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.mt} container>
          <Grid item xs={3} />
          <Grid item xs={6} align={loading ? "center": "left"}>
            {
              loading ? <CircularProgress /> : Accord
            }
            <Dialog />
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Container>
    </div>
  );
}


const mapStateToProps = state => {
  return { texts: state.texts }
}
const mapDispatchToProps = dispatch => {
  return {
      dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)