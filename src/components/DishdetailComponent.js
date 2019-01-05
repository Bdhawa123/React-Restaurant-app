import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'; 
import { DISHES } from '../shared/dishes';


class DishdetailComponent extends Component
{  
    constructor(props )
    {
        super(props)
        {
            this.state =
            {
                selectedDish:null
            }
        }
    }
    


  
    render(){
        const dish = this.props.dishes;
        var i; 
        
      if (dish!=null)
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
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
                                <Comments dish={dish.comments}/>
                        </CardBody>
                    </Card>
                </div>
            </div>
          );
      else
          return(
              <div></div>
          );
    }
}
function Comments(props)
{
    const um = props;
    var i = 0,x="";
    for (i=0;i<5;i++)
        {
           alert("sdfas");
        }
   // document.getElementById("return_comment").innerHTML = x;
    return(
        <div id="return_comment">
            <p>{x}</p>
        </div>
    );
}

    

export default DishdetailComponent;