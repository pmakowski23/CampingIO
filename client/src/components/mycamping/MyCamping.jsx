import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "5rem auto",
  },
  header: {
    textAlign: "center",
  },
}));

const MyCamping = ({ camping }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <h1 className={classes.header}>{camping.name}</h1>
      <h3 className={classes.header}>Address: {camping.address}</h3>
      <h3 className={classes.header}>Camping spot limit: {camping.campingSpotLimit}</h3>
      <h3 className={classes.header}>Type: {camping.type}</h3>
    </Container>
  );
};

export default MyCamping;
