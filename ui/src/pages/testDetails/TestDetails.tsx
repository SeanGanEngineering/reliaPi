import Next from '../../components/navigationButtons/Next';
import { DateTimeWrapper, NavWrapper, PaddingWrapper, PageWrapper, StyledDateSelector, StyledTextField, StyledTimeSelector, TextInput } from './TestDetails.styled';
import { Button, Typography } from '@mui/material';


const TestDetails = () => {
  return (
    <PageWrapper>
      <PaddingWrapper>
      <Typography variant='h3'>Plan your test</Typography>
      <TextInput  label="Title" variant="outlined" />
      <StyledTextField label="Description" multiline maxRows={4}/>
      <TextInput  label="Assigned" variant="outlined" />
      <br/>
      <DateTimeWrapper>
        <StyledTimeSelector label="Start time" />
        <StyledDateSelector label="Start date"/>
      </DateTimeWrapper>
      <br/>
      <DateTimeWrapper>
        <StyledTimeSelector label="End time" />
        <StyledDateSelector label="End date"/>
      </DateTimeWrapper>
      <br/>
      <NavWrapper><Next/></NavWrapper>
      </PaddingWrapper>
    </PageWrapper>
  );
};

export default TestDetails;