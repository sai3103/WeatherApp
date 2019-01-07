import React from "react";

class Form extends React.Component{
    render(){
        return (
<form className="col-6 mx-auto mt-5" onSubmit={this.props.onclick}>
  <div className="form-group ">
    <label for="exampleInputEmail1">City</label>
    <input type="text" className="form-control" placeholder="Enter City" name="city" />
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Country</label>
    <input type="text" className="form-control" placeholder="Enter Country" name="country" />
  </div>
  <button type="submit" className="btn btn-primary">Search</button>
</form>
        );
    }
}

export default Form;