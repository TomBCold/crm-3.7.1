// import './styles.css';
import React from 'react';
import {
  BarChart, Bar, XAxis, Legend, Tooltip
} from 'recharts';

const data = [
  {
    name: 'Январь',

    pv: 2400
  },
  {
    name: 'Февраль',

    pv: 1398
  },
  {
    name: 'Март',

    pv: 9800
  },
  {
    name: 'Апрель',

    pv: 3908
  },
  {
    name: 'Май',

    pv: 4800,
    amt: 2181
  },
  {
    name: 'Июнь',

    pv: 3800,
    amt: 2500
  }
];

export default function Charts() {
  return (
    <BarChart
      width={400}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >

      <XAxis dataKey="name" />

      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#FF5E5B" />

    </BarChart>
  );
}
