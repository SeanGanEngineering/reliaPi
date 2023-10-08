import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getTemperaturePoints } from '../../api/temperature';
const LineGraph = () => {
  const [tempPoints, setTempPoints] = useState<{data: any[]}>({data: [1]})
  const [time, setTime] = useState<{data: any[]}>({data: [1]})
  useEffect(() => {
    (async () => {
      const xAxisArray: any[] = [];
      const yAxisArray: number[] = [];
      const data = await getTemperaturePoints();
      data.data.temperatures.filter((element: { name: string; }) => element.name == 'TimeTempTest').forEach(element => {
        console.log(new Date(element.timestamp));
        xAxisArray.push(1)
        yAxisArray.push(element.temperature)
      });
      console.log(xAxisArray);
      console.log(yAxisArray);
      setTime({data: xAxisArray});
      setTempPoints({data: yAxisArray});
    })()
    
  },[])

  return (
    <LineChart
    xAxis={[time]}
    series={[
      tempPoints
    ]}
    width={500}
    height={300}
  />
  );
};

export default LineGraph;