import React,{Component} from 'react';
import {Card, Button, Row, Col,OverlayTrigger,Popover} from 'react-bootstrap';
import '../css/exp.css';
import fujitsu from '../resource/icons/fujitsu.gif';
import tsinghua from '../resource/icons/tsinghua.png';
import rapid from '../resource/icons/ri.jpg';


class Experience extends Component{

    


    render(){
        var popover1 = (
            <Popover id="popover-1">
              <Popover.Title as="h3">Summary</Popover.Title>
              <Popover.Content>
                <ul>
                    <li>Built a crawler using Selenium and RESTful API to collect the information including ownership and harass tag of the over 100,000 given Call Detail Records(CDR) over semi-open database.</li>
                    <li>Cleaned the data using the result from the crawler and statistical information, applied XGBoost, LR and SVM using SMOTE algorithm on the imbalanced dataset implemented by Scikit-learn and had averagely 70% precision.</li>
                    <li>Proposed Info-flow model on the CDR and applied random-walk-based GNN algorithm on the data implemented by Tensorflow, used voting solution to get result over trained classifiers and reached 73% precision.</li>
                </ul>
              </Popover.Content>
            </Popover>
          );
          
        var popover2 = (
            <Popover id="popover-2">
              <Popover.Title as="h3">Summary</Popover.Title>
              <Popover.Content>
              <ul>
                    <li>Helped developed Restful API to serialize completed order event to JSON format and visualized the delivery footprint using Falcon and Amap.</li>
                    <li>Improved map loading speed by 60% by replacing nested looping with multi-thread implementation. </li>
                    <li>Applied white and black box test by Junit, wrote automated testing scripts in Java and applied stress tests with jMeter.</li>
                </ul>
              </Popover.Content>
            </Popover>
          );  

          var popover3 = (
            <Popover id="popover-3">
              <Popover.Title as="h3">Summary</Popover.Title>
              <Popover.Content>
              <ul>
                    <li>Proposed SPO(subject, predicate, object) extraction algorithm and build a Question Answering system focusing on e-commerce FAQs using LTP and Stanford Parser and applied BM25 algorithm to sort the matching result.</li>
                    <li>Designed crawler to collect reviews data from Amazon.cn, modified double-propagation algorithm to extract aspects and sentiment word from corpus, transformed raw data to Aspect Based Positive Center Similarity model and trained and test SVM perf classifier on the clothes domain and achieved 88% accuracy.</li>
                </ul>
              </Popover.Content>
            </Popover>
          );


        return (
            <div id = 'Experience' className = 'bg-dark box border-top text-light '>

                <div className = 'exp'>
                    <h1>Experience</h1>
                </div>
                
                <Row className = 'cardbox'>
                    <Col xs = '100' sm = '100' md lg xl>
                        <Card className = 'card' border="light" bg="dark">
                            <Card.Img className = 'img img-responsive center-block' variant="top" src={fujitsu} />
                            <Card.Body className = 'd-flex flex-column justify-content-end'>
                                <Card.Title>Fujitsu</Card.Title>
                                <Card.Subtitle>Intern Machine Learning Engineer</Card.Subtitle>
                                <Card.Text>
                                    05/2018 - 08/2018
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                                    <Button variant="success">What did I do?</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs = '100' sm = '100' md lg xl>
                        <Card className = 'card' border="light" bg="dark">
                            <Card.Img className = 'img img-responsive center-block' variant="top" src={rapid} />
                            <Card.Body className = 'd-flex flex-column justify-content-end'>
                            <Card.Title>Rapid Intelligence</Card.Title>
                                <Card.Subtitle>Intern Java Engineer</Card.Subtitle>
                                <Card.Text>
                                    01/2017 - 06/2017
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
                                    <Button variant="success">What did I do?</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs = '100' sm = '100' md lg xl>
                        <Card className = 'card' border="light" bg="dark">
                            <Card.Img className = 'bg-white img img-responsive center-block' variant="top" src={tsinghua} />
                            <Card.Body className = 'd-flex flex-column justify-content-end'>
                            <Card.Title>Tsinghua University</Card.Title>
                                <Card.Subtitle>Research Assistant</Card.Subtitle>
                                <Card.Text>
                                    07/2015 - 01/2017
                                </Card.Text>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover3}>
                                    <Button variant="success">What did I do?</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                    

                    

                    
            </div>
                

        );
    }
}


export default Experience;