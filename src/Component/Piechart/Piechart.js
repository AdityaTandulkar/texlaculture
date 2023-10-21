import React from "react";
import { Typography, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PieChart, Pie, Cell } from "recharts";

const useStyles = makeStyles({
  piecharcontainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    position: "relative",
  },
  Regionaltext: {
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "10px",
  },
  graphcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border:"1px solid #f4f6f8",
    borderRadius: "10px",
    paddingLeft: "40px",
    paddingRight: "50px",
    paddingTop: "20px",
    paddingBottom: "25px",
  },
  legendContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    paddingLeft: "10px",
  },
  legendItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    marginLeft: "10px",
  },
  legendColor: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
  categoryName: {
    fontSize: "14px",
    fontWeight:"bold",
    marginRight:"10px"
  },
  chartContainer: {
    width: "100%",
    position: "relative",
  },
  eastdetails: {
    position: "absolute",
    top: "120px",
    left: "350px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  northdetails: {
    position: "absolute",
    top: "160px",
    right: "360px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  southdeatils: {
    position: "absolute",
    top: "340px",
    right: "260px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  westdeatils: {
    position: "absolute",
    top: "250px",
    right: "30px",
    border: "2px solid #cbd1d7",
    padding: "10px",
    borderRadius: "10px",
  },
  arrowcontainer: {
    display: "flex",
  },
  arrowicon: {
    width: "20px",
    height: "15px",
  },
});

export default function Piechart (){
  const data = [
    { name: "East", value: 30, color: "#ffab00" },
    { name: "North", value: 35, color: "#36b37e" },
    { name: "South", value: 25, color: "#ff5630" },
    { name: "West", value: 10, color: "#3366ff" },
  ];
  const classes = useStyles();

  return (
    <div className={classes.piecharcontainer}>
      <Typography className={classes.Regionaltext} textAlign={"left"}>
        Regional Metrics
      </Typography>
      <div className={classes.graphcontainer}>
        <div className={classes.legendContainer}>
          {data.map((item, index) => (
            <div key={index} className={classes.legendItem}>
              <Typography className={classes.categoryName}>
                {item.name}
              </Typography>
              <div
                className={classes.legendColor}
                style={{ backgroundColor: item.color }}
              ></div>
            </div>
          ))}
        </div>
        <div className={classes.chartContainer}>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx={200}
              cy={130}
              innerRadius={45}
              outerRadius={90}
              fill="#F4F6F8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className={classes.piechartdestailscontainer}>
          <div className={classes.eastdetails}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              6 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("../../Assets/Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹250000
              </Typography>
            </div>
          </div>
          <div className={classes.northdetails}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              20 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("../../Assets/Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹500000
              </Typography>
            </div>
          </div>
          <div className={classes.southdeatils}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              5 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("../../Assets/Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹100000
              </Typography>
            </div>
          </div>
          <div className={classes.westdeatils}>
            <Typography
              variant="h6"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              1 clients
            </Typography>
            <div className={classes.arrowcontainer}>
              <CardMedia
                className={classes.arrowicon}
                image={require("../../Assets/Arrow.png")}
                title="Image title"
              />
              <Typography
                style={{
                  color: "#091a7a",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
                variant="h6"
              >
                ₹20000
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};