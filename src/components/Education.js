import React,{Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import '../css/edu.css'



class Education extends Component{
    render(){
        return(
            <div id = 'Education' className = 'd-flex flex-column bg-dark box border-top text-light'>
                    <Row className = 'w-100 h-100 mh-100'>
                        <Col>
                            <div >
                            <div className = 'edu'> 
                                <h1>Education</h1>
                            </div>
                                <div className = 'school'>
                                    <p className = 'text-primary'>Wocester Polytechnic Institute<br/>
                                    Master of Science, Computer Science</p>

                                </div>
                                <div className = 'school'>
                                    <p className = 'text-primary'>Beijing Institute of Technology<br/>
                                    Bachelor of Science, Computer Science<br/>
                                    Honor Thesis: Asptect Based Positive Center Similarty Model for Sentiment Classification</p>
                                </div>
                                
                            </div>
                        </Col>
                        <Col>
                            <div >
                                <div className = 'w-100 coursework'><h2>Coursework</h2></div>
                                <div className = 'coursebox d-flex flex-column align-self-center'>
                                    {/* TODO: add crawler to the backend, associate the course name to the number in the school's website*/}
                                    <div className = 'd-flex flex-row justify-content-between'>
                                        <p>Software Engineering</p>
                                        <p>Computer Network</p>
                                    </div>
                                    <div className = 'd-flex flex-row justify-content-between'>
                                        <p>Big Data Management</p>
                                        <p>Data Visulization</p>
                                    </div>
                                    <div className = 'd-flex flex-row justify-content-between'>
                                        <p>Algorithms</p>
                                        <p>Database Management</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


        );
    }


}

export default Education;