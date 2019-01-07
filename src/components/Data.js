import React from "react";

class Data extends React.Component{
    render(){
        return (
<div>
<table className="table col-6 mx-auto mt-5">

  {this.props.city && this.props.country &&
  <tbody>
    <tr>
      <th scope="row">City</th>
      <td>{this.props.city}</td>
    </tr>
    <tr>
      <th scope="row">Country</th>
      <td>{this.props.country}</td>
    </tr>
    <tr>
      <th scope="row">Temperature</th>
      <td>{this.props.Temperature}</td>
    </tr>
    <tr>
      <th scope="row">Humidity</th>
      <td>{this.props.Humidity}</td>
    </tr>
  </tbody>}
  
</table>
{this.props.error && <h1 className="mx-auto col-6 error">{this.props.error}</h1>}
</div>

        );
    }
}

export default Data;