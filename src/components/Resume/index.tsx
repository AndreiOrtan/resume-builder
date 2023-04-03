import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { WorkExperience } from "@/types";
import { Card } from "@mui/material";
import styles from "./Resume.module.css";

export default function Resume({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) {
  const { data } = useContext(DataContext);

  return (
    <Card sx={{ width: 420, height: 550 }}>
      <div className={styles.resumeHeader}>dasddasdsa</div>
    </Card>
  );
  {
    /* First Name - {data.firstName}
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
      })} */
  }
}
