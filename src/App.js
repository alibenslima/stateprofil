import "./App.css";

import React, { Component } from "react";
import NameeProfil from "./component/NameeProfil/NameeProfil";
import PicProfil from "./component/PicProfil/PicProfil";
import ProfessionProfil from "./component/ProfessionProfil/ProfessionProfil";
import CounterProfil from "./component/CounterProfil/CounterProfil";
import BioProfil from "./component/BioProfil/BioProfil";

export default class App extends Component {
  state = {
    isVisible: true,
    fullName: "Diego Maradona",
    bio: "Diego Armando Maradona, né le 30 octobre 1960 à Lanús , est un footballeur international argentin devenu entraîneur. Durant sa carrière de joueur, entre 1976 et 1997, il joue au poste de milieu offensif sous le maillot no 10.",
    imgSrc:
      "https://static1.purepeople.com/articles/9/41/36/69/@/5948282-diego-maradona-a-manchester-en-2006-624x600-3.jpg",
    profession: "footballeur_international",
  };

  handleShow = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleShow}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>

        {this.state.isVisible && (
          <div>
            <NameeProfil nom={this.state.fullName} />
            <PicProfil image={this.state.imgSrc} />
            <ProfessionProfil prof={this.state.profession} />
            <BioProfil bioo={this.state.bio} />
            <CounterProfil />
          </div>
        )}
      </div>
    );
  }
}
