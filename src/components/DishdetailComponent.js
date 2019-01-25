import React from 'react';
import {CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'; 
import { Link } from 'react-router-dom'
    function RenderDish({dish}){
        if (dish!=null)
        {
            return (
                <div className="col-12 col-md-5 m-1 container">
                    <CardImg width="100%"  src={dish.image} alt ={dish.name}/>
                    
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>      
                </div>);
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
            const Comm = Comments.map((commen)=>{
                return(
                    <div> 
                        <CardTitle>{commen.author}</CardTitle>
                        <CardText>{commen.comment}</CardText>

                    </div>
                );
            });
            {return(
                    <div className="col-12 col-md-5 m-1 container">
                    {Comm}
                
                 </div>
                );
            }
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
            <div className="container">
                <div className ="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className ="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                
                <div className ="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments Comments ={props.comments}/>   
                </div>               
            </div>
        );
        
    }

export default DishdetailComponent;