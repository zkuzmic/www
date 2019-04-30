import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import CustomerCarousel from '../components/customers/CustomerCarousel';
import GreatCompany from '../components/customers/GreatCompany';
import CustomerEmpowerment from '../components/customers/CustomerEmpowerment';
import ZeroTo from '../components/footer/ZeroTo';


export default ({ data }) => (
  <AptibleLayout>
    <CustomerCarousel />
    <GreatCompany />
    <CustomerEmpowerment />
    <ZeroTo />
  </AptibleLayout>
);
