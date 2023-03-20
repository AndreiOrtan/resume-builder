/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import useFormData from "@/hooks/useFormData";
import ContactForm from "@/components/FormPages/ContactForm";
import Education from "@/components/FormPages/Education";
import Resume from "@/components/Resume";
import { Button } from "@mui/material";

export default function WorkExperience() {
  const { updateField, data } = useContext(DataContext);
  const { page, goNext, goBack } = useFormData([
    <ContactForm updateField={updateField} {...data} />,
    <Education updateField={updateField} {...data} />,
  ]);

  return (
    <div className="builder-container">
      <form className="form-half">
        {page}
        <Button type="button" onClick={goBack} variant="contained">
          Back
        </Button>
        <Button type="button" onClick={goNext} variant="contained">
          Next
        </Button>
      </form>
      <div className="resume-half">
        <Resume />
      </div>
    </div>
  );
}
