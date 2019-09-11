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
    this.handleClick = this.handleClick.bind(this)
    this.handleKey = this.handleKey.bind(this)
    this.key = React.createRef();
  }

  componentDidMount(){
    console.log('mounted')
    console.log(this.key)
    console.log(this.props.drum)
    this.setState({
      sound: new Audio('https://s3.amazonaws.com/freecodecamp/drums/'+this.props.drum.source+'.mp3')
    })
  }

  componentDidUpdate(){
    console.log('updated')
  }

  handleKey = (event) => {
    console.log('playing')
    console.log('key pressed: ', event.key)
    console.log(this.props.drum)
    if(event.key === this.props.drum.key){
      console.log(this.state.sound)
      this.state.sound.play()
    }
  }

  handleClick(){
    console.log(this.state.sound)
    console.log(this.props.drum)
    this.state.sound.play()
  }

  render(){
    return(
      <div className='outer-drum'>
        <Button className='drum' color='secondary' ref={this.key} onClick={() => this.handleClick()} onKeyPress={this.handleKey}></Button>
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
