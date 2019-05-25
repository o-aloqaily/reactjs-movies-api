import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Result from './components/Result'

class App extends Component {
  state = {
    data: null
  }

  onSearch = (searchInput) => {
    this.fetchMovie(searchInput)
    .then((data) => this.setState({ data }))
    .then(() => this.props.history.push('/result'))
  }

  fetchMovie = (searchInput) => {
    return fetch(`http://www.omdbapi.com/?t=${searchInput}&apikey=79fe984`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => console.log(e))
  }

  renderHome = () => {
    return (
      <Home onSearch={this.onSearch} />
    )
  }

  renderResult = () => {
    return (
      <Result movie={this.state.data} />
    )
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={this.renderHome} />
        <Route exact path="/result" render={this.renderResult} />

      </div>
    )
  }
}

export default withRouter(App);
