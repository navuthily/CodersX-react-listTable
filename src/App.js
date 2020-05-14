import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Tablelist from './components/Tablelist';

const tablelist = [
  {
    id: 1,
    company: "Home",
    contact: "fa-home",
    country:"Vietnam"
  },
  {
    id: 2,
    company: "Home",
    contact: "fa-home",
    country:"Vietnam"
  },
  {
    id: 3,
    company: "Home",
    contact: "fa-home",
    country:"Vietnam"
  },
  {
    id: 4,
    company: "Home",
    contact: "fa-home",
    country:"Vietnam"
  },
  {
    id: 5,
    company: "Home",
    contact: "fa-home",
    country:"Vietnam"
  },
];
class App extends Component {
  showTableList = () => {
    let result = null;

    result = tablelist.map((item, index) => {
      return <Tablelist key={item.id} company={item.company} contact={item.contact} country={item.country} />;
    });
    return result;
  };
  render() {
    return (
    <div>
      <table>
       <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
       </tr>
       {this.showTableList()}
       
      </table>  
    </div>
     
    );
  }
}

export default App;