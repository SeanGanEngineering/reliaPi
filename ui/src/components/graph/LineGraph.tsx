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
      data.data.temperatures.filter((element: { name: string; }) => element.name == 'TimeTemp').forEach(element => {
        const timeInterval = new Date(element.timestamp)
        xAxisArray.push(timeInterval)
        yAxisArray.push(element.temperature)
      });
      console.log(xAxisArray);
      console.log(yAxisArray);
      setTime({data: xAxisArray});
      setTempPoints({data: yAxisArray});
    })()
    
  },[])

  const convertDate =(date) => {

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }

  return (
    <LineChart
    xAxis={[{...time, scaleType: 'time',  valueFormatter: (date) => convertDate(date), label: 'Time'}]}
    series={[
      {...tempPoints, label: 'Temperature'}
    ]}
    width={500}
    height={300}
  />
  );
};

export default LineGraph;