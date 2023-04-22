/* eslint-disable react/jsx-key */
import { FormEvent, useContext } from "react";
import { DataContext } from "@/context/DataContext";
import useFormData from "@/hooks/useFormData";
import ContactForm from "@/components/FormPages/ContactForm";
import Education from "@/components/FormPages/Education";
import Resume from "@/components/Resume";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import WorkExperience from "@/components/FormPages/WorkExperience";
import useWorkExperience from "@/hooks/useWorkExperience";
import About from "@/components/FormPages/About";

const steps = ["Contact", "About", "Education", "Work Experience"];

export default function UserInputs() {
  const { updateField, data } = useContext(DataContext);
  const { workExperiences, deleteExperience, addExperience, updateExperience } =
    useWorkExperience();
  const { page, goNext, goBack, indexPage, reset } = useFormData([
    <ContactForm updateField={updateField} data={data} />,
    <About data={data} updateField={updateField} />,
    <Education updateField={updateField} data={data} />,
    <WorkExperience
      workExperiences={workExperiences}
      deleteExperience={deleteExperience}
      addExperience={addExperience}
      updateExperience={updateExperience}
    />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    goNext();
  }

  return (
    <div className="builder-container">
      <div className="form-half">
        <Box sx={{ width: "70%" }} component="form" onSubmit={onSubmit}>
          <Stepper activeStep={indexPage} alternativeLabel>
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <>
            <Typography sx={{ mt: 2, mb: 1 }} component="div">
              {page}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={indexPage === 0}
                onClick={goBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button type="submit">
                {indexPage === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        </Box>
      </div>

      <div className="resume-half">
        <Resume workExperiences={workExperiences} />
      </div>
    </div>
  );
}
