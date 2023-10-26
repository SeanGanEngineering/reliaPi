import { TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const TextInput = styled(TextField)`
  width: 500px;
`;

export const PaddingWrapper = styled.div`
  padding: 30px;
  display: flex;
  width: 500px;
  flex-direction: column;
  gap: 10px;
`;
export const StyledTextField = styled(TextField)`
  width: 500px;
`;

export const StyledDateSelector = styled(DatePicker)`
  width: 245px;
`;

export const StyledTimeSelector = styled(TimePicker)`
  width: 245px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
