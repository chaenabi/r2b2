import React, {useState, useEffect} from "react";
import axios from 'axios';
// core components
import Table from "../../components/Table/Table";
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

// css
import '../../assets/css/clean.css'

function UserProfile() {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     info: {
  //       tableName : '온도 습도 미세먼지 데이터 수신테스트'
  //     },
  //     dataList: [
  //       ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
  //       ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
  //       ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
  //       ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
  //       ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"]          
  //     ]
  //   }
  // }
  // componentDidMount(){
  //   console.log(this.props,'its props');
  // }
  
  const tableName = "온도 습도 미세먼지 데이터 수신테스트";
  const [dataList, setDataList] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [humid, setHumid] = useState(0);
  const [pm10, setPm10] = useState(0);
  const [pm25, setPm25] = useState(0);
  

    const getData = 
      useEffect(() => { 
      setTimeout(() => {
         axios.get('http://localhost:5000/r2d2_module_data')
              .then(res => {
                let parseData = JSON.parse(JSON.stringify(res.data[0]));  
                setTemperature(parseData.DHT11_Temp);
                setHumid(parseData.DHT11_Humi);
                setPm10(parseData.PMS7003_PM10);
                setPm25(parseData.PMS7003_PM25);                
                setDataList(prev => [
                  ...prev,
                  [temperature, humid, pm10, pm25],
                ])
              })
    }, 5000);
  
  },[dataList]);
  //render(){
    return (
      {getData},
      <div className="content-wrap">
        <div className="clean-table-wrap">
          <h2><FontAwesomeIcon icon={faList} />{tableName}</h2>
        <Table
             tableHeaderColor="primary"
             tableHead={["온도", "습도", "미세먼지1", "미세먼지2"]}
             tableData={dataList}
           />
        </div>
      </div>
    )
  //} 
}

export default UserProfile;