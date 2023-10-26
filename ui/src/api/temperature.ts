import axios from "axios";
import { TemperatureProps } from "../types/types";

export const getTemperaturePoints = async () => {
  const data = await axios({
    method: "get",
    url: "http://localhost:8080/temperatures",
    responseType: "json",
  });

  return data;
};

export const addTemperaturePoint = async (
  temperatureData: TemperatureProps,
) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/temperatures",
      data: temperatureData,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createRandomTemperaturePoints = async () => {
  const constructor: TemperatureProps = {
    Name: "TimeTempSigma",
    Timestamp: Date.now(),
    TemperatureC: 3,
  };

  let i = 0;
  const generate = setInterval(async () => {
    if (i < 30) {
      addTemperaturePoint(constructor);
      (constructor.Timestamp = Date.now()),
        (constructor.TemperatureC = Math.random() * 2);
      i++;
      console.log(i);
    } else {
      clearInterval(generate); // Stop the interval when i reaches 30
    }
  }, 1000);
};
