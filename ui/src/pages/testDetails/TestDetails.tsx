import Next from '../../components/navigationButtons/Next';
import {
  DateTimeWrapper,
  NavWrapper,
  PaddingWrapper,
  PageWrapper,
  StyledTextField,
  TextInput,
} from './TestDetails.styled';
import { Autocomplete, TextField, Typography } from '@mui/material';
import { testCategories, testOptions } from './TestDetailsFixtures';
import { DateTimePicker } from '@mui/x-date-pickers';

const TestDetails = () => {
  return (
    <PageWrapper>
      <PaddingWrapper>
        <Typography variant='h3'>Plan your test</Typography>
        <br />
        <TextInput label='Title' variant='outlined' />
        <StyledTextField label='Description' multiline maxRows={4} />
        <TextInput label='Assigned' variant='outlined' />
        <DateTimeWrapper>
          <DateTimePicker label='Start time' />
          <DateTimePicker label='End time' />
        </DateTimeWrapper>
        <Autocomplete
          options={testOptions}
          renderInput={(params) => <TextField {...params} label='Metric' />}
        />
        <Autocomplete
          options={testCategories}
          renderInput={(params) => <TextField {...params} label='Test Type' />}
        />
        <br />
        <NavWrapper>
          <Next />
        </NavWrapper>
      </PaddingWrapper>
    </PageWrapper>
  );
};

export default TestDetails;
