import React, { Component } from "react";
import "./App.css";
import Template from "./components/Template";

class App extends Component {
  state = { dataList: null, categorie: "cats" };
  componentWillMount() {
    this.getAnimalList();
  }

  getAnimalList = async () => {
    const animalList = await this.callApi();
    this.setState({
      dataList: animalList
    });
  };

  callApi = () => {
    const { categorie } = this.state;

    return fetch(`/api/${categorie}`)
      .then(res => res.json())
      .then(json => json)
      .catch(err => console.log(err));
  };

  render() {
    const { dataList, categorie } = this.state;
    return (
      <div className="App">
        {dataList ? (
          <Template dataList={dataList} categorie={categorie} />
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}

export default App;
