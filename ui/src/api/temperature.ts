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