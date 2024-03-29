import React from 'react';
import {render} from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {connect} from "react-redux";

class ViewData extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
  const data = this.props.searchValueStore;
  const columns = [
  {
    Header:'id',
    accessor:'id'
  },
  {
    Header:'name',
    accessor:'name'
  },
  {
    Header:'username',
    accessor:'username'
  },
  {
    Header:'email',
    accessor:'email'
  },
   {
    Header:'street',
    accessor:'address.street'
  },
  {
    Header:'city',
    accessor:'address.city'
  },
  {
    Header:'zipcode',
    accessor:'address.zipcode'
  },
]
    return (
      <div>
     <ReactTable
     data={data}
     columns={columns}
     defaultPageSize={5}
     pageSizeOptions={[5,10]}
     />
     </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
  searchValueStore : state.details,
 };
}


export default connect(mapStateToProps)(ViewData);