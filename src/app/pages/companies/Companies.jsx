import React from 'react';
import Company from '../../components/company/Company';
import './Companies.scss';

const companies = [{
  name: 'Apple'
}, {
  name: 'Facebook'
}, {
  name: 'Google'
}, {
  name: 'Amazon'
}, {
  name: 'Apple'
}, {
  name: 'Facebook'
}, {
  name: 'Google'
}, {
  name: 'Amazon'
}]

function Companies() {
  return (
    <ul className="companies">
      {companies.map(company =>
        <Company name={company.name}/>
      )}
    </ul>
  )
}

export default Companies;
