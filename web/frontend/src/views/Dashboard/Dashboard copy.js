import React, { useEffect, useState, memo } from "react";
import axios from 'axios';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
//import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
//import Accessibility from "@material-ui/icons/Accessibility";
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.js";
//components/Grid/GridItem.js
import GridContainer from "../../components/Grid/GridContainer.js";
// import Table from "../../components/Table/Table.js";
// import Tasks from "../../components/Tasks/Tasks.js";
// import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
// import Danger from "../../components/Typography/Danger.js";
import Image from 'react-bootstrap/Image';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// import { bugs, website, server } from "../../variables/general.js";
import r2d2Trim from "./r2d2_trim.png";
import {
  dailySalesChart,
  //emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Dashboard = memo(() => {
  const classes = useStyles();
  const [dataList, setDataList] = useState([{}]);
  const [temperArr, setTemperArr] = useState([]);
  const [humidArr, setHumidArr] = useState([]);
  const [pm1Arr, setPm1Arr] = useState([]);
  const [pm10Arr, setPm10Arr] = useState([]);
  const [pm25Arr, setPm25Arr] = useState([]);
  //const [id, setId] = useState('');
  const [temperature, setTemperature] = useState(-50);
  const [humid, setHumid] = useState(1);
  const [pm1, setPm1] = useState(-50);
  const [pm10, setPm10] = useState(-50);
  const [pm25, setPm25] = useState(-50);
  const [battery, setBattery] = useState(0);
  const [idx, setIdx] = useState(0);
  //const statusName = ['온도', '습도', 'pm1.0', 'pm2.5', 'pm10'];
  
  useEffect(() => {
      setTimeout(() => {
        console.log('requres!!')
            axios.get('http://211.229.91.230:3000/api/r2d2')
                 .then((res) => {
                   let result = JSON.parse(JSON.stringify(res));
                   setDataList(result.data);
                })
                .catch(err => console.log(err));
      }, 3000)
  }, [dataList]);
  
  useEffect(() => {     
  
      setTimeout(() => {
            setBattery(dataList[idx].r2d2_battery);
            setTemperature(dataList[idx].r2d2_temperature);
            setHumid(dataList[idx].r2d2_humidity);
            setPm1(dataList[idx].r2d2_particulate_matter1);
            setPm25(dataList[idx].r2d2_particulate_matter2);
            setPm10(dataList[idx].r2d2_particulate_matter3);
           
          setTemperArr(prev => [
            ...prev,
            temperature
          ])
          setHumidArr(prev => [
            ...prev,
            humid
          ])
          setPm1Arr(prev => 
            [
            ...prev,
            pm1
          ])
          setPm25Arr(prev => [
            ...prev,
            pm25
          ])
          setPm10Arr(prev => [
            ...prev,
            pm10
          ])
      }, 1000) 
    
    }, [dataList]);

  const tempatureList = {
    labels: [],
    series: [
      temperArr
    ]
  };

  const humidList = {
    labels: [],
    series: [
      humidArr
    ]
    ,    seriesBarDistance: 12,
  };

  const pm1List = {
    labels: [],
    series: [
      pm1Arr
    ]
  };

  const pm10List = {
    labels: [],
    series: [
      pm10Arr
    ]
  };

  const pm25List = {
    labels: [],
    series: [
      pm25Arr
    ]
  };

  const temperOptions = {
    high: 80,
    low: 0,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    },
  };

  const humidOptions = {
    high: 90,
    low: 0,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    },

  };
  

  const dustOptions = {
    high: 30,
    low: 0,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    },
  };
  

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>{battery}%</p>
              <h3 className={classes.cardTitle}>R2D2</h3>
            </CardHeader>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter> */}
            <CardFooter>
              <Image src={r2d2Trim} alt="r2d2" rounded/>
            </CardFooter>
          </Card>
        </GridItem>
     
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={tempatureList}
                type="Line"
                options={temperOptions}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Temperature Degree</h4>
              <p className={classes.cardCategory}>trace surrounding temperature R2D2 gets.</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> update every 10 sec
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={humidList}
                type="Bar"
                options={humidOptions}
                
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Humidity Degree</h4>
              <p className={classes.cardCategory}>trace the value of humidity sensor</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> update every 10 sec
              </div>
            </CardFooter>
          </Card>
        </GridItem>
  
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={pm1List}
                type="Line"
                options={dustOptions}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Ultrafine dust (pm1.0)</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                </span>{" "}
                trace status of ultrafine dust (pm1.0) around the air
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> update every 10 sec
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={pm25List}
                type="Line"
                options={dustOptions}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Ultrafine dust (pm2.5)</h4>
              <p className={classes.cardCategory}>  trace status of ultrafine dust (pm2.5) around the air</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> update every 10 sec
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={pm10List}
                type="Line"
                options={dustOptions}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Fine Dust (pm10)</h4>
              <p className={classes.cardCategory}>  trace status of fine dust (pm10) around the air</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> update every 10 sec
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
         {/*
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
})

export default Dashboard;