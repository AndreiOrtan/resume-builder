/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import useFormData from "@/hooks/useFormData";
import ContactForm from "@/components/FormPages/ContactForm";
import Education from "@/components/FormPages/Education";
import Resume from "@/components/Resume";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

const steps = ["Contact", "Education", "Education2"];

export default function WorkExperience() {
  const { updateField, data } = useContext(DataContext);
  const { page, goNext, goBack, indexPage, reset } = useFormData([
    <ContactForm updateField={updateField} {...data} />,
    <Education updateField={updateField} {...data} />,
    <Education updateField={updateField} {...data} />,
  ]);

  return (
    <div className="builder-container">
      <div className="form-half">
        <form>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={indexPage} alternativeLabel>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {indexPage === steps.length ? (
              <>
                <Typography sx={{ mt: 2, mb: 1 }} component="div">
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={reset}>Reset</Button>
                </Box>
              </>
            ) : (
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

                  <Button onClick={goNext}>
                    {indexPage === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </form>
      </div>

      <div className="resume-half">
        <Resume />
      </div>
    </div>
  );
}
