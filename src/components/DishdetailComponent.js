import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'; 
    function RenderDish({dish}){
        if (dish!=null)
        {
            return (
                <div className = "container">
                    <div className= "row">
                    <div className="col-12 col-md-5 m-1 container">
                        <CardImg width="100%"  src={dish.image} alt ={dish.name}/>
                        
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </div>


                    <div className = "col-12 col-md-5 m-1 container">
                        <RenderComments Comments ={dish.comments}/>
                    </div>
                    </div>
                </div>
            );
        }
        else
        {
            return(
                <div>
                </div>
            );
        }

    }

    function RenderComments({Comments}){

        if (Comments!=null)
        {
            const comm = Comments.map((comment) =>{
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
            return(
                <div>
                    {comm}
                </div>
            );
        }
        else
        {
            return(
                <div>
                    The comment section is empty
                </div>
            )
        }

    }
    
    const DishdetailComponent = (props) =>{
        return (
            <div>
                <RenderDish dish={props.dish}/>
                
            </div>
        );
        
    }

export default DishdetailComponent;