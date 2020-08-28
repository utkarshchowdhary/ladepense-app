import React from 'react';
import DepenseList from './DepenseList';
import DepenseListFilters from './DepenseListFilters';

const DepenseDashboardPage = () => (
  <div>
    <DepenseListFilters />
    <DepenseList />
  </div>
);

export default DepenseDashboardPage;
