import React from "react";
import ReactDOM from 'react-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Table from "components/Table/Table";
// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

// css
import 'assets/css/clean.css'

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
};

const useStyles = makeStyles(styles);

class  UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: {
        tableName : '정화 작업 리스트'
      },
      dataList: [
        ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
        ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
        ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
        ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"],
        ["r2-zxc-1","제1 병동", "가동", "2020-07-12 12:11:53"]          
      ]
    }
  }
  componentDidMount(){
    console.log(this.props,'its props');
  }
  render(){
    return (
      <div className="content-wrap">
        <div className="clean-table-wrap">
          <h2><FontAwesomeIcon icon={faList} />{this.state.info.tableName}</h2>
        <Table
             tableHeaderColor="primary"
             tableHead={["R2D2 ID", "구역", "작업상태", "일시"]}
             tableData={this.state.dataList}
           />
        </div>
      
      </div>
    )
  }
 
}


export default UserProfile;