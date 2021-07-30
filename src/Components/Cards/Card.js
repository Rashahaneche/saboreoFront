import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css'

const Cards= (props) => {

  return (
    <Card className='card-class'>
      <CardActionArea>
        <CardMedia 
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
          title={props.title}
          description={props.description}
          _id={props._id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h2>{props.title}</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>{props.description}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

  
   

export default Cards;
