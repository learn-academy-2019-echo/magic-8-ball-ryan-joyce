import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      answer: null,
      userName: null,
      ravenUserName: null,
      buttonName: null,
      senderName: null
    }
    this.name = "";
    this.sender = "";
  }
  
  componentDidMount = () =>
  {
    this.setState({ravenUserName: "Enter Your Name"})
    this.setState({buttonName: "Enter Your Name"})
  }

  getAnswer = () => 
  {
    const answers = ["You know the nothing Jon Snow.", "I'm not a learned man.", 
    "The lion does not concern themself with the sheep.", "If you think this has a happy ending, you haven’t been paying attention.",
    "That’s what I do: I drink and I know things.", "Yes. All men must die, but we are not men.",
    "Chaos isn’t a pit. Chaos is a ladder.", "Winter is coming.", "What is dead may never die."];
    const senders = ["Ygritte", "Davos, The Onion Knight", "Tywin Lannister", "Ramsay Snow", "Tyrion Lannister", "Daenerys Targaryean", "Peter Baelish", "The Starks", "The Greyjoys"]
    let num = Math.floor(Math.random() * answers.length)
    return [answers[num], senders[num]]
  }
  
  handleSubmit = () =>
  {
    if(this.name === "")
    {
      this.getInputValue();
      return;
    }
    var inputVal = document.getElementById("myInput").value;
    if(inputVal === "")
    {
      return;
    }
    this.setState({userName: this.name})
    let a = this.getAnswer();
    this.setState({answer: a[0]})
    this.setState({senderName: a[1]})
    document.getElementById("myInput").value = "";
  }
  
  getInputValue = () =>
  {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    if(inputVal === "")
    {
      return;
    }
    // Displaying the value
    //alert(inputVal);
    this.name = inputVal;
    var nuName = "Send a Raven " + this.name;
    this.setState({ravenUserName: nuName})
    this.setState({buttonName: "Send your Message"})
    document.getElementById("myInput").value = "";
  }
  
  render(){
    return (
      <body>
        <div id = "first">
            {this.state.ravenUserName &&
              <h1> {this.state.ravenUserName} </h1>
            }
          <input type='text' id = "myInput"/>
          <br />
          {this.state.buttonName &&
              <button onClick={this.handleSubmit}> {this.state.buttonName} </button>
            }
        </div>
          <div id = "second">
            {this.state.userName &&
              <h2> {this.state.userName} </h2>
            }
            {this.state.answer &&
              <h3> {this.state.answer} </h3>
            }
            {this.state.senderName &&
              <h4> {this.state.senderName} </h4>
            }
        </div>
      </body>
      
      
    )
  }
}

export default App;
