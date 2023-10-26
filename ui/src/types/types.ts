export interface TemperatureProps {
  Name: string;
  Timestamp: number;
  TemperatureC: number;
}

export interface TestPlanProps {
  title: string;
  description: string;
  assigned: string;
  startTime: string;
  endTime: string;
  metric: string;
  testType: string;
}
