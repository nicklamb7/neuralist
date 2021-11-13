import React from 'react';
import { Button } from 'react-bootstrap';
import Company, { MyVerticallyCenteredModal } from '../../components/company/Company';
import './Companies.scss';

const companies = [{
  name: 'Apple',
  key: 1
}, {
  name: 'Facebook',
  key: 2
}, {
  name: 'Google',
  key: 3
}, {
  name: 'Amazon',
  key: 4
}, {
  name: 'Apple',
  key: 5
}, {
  name: 'Facebook',
  key: 6
}, {
  name: 'Google',
  key: 7
}, {
  name: 'Amazon',
  key: 8
}, {
  name: 'Apple',
  key: 9
}, {
  name: 'Facebook',
  key: 10
}, {
  name: 'Google',
  key: 11
}, {
  name: 'Amazon',
  key: 12
}, {
  name: 'Apple',
  key: 13
}, {
  name: 'Facebook',
  key: 14
}, {
  name: 'Google',
  key: 15
}, {
  name: 'Amazon',
  key: 16
}, {
  name: 'Apple',
  key: 17
}, {
  name: 'Facebook',
  key: 18
}, {
  name: 'Google',
  key: 19
}, {
  name: 'Amazon',
  key: 20
}, {
  name: 'Apple',
  key: 21
}, {
  name: 'Facebook',
  key: 22
}, {
  name: 'Google',
  key: 23
}, {
  name: 'Amazon',
  key: 24
}, {
  name: 'Apple',
  key: 25
}, {
  name: 'Facebook',
  key: 26
}, {
  name: 'Google',
  key: 27
}, {
  name: 'Amazon',
  key: 28
}, {
  name: 'Apple',
  key: 29
}, {
  name: 'Facebook',
  key: 30
}, {
  name: 'Google',
  key: 31
}, {
  name: 'Amazon',
  key: 32
}]

function Companies() {
  return (
    <>
      <ul className="companies">
        {companies.map((company, index) =>
          <Company
            name={company.name}
            key={company.key}
            ranking={index}
          />
        )}
      </ul>
    </>
  )
}

export default Companies;
