import useWorkExperience from "@/hooks/useWorkExperience";
import { FormPages } from "@/types";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import styles from "./WorkExperience.module.css";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function WorkExperience() {
  const { workExperience, deleteExperience } = useWorkExperience();
  return (
    <div className="inputs-container">
      <Button variant="contained" title="adddddd">
        <Link href="/builder/work-experience/new">Add work place</Link>
      </Button>

      <div className="experience-container">
        {workExperience &&
          workExperience.map((experience, i) => {
            return (
              <Box
                key={experience.id}
                sx={{
                  width: 100,
                  minHeight: "min-content",
                  position: "relative",
                  border: "0.5px solid gray",
                }}
                onClick={(e) => console.log(e.target)}
              >
                <div>
                  {experience.company}
                  <br />
                  {experience.jobTitle}
                </div>
                <span className={styles.tools}>
                  <Link href={"builder/work-experience/edit/" + experience.id}>
                    <ModeEditOutlineOutlinedIcon />
                  </Link>
                  <Link href="" onClick={() => deleteExperience(experience.id)}>
                    <DeleteOutlineOutlinedIcon />
                  </Link>
                </span>
              </Box>
            );
          })}
      </div>
    </div>
  );
}
