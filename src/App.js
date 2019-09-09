import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col, Button} from 'reactstrap';

class Pad extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      play: false
    }
    this.handleDrum = this.handleDrum.bind(this)
  }

  handleDrum(){
    console.log('playing')
    const sound = document.getElementById(this.props.drum.key);
    sound.play();
  }

  render(){
    return(
      <div className='outer-drum'>
        <audio id={this.props.drum.key} src={'/drums/'+this.props.drum.source+'.wav'}></audio>
        <Button className='drum' color='secondary' onClick={() => this.handleDrum()}></Button>
      </div>
    )
  }
}

class Controls extends React.Component{
  render(){
    return(
      <div id='controls' className='col-4'>
        <Row className='control-row'>
          <Button id='power' color='danger'><FontAwesomeIcon icon={faPowerOff}/></Button>
        </Row>
        <Row className='control-row'>
          <input id='volume' type='range' className='custom-range' min='0' max='100'/>
        </Row>
        <Row className='control-row'>
          <Col className='set-col' xs='6'>
            <Button id='next' color='warning'><FontAwesomeIcon icon={faArrowAltCircleRight}/></Button>
          </Col>
          <Col className='set-col' xs='6'>
            <div id='set'>
              <p>SET</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      power:  true,
      volume: 50
    }
  };


  render(){
    const pads = this.props.drums.map((drum, i) => {
      return(
        <Pad key={i} drum={drum}/>
      )
    })

    return(
      <Container>
        <Row id='shell'>
            <Controls/>
          <Col id='pads' xs='8' className='side'>
            {pads}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
