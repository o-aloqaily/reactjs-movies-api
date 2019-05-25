import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Home extends Component {
  state = {
    searchInput: ''
  }

  render() {
    return (
      <div className="App App-header bg-image">
        <div className="card">
          <h1 className="heading">What movie are you looking for?</h1>
          <TextField
            id="movie"
            label="Movie name..."
            className="textField"
            value={this.state.searchInput}
            onChange={(e) => this.setState({ searchInput: e.target.value })}
            margin="normal"
          />
          <div className="block">
            <Button size="large" color="primary" onClick={() => this.props.onSearch(this.state.searchInput)}>
              Search
            </Button>
          </div>
        </div>
      </div>
    );  
  }
}

export default Home;
