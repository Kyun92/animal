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
    const { categorie } = this.state;
    const animalList = await this.callApi(categorie);
    this.setState({
      dataList: animalList
    });
  };

  callApi = categorie => {
    const { cnt, preCnt } = this.state;
    return fetch(`/api/${categorie}`)
      .then(res => res.json())
      .then(json => json.slice(preCnt, cnt))
      .catch(err => console.log(err));
  };

  moreLoadList = async () => {
    const { dataList, categorie, preCnt, cnt } = this.state;
    const nextDateList = await fetch(`/api/${categorie}`)
      .then(res => res.json())
      .then(json => json.slice(preCnt + 20, cnt + 20))
      .catch(err => console.log(err));

    this.setState({
      dataList: dataList.concat(nextDateList),
      preCnt: cnt,
      cnt: cnt + 20
    });
  };

  handleChangeCategorie = e => {
    e.preventDefault();
    this.setState({
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
