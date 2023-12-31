import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  keytext: {
    fontWeight: "bold",
    marginLeft: "10px",
    marginTop: "10px",
    fontSize: "14px",
  },
  keyvalues: {
    display: "flex",
    border: "1px solid #f4f6f8",
    borderRadius: "10px",
    paddingTop: "10px",
    height: "70px",
  },
  values: {
    marginLeft: "10px",
    borderLeft: "3px solid #2b49bd",
    height: "60px",
  },
  clientvalues: {
    marginLeft: "5px",
    borderLeft: "3px solid #006c9c",
    height: "60px",
  },
  revenuevalues: {
    marginLeft: "5px",
    borderLeft: "3px solid #006124",
    height: "60px",
  },
  statusvalues: {
    display: "flex",
    backgroundColor: "#F4F6F8",
    borderRadius: "10px",
    height: "60px",
    paddingTop: "10px",
    marginLeft: "10px",
  },
}));

export default function KeyPerformance() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" textAlign={"left"} className={classes.keytext}>
        Key Performance Indicator
      </Typography>
      <div className={classes.keyvalues}>
        <div className={classes.values}>
          <Typography
            variant="h6"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#454f5b",
            }}
          >
            Client Retention Rate
          </Typography>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#2b49bd",
            }}
          >
            55%
          </Typography>
        </div>
        <div className={classes.clientvalues}>
          <Typography
            variant="h6"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#454f5b",
            }}
          >
            Client Satisfaction
          </Typography>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#006c9c",
            }}
          >
            55%
          </Typography>
        </div>
        <div className={classes.revenuevalues}>
          <Typography
            variant="h6"
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#454f5b",
            }}
          >
            Revenue Generator
          </Typography>
          <Typography
            variant="h6"
            textAlign={"left"}
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#006124",
            }}
          >
            55%
          </Typography>
        </div>
      </div>
    </div>
  );
}
