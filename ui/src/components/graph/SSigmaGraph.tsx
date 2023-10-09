import React, { useEffect, useState } from 'react';
import { getTemperaturePoints } from '../../api/temperature';
import { LineChart } from '@mui/x-charts';
import { graph } from '../../utils/graphCalculations';

const SSigmaGraph = () => {
  const [tempPoints, setTempPoints] = useState<{data: any[]}>({data: [1]})
  const [xPoints, setXPoints] = useState<{data: any[]}>({data: [1]})
  useEffect(() => {
    (async () => {
      const xAxisArray: any[] = [];
      const yAxisArray: number[] = [];
      const data = await getTemperaturePoints();
      data.data.temperatures.filter((element: { name: string; }) => element.name == 'TimeTempSigma').forEach(element => {
        const timeInterval = new Date(element.timestamp)
        xAxisArray.push(timeInterval)
        yAxisArray.push(element.temperature)
      });
      console.log(yAxisArray.sort());
      console.log(graph(yAxisArray).sort());
      setXPoints({data: yAxisArray});
      setTempPoints({data: graph(yAxisArray)});
    })()
    
  },[])


  return (
    <LineChart
    xAxis={[{...xPoints, label: 'Temperature'}]}
    series={[
      {...tempPoints, label: 'Distribution'}
    ]}
    width={500}
    height={300}
  />
  );
};

export default SSigmaGraph;