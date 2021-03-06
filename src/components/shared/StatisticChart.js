import React from "react";
import { Card } from "@material-ui/core";
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';


const staticDatas = [
  { name: "Senin", pv: 44 },
  { name: "Selasa", pv: 79 },
  { name: "Rabu", pv: 45 },
  { name: "Kamis", pv: 28 },
  { name: "Jumat", pv: 55 },
  { name: "Sabtu", pv: 93 },
  { name: "Minggu", pv: 3 },
];

const Chart = () => {
  return (
    <Card  elevation={0}>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart
            data={staticDatas}
            margin={{ top: 20, right: 20, left: -12, bottom: 4 }}
            maxBarSize={12}
          >
            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
            <YAxis />
            <Tooltip cursor={{ fill: "rgb(239 239 239)" }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#3F51B5" radius={2} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Chart;