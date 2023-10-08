import axios from "axios";
import { TemperatureProps } from "../types/types";

export const getTemperaturePoints = async () => {
  const data = await axios({
    method: 'get',
    url: 'http://localhost:8080/temperatures',
    responseType: 'json'
  });
  
  return data;
}

export const addTemperaturePoint = async (temperatureData: TemperatureProps) => {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:8080/temperatures',
    data: temperatureData
  })

  console.log(response);

  return response;
}

export const createRandomTemperaturePoints = async () => {
  const constructor: TemperatureProps = {
    Name: 'TimeTempTest',
    Timestamp: Date.now(),
    TemperatureC: 3
  }

  for (let i = 0; i < 30; i++) {
    await new Promise<void>((resolve) => {
      setTimeout(async () => {
        await addTemperaturePoint(constructor);
        resolve();
      }, 1000);
    });

    constructor.TemperatureC += constructor.TemperatureC + Math.random() * 5;
  }
}