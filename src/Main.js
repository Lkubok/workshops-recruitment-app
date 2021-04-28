import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  skeleton: {
    borderWidth: 1,
    width: 300,
    borderColor: "red",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.skeleton}>
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
    </div>
  );
}
