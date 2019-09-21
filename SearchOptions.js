import React from 'react';
import {render} from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
  const data=this.state.persons;
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