import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function LeaderTable(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Rank</Th>
          <Th>User</Th>
          <Th>Time</Th>
          <Th>Distance</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1st</Td>
          <Td>David</Td>
          <Td>07:54.321</Td>
          <Td>1km</Td>
          <Td>09/12/20</Td>
        </Tr>
        <Tr>
          <Td>2nd</Td>
          <Td>Gonzalo</Td>
          <Td>07:52.456</Td>
          <Td>1km</Td>
          <Td>09/12/20</Td>
        </Tr>
        <Tr>
          <Td>3rd</Td>
          <Td>Kiril</Td>
          <Td>07:50.456</Td>
          <Td>1km</Td>
          <Td>09/12/20</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
