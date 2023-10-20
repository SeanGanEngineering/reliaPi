import React, { useEffect, useState } from 'react';
import { getTemperaturePoints } from '../../api/temperature';
import { LineChart } from '@mui/x-charts';
import { graph } from '../../utils/graphCalculations';
import GraphCard from '../card/GraphCard';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const SSigmaGraph = () => {
  const [tempPoints, setTempPoints] = useState<{ data: any[] }>({ data: [1] });
  const [xPoints, setXPoints] = useState<{ data: any[] }>({ data: [1] });
  useEffect(() => {
    (async () => {
      const xAxisArray: any[] = [];
      const yAxisArray: number[] = [];
      const data = await getTemperaturePoints();
      data.data.temperatures
        .filter((element: { name: string }) => element.name == 'TimeTempSigma')
        .forEach((element) => {
          const timeInterval = new Date(element.timestamp);
          xAxisArray.push(timeInterval);
          yAxisArray.push(element.temperature);
        });
      console.log(yAxisArray.sort());
      console.log(graph(yAxisArray).sort());
      setXPoints({ data: yAxisArray });
      setTempPoints({ data: graph(yAxisArray) });
    })();
  }, []);

  return (
    <GraphCard>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#BADDDB' }} aria-label='recipe'>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='Temperature distribution'
        subheader='September 14, 2016'
        sx={{ backgroundColor: '#ECEFF0' }}
      />
      <LineChart
        xAxis={[{ ...xPoints, label: 'Temperature' }]}
        series={[{ ...tempPoints }]}
        sx={{ padding: '0px', margin: '0px' }}
        width={500}
        height={250}
      />
    </GraphCard>
  );
};

export default SSigmaGraph;
