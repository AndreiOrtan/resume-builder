/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import useFormData from "@/hooks/useFormData";
import ContactForm from "@/components/FormPages/ContactForm";
import Education from "@/components/FormPages/Education";
import Resume from "@/components/Resume";

export default function WorkExperience() {
  const { updateField, data } = useContext(DataContext);
  const { page, goNext, goBack } = useFormData([
    <ContactForm updateField={updateField} {...data} />,
    <Education updateField={updateField} {...data} />,
  ]);

  return (
    <>
      <form className="form-half">
        {page}
        <button type="button" onClick={goBack}>
          Back
        </button>
        <button type="button" onClick={goNext}>
          Next
        </button>
      </form>
      <div className="resume-half">
        <Resume />
      </div>
    </>
  );
}
