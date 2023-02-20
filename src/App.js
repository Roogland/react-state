import React, { Component } from "react";
import './App.css';


class App extends Component {
  state = {
    person: {
      fullName: "Akhimie Rowland",
      bio: <h4>Coding is Life,and i intend to live More</h4>,
      imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80",
      profession: "Web Developer"
    },
    shows: false,
    intervalId: null,
    elapsedTime: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleToggle = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state;
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        {shows && (
          <div>
            <img className="img" src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
          </div>
        )}
        <p>Elapsed time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
