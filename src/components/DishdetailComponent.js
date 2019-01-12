import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'; 
import { DISHES } from '../shared/dishes';


class DishdetailComponent extends Component
{  
    constructor(props )
    {
        super(props)
        {
            
        }
    }
    


  
    render(){
        const dish = this.props.dish;                                 
      if (dish!=null)
      {
          const comm = dish.comments.map((comment) =>{
            return(
               <div className = "row">
               <div className ="col-6">
                {comment.comment}
               </div>
               <div className = "col-6">
                {new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
               </div>
               </div>
           
            );
          });

        return (
            <div className ="container ">
            <div className="row" >
                <div className="col-12 col-md-5 m-1 container">
                    <Card className="container">
                        <CardImg width="100%"  src={dish.image} alt ={dish.name}/>
                  
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            <div className ="col-12 col-md-5 m-1 ">
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            {comm}
                        </CardBody>
                    </Card>
                </div>
            </div>
            </div>
          );
        }
      else
          return(
              <div>This isnt working</div>
          );
    }
}

export default DishdetailComponent;