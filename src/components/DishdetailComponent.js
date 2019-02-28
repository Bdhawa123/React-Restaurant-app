import React, {Component} from 'react';
import {CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
            Modal, ModalBody,ModalHeader,Button, Label, Row,Col} from 'reactstrap'; 
import { Link } from 'react-router-dom'
import { LocalForm,Control,Errors } from 'react-redux-form';
import { Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


//validators
const required = (val) => val && val.length;
const maxLength = (len)=> (val)=>!(val)||(val.length<=len);
const minLength = (len) => (val)=> val&& (val.length>=len);


    function RenderDish({dish}){
        if (dish!=null)
        {
            return (
                <div className="col-12 col-md-5 m-1 container">
                   <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    
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
    
    class CommentForm extends Component
    {
        constructor(props)
        {
            super(props);
            this.state={
                isModalopen:false    
            };
        
            this.toggleModal= this.toggleModal.bind(this);

        }

        
        toggleModal()
        {
            this.setState({
                isModalopen:!this.state.isModalopen
            });
        }

        handleSubmit(values)
        {
            this.props.postComment(this.props.dishId, values.rating, values.name, values.comment);
            console.log("Current State is"+JSON.stringify(values));
            alert("Current State is"+JSON.stringify(values));
        }


        render()
        {
            return(
                <React.Fragment>
                    <Button outline onClick ={this.toggleModal}>
                        <span className ="fa fa-pencil fa-lg"></span>Submit Comment
                    </Button>
                    
                    <Modal isOpen ={this.state.isModalopen} toggle ={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader> 
                            <ModalBody>
                                <LocalForm onSubmit ={(values)=> this.handleSubmit(values)}>
                                    <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                        <Col md={{size:6,offset:2}}>
                                            <Control.select model=".rating" id ="rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>    
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    

                                    <Row className="form-group">
                                        <Label htmlFor="name" md={2}>Your Name</Label>
                                        <Col md={{size:6,offset:2}}>
                                            <Control.text model=".name" id ="name" name="name"
                                                placeholder="Your Name"
                                                className="form-control"
                                                validators={{required,minLength:minLength(3), maxLength:maxLength(15)}}/>

                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={{
                                                    required:'*',
                                                    minLength:'Must be greater than three characters',
                                                    maxLength:'Must be less than or equal to fifteen characters'
                                                }}/>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                    
                                        <Label htmlFor="comment" md={2}>Comment</Label>
                                        <Col md={{size:6,offset:2}}>
                                            <Control.textarea model=".comment" id ="comment" name="comment"
                                                className="form-control"
                                                rows="6"/>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                    <Col md={{size:8, offset: 4}}>
                                        <Button type="submit" color="primary">
                                           Submit
                                        </Button>
                                     </Col>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                    </Modal>
               </React.Fragment>
    
            );
        }
    }

   
    function RenderComments({Comments,postComment,dishId}){

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
            
            {
                return(
                    <div className="col-12 col-md-5 m-1 container">
                    {Comm}
                    <CommentForm dishId={dishId} postComment={postComment}/>
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
            if (props.isLoading){
                return(
                    <div class="container">
                        <div className ="row">
                            <Loading/>
                        </div>
                    </div>
                );
            }
            else if (props.errMess) 
            {
                return(
                    <div class="container">
                        <div className ="row">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }      
            else if (props.dish!=null)
            {
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
                            <RenderComments Comments ={props.comments}
                                postComment = {props.postComment}
                                dishId={props.dish.id}/>   
                            
                        </div>               
                    </div>
                      );
            }
        
    }

export default DishdetailComponent;