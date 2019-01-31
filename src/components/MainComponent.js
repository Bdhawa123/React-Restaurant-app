import React, { Component } from 'react';
import Menu from './MenuComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { addComment,fetchDishes } from '../redux/ActionCreators';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import DishdetailComponent from './DishdetailComponent';
import About from './AboutComponent';


const mapStatetoProps = state=> {

    return {
      dishes:state.dishes,
      comments:state.comments,
      promotions:state.promotions,
      leaders:state.leaders
    } 
}

const mapDispatchToProps = (dispatch) =>({
  addComment:(dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes:() => {dispatch(fetchDishes())}
});



class MainComponent extends Component {
constructor(props){
  super(props);
 
}

componentDidMount(){
  this.props.fetchDishes();
}

onDishSelect(dishId){
    this.setState({ selectedDish:dishId});
}



  render() {

    const Homepage = () => {
      return(
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading ={this.props.dishes.isLoading}
          dishesErrMess = {this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match})=> {
      return(
        <DishdetailComponent dish = {this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
          dishesLoading ={this.props.dishes.isLoading}
          dishesErrMess = {this.props.dishes.errMess}
          comments = {this.props.comments.filter((comment)=> comment.dishId=== parseInt(match.params.dishId,10))}
          addComment = {this.props.addComment}/>

      );
    }
  

    return (
      <div>   
        <Header/>
        <Switch>
      
          <Route path ="/home" component={Homepage}/>
          <Route exact path="/menu" component ={()=><Menu dishes= {this.props.dishes}/>}/>
          <Route path = "/menu/:dishId" component = {DishWithId}/>
          <Route exact path='/contactus' component={Contact} />
          <Route exact path ='/aboutus' component= {()=><About leaders={this.props.leaders}/>}/>
          <Redirect to="/home"/>

        </Switch>

        <Footer/>
      </div>
    );    
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(MainComponent));
