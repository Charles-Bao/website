import React,{Component} from 'react';
import '../css/award.css';
import {Row, Col,Container} from 'react-bootstrap';


class Awards extends Component{
    render(){
        return(
            <div id = 'Awards' className = 'd-flex bg-dark box border-top text-light flex-column'>  
                <div className = 'awards'>
                    <h1>Awards and Publications</h1>
                </div>
                <Container className = 'awardsbox'>
                    <Row>
                        <Col lg={true} className = 'font-weight-bold'>People Scholarship, second tier</Col>
                        <Col lg={true} md={{ span: 3, offset: 3 }}>Beijing Institute Technology, 2017</Col>
                    </Row>
                    <Row>
                        <Col lg={true} className = 'font-weight-bold'>Yuxiang Bao, etc., Aspect-Based Sentiment Analysis Using ABPCS Model in Chinese Reviews</Col>
                        <Col lg={true} md={{ span: 3, offset: 3 }}>IJCNN, 2017</Col>
                    </Row>
                </Container>
                

            </div>
        );
    }
}

export default Awards;