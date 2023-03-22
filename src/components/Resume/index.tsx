import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { FormData } from "@/types";

export default function Resume() {
  const { data } = useContext(DataContext);

  const renderedData = Object.keys(data).map((field) => {
    return "<h1 key={field}>{data[field as keyof FormData]}</h1>";
  });
  return (
    <div className="resume">
      First Name - {data.firstName}
      <br />
      Last Name - {data.lastName}
      <br />
      Education - {data.university}
      <br />
      Work Experience -{" "}
      {data.workExperience.map((experience, i) => {
        return (
          <div key={i}>
            {experience.company}
            {experience.jobTitle}
          </div>
        );
      })}
    </div>
  );
}
