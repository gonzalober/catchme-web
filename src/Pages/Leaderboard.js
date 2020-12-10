import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './Header';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import LeaderTable from './Table';

export default class Leaderboard extends Component {
  render() {
    return (
      <div className="main-content">
        < Header/>
          <div className="race-end">
            <h1>Leaderboard</h1>
            < LeaderTable/>
          </div>
      </div>
    );
  }
}
