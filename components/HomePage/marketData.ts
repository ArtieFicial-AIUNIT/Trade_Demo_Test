import { Market } from './types';

export const marketData: Market[] = [
  {
    id: 'china',
    name: 'China',
    costs: {
      basicCost: 100,
      shipping: 25,
      tariffRate: 0.20,
      complianceCost: 15
    }
  },
  {
    id: 'usa',
    name: 'USA',
    costs: {
      basicCost: 100,
      shipping: 35,
      tariffRate: 0.15,
      complianceCost: 12
    }
  },
  {
    id: 'japan',
    name: 'Japan',
    costs: {
      basicCost: 100,
      shipping: 20,
      tariffRate: 0.18,
      complianceCost: 10
    }
  },
  {
    id: 'eu',
    name: 'European Union',
    costs: {
      basicCost: 100,
      shipping: 40,
      tariffRate: 0.22,
      complianceCost: 18
    }
  }
];
