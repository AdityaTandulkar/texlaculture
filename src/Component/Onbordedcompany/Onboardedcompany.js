import { Typography,Input, FormControl } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Search } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import Companydata from "../Companydata/Companydata";

const useStyles = makeStyles((theme) => ({
  onlinecontainer: {
    display: "flex",
    flexDirection: "column",
  },
  Onlinetext: {
    marginLeft: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    paddingLeft: "10px",
  },
  rotatedIcon: {
    transform: "rotate(90deg)",
    color: "#637381",
  },
  companydatacontainer: {
    borderTop: "2px solid #e5e8eb",
    borderBottom: "2px solid #e5e8eb",
    paddingTop: "10px",
  },
  insideborder: {
    display: "flex",
    justifyContent: "space-between",
    width:"140px",
  },
  serviceType: {
    marginLeft: "5px",
    border: "2px solid #ccd1d8",
    borderRadius: "10px",
    textAlign: "left",
    height:"50px"
  },
  servicetext: {
    color: "#ccd1d8",
    fontSize: "14px",
  },
  Alltext: {
    display: "flex",
  },
  searchcontainer: {
    marginTop:"5px",
    marginLeft: "10px",
    border: "2px solid #ccd1d8",
    borderRadius: "10px",
  },
  searchInput: {
    width: "400px",
    padding: "10px",
    height:"10px"
  },
  searchLabel: {
    fontSize: "14px",
  },
  searchicon: {
    marginLeft: "10px",
    cursor: "pointer",
  },
}));

export default function OnboardedCompany() {
  const classes = useStyles();
  return (
    <div className={classes.onlinecontainer}>
      <Typography className={classes.Onlinetext} textAlign={"left"}>Online Companies</Typography>
      <div className={classes.companydatacontainer}>
        <div className={classes.Alltext}>
          <fieldset className={classes.serviceType} textAlign={"left"}>
            <legend className={classes.servicetext}>Service type</legend>
            <div className={classes.insideborder}>
              <Typography
                variant="h6"
                textAlign={"left"}
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                All
              </Typography>
              <ChevronRightIcon className={classes.rotatedIcon} />
            </div>
          </fieldset>
          <div className={classes.searchcontainer}>
            <FormControl className={classes.searchInput}>
              <Input
                placeholder="Search client or invoice number..."
                startAdornment={
                  <InputAdornment position="start">
                    <Search className={classes.searchIcon} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
        <Companydata/>
      </div>
    </div>
  );
}