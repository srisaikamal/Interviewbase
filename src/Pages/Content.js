import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Cards from "../Components/Cards";
import Grid from "@material-ui/core/Grid";
import MUITable from "../Components/MUITable";

const styles = (theme) => ({});

const data = [
  {
    id: "1",
    name: "interviews",
    icon: "fas fa-list-alt customicon",
    status: "interviewed",
    value: "30",
    color: "#1abc9c",
  },
  {
    id: "2",
    name: "Scheduled",
    icon: "fas fa-calendar-alt customicon",
    status: "Unfinished",
    value: "60",
    color: "#e67e22",
  },
  {
    id: "3",
    name: "Hired",
    icon: "fas fa-check-square customicon",
    status: "Today",
    value: "25",
    color: "#27ae60",
  },
  {
    id: "4",
    name: "denied",
    icon: "fas fa-times-circle customicon",
    status: "Denied",
    value: "60",
    color: "#e74c3c",
  },
];

function Content(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((res) => (
          <Grid item xs={12} md={3}>
            <Cards
              key={res.id}
              name={res.name}
              icon={res.icon}
              status={res.status}
              value={res.value}
              color={res.color}
            />
          </Grid>
        ))}
      </Grid>
      <MUITable />
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
