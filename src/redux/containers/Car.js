import React, { Component } from "react";
import {connect } from "react-redux";
import {carDetails} from "../actions";
import {clearDetails} from "../actions";
import {bindActionCreators} from 'redux';


class Car extends Component {
  componentWillMount() {
    this.props.carDetails(this.props.match.params.id);
  }


  componentWillUnmount() {
    this.props.clearDetails();
  }
 renderDetail = (details) => {
 
    if(details){
      return(
        details.map((item) => {
          return (
            <div className="car_detail" key={item.id}>
              <img src={`/images/${item.image}`} alt="a"/>
              <h3>{item.model}</h3>
              <h4>{item.brand}</h4>
              <p className="content">
                {item.description}
              </p>
            </div>
          )
        })
      )
     
    }
  

}
  
  render() {
    return (
      <div>
        {this.renderDetail(this.props.cars.details)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cars: state.cars
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {carDetails , clearDetails} , dispatch
  )
}
export default connect(mapStateToProps ,mapDispatchToProps)(Car);