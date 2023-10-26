import Next from "../../components/navigationButtons/Next";
import {
  DateTimeWrapper,
  NavWrapper,
  PaddingWrapper,
  PageWrapper,
} from "./TestDetails.styled";
import { Button, Typography } from "@mui/material";
import { testCategories, testOptions } from "./TestDetailsFixtures";
import {
  AutocompleteElement,
  DateTimePickerElement,
  FormContainer,
  TextFieldElement,
} from "react-hook-form-mui";
import { addTestPlan } from "../../api/testPlans";

const TestDetails = () => {
  const handleSubmit = async (data) => {
    try {
      const addPlan = await addTestPlan(data);
      console.log("Added plan", addPlan);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageWrapper>
      <FormContainer onSuccess={(data) => handleSubmit(data)}>
        <PaddingWrapper>
          <Typography variant="h3">Plan your test</Typography>
          <br />
          <TextFieldElement name="title" label="Title" />
          <TextFieldElement
            name="description"
            label="Description"
            multiline
            maxRows={4}
          />
          <TextFieldElement
            name="assigned"
            label="Assigned"
            variant="outlined"
          />
          <DateTimeWrapper>
            <DateTimePickerElement name="startTime" label="Start time" />
            <DateTimePickerElement name="endTime" label="End time" />
          </DateTimeWrapper>
          <AutocompleteElement
            name="metric"
            label="Metric"
            options={testOptions}
          />
          <AutocompleteElement
            name="testType"
            label="testType"
            options={testCategories}
          />
          <br />
          <NavWrapper>
            <Button type="submit">Submit</Button>
            <Next />
          </NavWrapper>
        </PaddingWrapper>
      </FormContainer>
    </PageWrapper>
  );
};

export default TestDetails;
