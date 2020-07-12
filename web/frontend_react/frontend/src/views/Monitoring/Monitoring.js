import React, { Component } from 'react';
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
// uuid
import { v4 as uuidv4 } from 'uuid';
// faker
import faker from 'faker'
// css
import 'assets/css/monitoring.css'
// images
import r2d2Image from "assets/img/r2d2.png";

class Monitoring extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {
        tableName : 'R2D2 구동 현황'
      },
      r2d2: [
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
        {id: faker.random.uuid().substring(0,16), clean: faker.random.number(50), lastAt: faker.date.past() , ip: faker.internet.ip(), isWorking: faker.random.boolean()},
      ]
    }
  }
  componentDidMount(){
    console.log(this.state);
  }
  render() {
    return (
      <div className="content-wrap">
        <div className="monitor-wrap">
        <h2>{this.state.info.tableName}</h2>
        <ul className="r2d2-list">
            {
              this.state.r2d2.map((value,index)=>{
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
                 <button>관리</button>
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
}

export default Monitoring;