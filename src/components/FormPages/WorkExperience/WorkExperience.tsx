import useWorkExperience from "@/hooks/useWorkExperience";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import styles from "./WorkExperience.module.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { TextField } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { WorkExperienceComponent } from "@/types";

export default function WorkExperience({
  addExperience,
  deleteExperience,
  updateExperience,
  workExperiences,
}: WorkExperienceComponent) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  //   const { workExperience, deleteExperience, addExperience, updateExperience } =
  //     useWorkExperience();

  const handleClick = (nextIndex: number) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  return (
    <div className="inputs-container">
      <Button
        variant="contained"
        onClick={() => addExperience({ company: "", jobTitle: "" })}
      >
        Add work place
      </Button>

      <div className="experience-container">
        {workExperiences.map((experience, index) => {
          const isExpanded = index === expandedIndex;
          return (
            <Box
              key={experience.id}
              sx={{
                width: 50,
                minHeight: "min-content",
                position: "relative",
                border: "0.5px solid #D8D8D8",
                borderRadius: 2,
              }}
            >
              <List
                sx={{
                  width: "100%",
                  padding: 0,
                  margin: 0,
                }}
                component="nav"
              >
                <ListItemButton
                  onClick={() => handleClick(index)}
                  sx={{ margin: 0 }}
                >
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={
                      <div>
                        <Typography
                          sx={{ color: experience.company ? "" : "gray" }}
                        >
                          {experience.company
                            ? experience.company
                            : "Company name"}
                        </Typography>
                        <br />
                        <Typography
                          sx={{ color: experience.jobTitle ? "" : "gray" }}
                        >
                          {experience.jobTitle
                            ? experience.jobTitle
                            : "Job title"}
                        </Typography>
                      </div>
                    }
                  />
                  <span className={styles.tools}>
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                    <Link
                      href=""
                      onClick={() => deleteExperience(experience.id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </Link>
                  </span>
                </ListItemButton>
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <TextField
                      label="Company"
                      variant="outlined"
                      value={experience.company}
                      onChange={(e) =>
                        updateExperience(
                          {
                            company: e.target.value,
                          },
                          index
                        )
                      }
                    />
                    <TextField
                      label="Job title"
                      variant="outlined"
                      value={experience.jobTitle}
                      onChange={(e) =>
                        updateExperience(
                          {
                            jobTitle: e.target.value,
                          },
                          index
                        )
                      }
                    />
                  </List>
                </Collapse>
              </List>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
