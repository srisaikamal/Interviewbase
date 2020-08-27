import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Cards({ name, icon, status, value, color }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: "15px",
    },
    title: {
      textAlign: "center",
      textTransform: "uppercase",
      backgroundColor: color,
      color: "white",
    },
    cardContent: {
      textAlign: "center",
    },
    apps: {
      fontSize: "14px",
      color: color,
      width: "60%",
      padding: "7px",
      margin: "0 auto",
      marginTop: "10px",
      backgroundColor: `${color}90`,
      borderRadius: "10px",
      boxShadow: `0px 1px 5px 0px ${color}`,
      fontWeight: "bold",
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.title}>
          <Typography gutterBottom variant="h5" component="h2">
            {name} <i className={icon}></i>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h1">
          {status}
        </Typography>
        <p className={classes.apps}>{value}% Appliations</p>
      </CardContent>
    </Card>
  );
}
export default Cards;
