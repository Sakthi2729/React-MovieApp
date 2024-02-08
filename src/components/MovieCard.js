import { useState } from "react";
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function MovieCard(props) {
  const ratingstyle = {
    color: props.rating >= 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(false);
  return (
    <Card className="movie-container">
        <img className="movie-poster" src={props.poster} alt="" />
        <CardContent>
        <div className="movie-spec">
          <h2 className="movie-name">
            {props.name}
            <IconButton aria-label="delete"  color="primary" onClick={() => setShow(!show)}>
            {show ? <ExpandLessIcon fontSize="medium"/>: <ExpandMoreIcon fontSize="medium"/>}
            </IconButton>
            <IconButton aria-label="delete"  color="primary">
            <InfoIcon fontSize="small"/>
            </IconButton>
          </h2>
          <h3 style={ratingstyle} className="movie-rating">⭐{props.rating}</h3>
        </div>
        
      </CardContent>
      
      <button onClick={() => setShow(!show)}>
        Toggle Description-{show + ""}
      </button>
      {show ? <p className="movie-summary">{props.summary}</p> : null}
      <CardActions>
      <Counter />
      </CardActions>
      
    </Card>
  );
}
