import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { FormData } from "@/types";
import { WorkExperience } from "@/types";

export default function Resume({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  const { data } = useContext(DataContext);

  return (
    <div className="resume">
      First Name - {data.firstName}
      <br />
      Last Name - {data.lastName}
      <br />
      Education - {data.university}
      <br />
      Work Experience -{" "}
      {workExperiences.map((experience, i) => {
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
