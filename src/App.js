import React, { Component } from "react";
import "./App.css";
import Template from "./components/Template";

class App extends Component {
  state = {
    dataList: null,
    categorie: "cats",
    cnt: 20,
    preCnt: 0
  };

  componentDidMount() {
    this.getAnimalList();
  }

  getAnimalList = async () => {
    const { dataList, cnt } = this.state;
    const animalList = await this.callApi();
    this.setState({
      dataList: dataList ? dataList.concat(animalList) : animalList,
      preCnt: cnt,
      cnt: cnt + 20
    });
  };

  callApi = () => {
    const { cnt, preCnt, categorie } = this.state;
    return fetch(`/api/${categorie}`)
      .then(res => res.json())
      .then(json => json.slice(preCnt, cnt))
      .catch(err => console.log(err));
  };

  moreLoadList = () => {
    this.getAnimalList();
  };

  handleChangeCategorie = async e => {
    e.preventDefault();
    await this.setState({
      cnt: 20,
      preCnt: 0,
      dataList: null,
      categorie: e.target.value
    });
    this.getAnimalList();
  };

  render() {
    const { dataList, categorie } = this.state;
    return (
      <div className="App">
        {dataList ? (
          <Template
            dataList={dataList}
            categorie={categorie}
            moreLoadList={this.moreLoadList}
            handleChangeCategorie={this.handleChangeCategorie}
          />
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}

export default App;
