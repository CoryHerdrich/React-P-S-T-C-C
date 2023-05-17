import React, { Component } from 'react';
import JournalList from "./journals/journal_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <h6>CH-React-Project-1-DeepDive</h6>
        <JournalList heading="A Couple Stories for You"/>
      </div>
    );
  }
}