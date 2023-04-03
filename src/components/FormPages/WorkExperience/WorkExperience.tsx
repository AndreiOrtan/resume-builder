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
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export default function WorkExperience({
  addExperience,
  deleteExperience,
  updateExperience,
  workExperiences,
}: WorkExperienceComponent) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function handleAddClick(index: number) {
    addExperience({ company: "", jobTitle: "" });
    setExpandedIndex(index);
  }

  function handleClick(nextIndex: number) {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  }

  return (
    <div className="inputs-container">
      {workExperiences && (
        <div className="experience-container">
          {workExperiences.map((experience, index) => {
            const isExpanded = index === expandedIndex;
            return (
              <Box
                key={experience.id}
                sx={{
                  // width: 50,
                  minHeight: "min-content",
                  position: "relative",
                  border: "0.5px solid #D8D8D8",
                  borderRadius: 2,
                  mb: 3,
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
                      sx={{ margin: 0, width: "100%" }}
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
                    <List component="nav" disablePadding>
                      <TextField
                        label="Company"
                        variant="outlined"
                        sx={{ width: "100%", mb: 1.5 }}
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
                        sx={{ width: "100%" }}
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
      )}

      <Button
        // variant="contained"
        size="small"
        startIcon={<AddCircleOutlineOutlinedIcon />}
        onClick={() => handleAddClick(workExperiences.length)}
        sx={{ mr: "auto", border: "0.5px solid gray", color: "#4A4A50" }}
      >
        Add employment
      </Button>
    </div>
  );
}
