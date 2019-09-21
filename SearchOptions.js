import React from 'react';
import {render} from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {connect} from "react-redux";
import ViewData from "./viewdata";
import axios from "axios";

class PersonList extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.props.searchUpdated(persons);
      })
  }
  render() {
    return (
      <div>
      <ViewData/>
     </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    searchUpdated: (details) => dispatch({ type: 'LOGINDETAILS', searchvalue: details }),
  }

}
function mapStateToProps(state) {
  console.log(state);
  return {
    searchValueStore: state.details,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);