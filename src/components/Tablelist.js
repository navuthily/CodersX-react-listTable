import React, { Component } from 'react';

class Tablelist extends Component {
  render() {


    return (
   <>
      <tr>
       <td>{this.props.company}</td>
       <td>{this.props.contact}</td>
       <td>{this.props.country}</td>
      </tr>  

   </>
    );
  }
}

export default Tablelist;