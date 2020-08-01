import React, { useState, useEffect, useMemo } from 'react';
// font-awesome
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faList } from '@fortawesome/free-solid-svg-icons'
// uuid
//import { v4 as uuidv4 } from 'uuid';
// faker
import faker from 'faker'
// css
import '../../assets/css/monitoring.css'
// images
import r2d2Image from "../../assets/img/r2d2.png";
import axios from 'axios';

function Monitoring() {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     info: {
  //       tableName : 'R2D2 구동 현황'
  //     },
  //     r2d2: [
  //       {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: true},
  //       {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: false},
  //       // {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: false},
  //       // {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: false},
  //     ]
  //   }
  // }
  // componentDidMount(){
  //   console.log(this.state);
  // }
  const [id, setId] = useState('');
  
  const info = { tableName: 'R2D2 구동 현황'}
  const r2d2 = [
    {id: id, isWorking: true},
    {id: 'not detected', isWorking: false},
  ]
  
  const [dataList, setDataList] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [humid, setHumid] = useState(0);
  const [pm1, setPm1] = useState(0);
  const [pm10, setPm10] = useState(0);
  const [pm25, setPm25] = useState(0);
  const statusName = ['온도', '습도', 'pm1.0', 'pm2.5', 'pm10'];

  const getStatus = useEffect(() => { 
    setTimeout(() => {
      axios.get('http://211.229.91.230:3000/api/r2d2')
            .then(res => {
              let parseData = JSON.parse(JSON.stringify(res.data[0]));  
              setId(parseData.r2d2_id);
              setTemperature(parseData.r2d2_temperature);
              setHumid(parseData.r2d2_humidity);
              setPm1(parseData.r2d2_particulate_matter1);
              setPm10(parseData.r2d2_particulate_matter2);
              setPm25(parseData.r2d2_particulate_matter3);               
              setDataList(prev => 
                [temperature, humid, pm1, pm10, pm25],
              )
            })
  }, 1000);
  },[dataList]);

    return (
      <div className="content-wrap">
        <div className="monitor-wrap">
        <h2>{info.tableName}</h2>
        <ul className="r2d2-list">
            {
              r2d2.map((value,index)=>{
              return (
              <li key={index} className={value.isWorking? 'on' : 'off'}>
                <div className="image-container">
                  <img src={r2d2Image} alt="r2d2" />
                </div>
                <div className="info-container">
                  <p>
                    <span>아이디</span>
                    <span>{value.id}</span>
                  </p>
                  <p>
                    <span>작동상태</span>
                    <span className={value.isWorking?"on":"off"}>{value.isWorking ? "working" : "terminated"}</span>
                  </p>
                  <div className="r2d2-status">
                    <div className="r2d2-status-box">
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">
                      {statusName.map(status => <div>{status}</div>)}
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(status => value.isWorking ?
                         <div>{status}</div> : <div>0</div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                    <div className="r2d2-status-data">                
                      {dataList.map(() =>
                         <div></div>)}  
                    </div>
                  
                  </div>
                 {/* <button>관리</button> */}
                </div>
                </div>
              </li>
              )
              })
            }
        </ul>
        </div>
      
      </div>
    );
  }


export default React.memo(Monitoring);