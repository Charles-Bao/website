import React, {Component} from 'react';
import {Carousel,Image,Row,Col} from 'react-bootstrap';
import '../css/summary.css';
import pic1 from '../resource/pics/pic1.jpg';
import pic2 from '../resource/pics/pic2.jpg';
import pic3 from '../resource/pics/pic3.jpg';




class Summary extends Component{
    

    render(){
        return (
            <div id = 'Summary' className = 'box bg-dark text-light border-top'>
                <div className = 'd-flex justify-content-between'>
                    <Row className = 'w-100 h-100 mh-100'>
                        <Col md className = 'mh-100 h-75'>
                                <div className = 'w-100 welcome' expend = "lg">
                                    <h1>Welcome!</h1>
                                </div>
                                <div className = "intro mh-100 mw-100 text-left">
                                    <p>
                                    Hi my name is Yuxiang Bao. I’m a computer science graduate student received my master degree from Worcester Polytechnic Institute this May. 
                                    I obtained my Bachelor degree from Beijing Institute of Technology where I received Second tier People scholarship due to outstanding grades in 2017.  
                                    I’ve learned and mastered basic Computer Science fundamentals in school like SE, Network, OS, and Algorithms. </p>
                                    <p>
                                    Besides of the experiences in schools, I’ve done 3 period of internships. I published a paper in IJCNN 2017 during my first internship in Tsinghua University.
                                    I helped build and test a online ordering system mostly using Java in Rapid Intelligence and worked as an machine learning engineer at Fujitsu last summer,
                                    where I built a steady risk classification system for subprime loan applicants based on their call detail records. The model reached similar performance comparing
                                    to the original system using Tucker decomposition and DNN and ran way faster than it.
                                    </p>
                                </div>
                        </Col>
                        <Col md>
                            <Carousel className = 'carousel_container' fade >
                                <Carousel.Item className = 'carousel_item'>
                                    <Image className = 'img img-responsive center-block' src= { pic1 } alt="First selfie" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img  className = 'img img-responsive center-block' src= { pic2 } alt="Second selfie" />  
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img  className = 'img img-responsive center-block'  src= { pic3 } alt="Thrid slide" />  
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Summary;