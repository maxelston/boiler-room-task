import React from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// css styles
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  info: {
    marginBottom: `0.35em`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  }
});

class BoilerRoomSets extends React.Component {
  constructor(){
    super();
    this.state = {
      sets: []
    };

    this.getSets = this.getSets.bind(this);
  }

  componentWillMount() {
    this.getSets();
  }

  // fetch set data from node server
  getSets() {
    fetch('http://localhost:4000/get_boiler_room_sets')
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
      // if successful set assign them to the sets constructor
      this.setState({sets: data.sets});
    })
    .catch(error => {
      console.log(error);
    });
  }

  // open youtube url to boiler room set
  viewOnYouTube(url){
    window.open(url);
  }

  // material io used for list design
  // loop through the sets list and assign all the info to a card
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
        <main>
          <div className={classNames(this.props.classes.layout, this.props.classes.cardGrid)}>
          <Grid container spacing={40}>
            {this.state.sets.map((set, index)=> {
              return <Grid item key={index} sm={6} md={4} lg={4}>
                <Card className={this.props.classes.card}>
                  <CardMedia
                    className={this.props.classes.cardMedia}
                    image= {set.img}
                    title="Image title"
                  />
                    <CardContent className={this.props.classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h5">
                      {set.title}
                    </Typography>
                    <Typography className={classNames(this.props.classes.info)} variant="subtitle1" component="h4">
                    {set.artist} | {set.location}
                    </Typography>
                    <Typography>
                      {set.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => { this.viewOnYouTube(set.url) }}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              })}
          </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BoilerRoomSets);