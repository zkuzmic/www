import React from 'react';
import AptibleLayout from '../components/layouts/AptibleLayout';
import Hero from '../components/deploy/Hero';
import Features from '../components/deploy/Features';
import SecurityControls from '../components/deploy/SecurityControls';
import HowItWorks from '../components/deploy/HowItWorks';
import UseCases from '../components/deploy/UseCases';
import WhoUses from '../components/deploy/WhoUses';
import ZeroTo from '../components/footer/ZeroTo';


export default ({ data }) => (
  <AptibleLayout>
    <Hero />
    <Features />
    <SecurityControls />
    <HowItWorks />
    <UseCases />
    <WhoUses />
    <ZeroTo />
  </AptibleLayout>
);
