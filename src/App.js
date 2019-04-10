import React, { Component } from "react";
import "./App.css";
import Template from "./components/Template";

class App extends Component {
  state = { dataList: null, categorie: "cats", cnt: 20, preCnt: 0 };
  componentWillMount() {
    this.getAnimalList();
  }

  getAnimalList = async () => {
    const { dataList } = this.state;
    const animalList = await this.callApi();

    this.setState({
      dataList: dataList ? dataList.concat(animalList) : animalList,
      preCnt: this.state.cnt,
      cnt: this.state.cnt + 20
    });
  };

  callApi = () => {
    const { categorie, cnt, preCnt } = this.state;

    return fetch(`/api/${categorie}`)
      .then(res => res.json())
      .then(json => json.slice(preCnt, cnt))
      .catch(err => console.log(err));
  };

  moreLoadList = () => {
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
          />
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}

export default App;
