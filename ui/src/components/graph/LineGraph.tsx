import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getTemperaturePoints } from '../../api/temperature';
import { Avatar, CardHeader, IconButton } from '@mui/material';
import GraphCard from '../card/GraphCard';
import { MoreVert } from '@mui/icons-material';
const LineGraph = () => {
  const [tempPoints, setTempPoints] = useState<{ data: any[] }>({ data: [1] });
  const [time, setTime] = useState<{ data: any[] }>({ data: [1] });
  useEffect(() => {
    (async () => {
      const xAxisArray: any[] = [];
      const yAxisArray: number[] = [];
      const data = await getTemperaturePoints();
      data.data.temperatures
        .filter((element: { name: string }) => element.name == 'TimeTemp')
        .forEach((element) => {
          const timeInterval = new Date(element.timestamp);
          xAxisArray.push(timeInterval);
          yAxisArray.push(element.temperature);
        });
      console.log(xAxisArray);
      console.log(yAxisArray);
      setTime({ data: xAxisArray });
      setTempPoints({ data: yAxisArray });
    })();
  }, []);

  const convertDate = (date) => {
    // TODO: Implement
    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so we add 1
    // const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  };

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
        title='Temperature rise'
        subheader='September 14, 2016'
        sx={{ backgroundColor: '#ECEFF0' }}
      />
      <LineChart
        xAxis={[
          {
            ...time,
            scaleType: 'time',
            valueFormatter: (date) => convertDate(date),
            label: 'Time',
          },
        ]}
        series={[{ ...tempPoints }]}
        width={500}
        height={250}
      />
    </GraphCard>
  );
};

export default LineGraph;
