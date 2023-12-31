import { PageContainer } from "./Dashboard.styled";
import LineGraph from "../../components/graph/LineGraph";
import SSigmaGraph from "../../components/graph/SSigmaGraph";
import { Typography } from "@mui/material";

const Dashboard = () => (
  <PageContainer>
    <div style={{ margin: "30px" }}>
      <Typography variant="h6" sx={{ padding: 0, margin: 0 }}>
        Good morning
      </Typography>
      <Typography variant="h2" sx={{ padding: "0px", margin: "0px" }}>
        Sean Gan
      </Typography>
    </div>
    <div>
      <LineGraph />
      <SSigmaGraph />
    </div>

    {/* <TemperatureAdd /> */}
  </PageContainer>
);

export default Dashboard;
