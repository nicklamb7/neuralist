import React from 'react';
import Company from '../../components/company/Company';
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
}]

function Companies() {
  return (
    <ul className="companies">
      {companies.map((company, index) =>
        <Company
          name={company.name}
          key={company.key}
          ranking={index}
        />
      )}
    </ul>
  )
}

export default Companies;
