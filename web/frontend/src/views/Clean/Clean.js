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
  
  const tableName = "온도 습도 미세먼지 데이터 수신테스트";
  const [dataList, setDataList] = useState([0]);
  const [result, setResult] = useState([]);
  const [temperature, setTemperature] = useState(0);
  const [humid, setHumid] = useState(0);
  const [pm1, setPm1] = useState(0);
  const [pm10, setPm10] = useState(0);
  const [pm25, setPm25] = useState(0);
  const [date, setDate] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setTimeout(() => {
          axios.get('http://211.229.91.230:3000/api/r2d2')
               .then((res) => {
                 let result = JSON.parse(JSON.stringify(res));
                 setDataList(result.data);
              })
              .catch(err => console.log(err));
    }, 6000)
}, [dataList]);

useEffect(() => {     
  setTimeout(() => {
    setIdx(idx+1);
  }, 1100);

    setTimeout(() => {
          setTemperature(dataList[idx].r2d2_temperature);
          setHumid(dataList[idx].r2d2_humidity);
          setPm1(dataList[idx].r2d2_particulate_matter1);
          setPm25(dataList[idx].r2d2_particulate_matter2);
          setPm10(dataList[idx].r2d2_particulate_matter3);
          setDate(dataList[idx].insert_date);
        setResult(prev => [
          ...prev,
          [temperature,
          humid,
          pm1,
          pm25,
          pm10,
          date
          ]
          
        ])
    }, 5000) 
  
}, [dataList, temperature, humid, pm1, pm25, pm10, date, idx]);

  //render(){
    return (
      <div className="content-wrap">
        <div className="clean-table-wrap">
          <h2><FontAwesomeIcon icon={faList} />{tableName}</h2>
        <Table
             tableHeaderColor="primary"
             tableHead={["온도", "습도", "초미세먼지(pm1.0)", "초미세먼지(pm2.5)", "미세먼지(pm10)", "수신날짜"]}
             tableData={result}
           />
        </div>
      </div>
    )
  //} 
}

export default UserProfile;