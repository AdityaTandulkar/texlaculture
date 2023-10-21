import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  keytext: {
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "14px ",
  },
  activebar: {
    border:"1px solid #f4f6f8",
    borderRadius: "10px",
    height: "70px",
    marginLeft: "10px",
    paddingRight: "10px",
  },
  percentageindicator: {
    display: "flex",
    padding: "10px",
  },
  bluecircle: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#1939b7",
    marginLeft: "10px",
  },
  greencircle: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    marginLeft: "10px",
    backgroundColor: "#36b37e",
  },
  bar: {
    display: "flex",
  },
  blueindicator: {
    width: "200px",
    height: "15px",
    borderRadius: "10px",
    backgroundColor: "#1939b7",
    marginLeft: "15px",
  },
  greenindicator: {
    width: "60px",
    height: "15px",
    borderRadius: "10px",
    backgroundColor: "#36b37e",
    marginLeft: "10px",
  },
}));

export default function Activeuser() {
  const classes = useStyles();
  return (
    <div className={classes.activestatus}>
      <Typography
        variant="h6"
        textAlign={"left"}
        style={{ marginLeft: "1px" }}
        className={classes.keytext}
      >
        Active User Base
      </Typography>
      <div className={classes.activebar}>
        <div className={classes.percentageindicator}>
          <div className={classes.bluecircle}></div>
          <Typography
            variant="h6"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            89% App User
          </Typography>
          <div className={classes.greencircle}></div>
          <Typography
            variant="h6"
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            11% App User
          </Typography>
        </div>
        <div className={classes.bar}>
          <div className={classes.blueindicator}></div>
          <div className={classes.greenindicator}></div>
        </div>
      </div>
    </div>
  );
}