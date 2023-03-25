import useWorkExperience from "@/hooks/useWorkExperience";
import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import styles from "./WorkExperience.module.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { TextField } from "@mui/material";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const { workExperience, deleteExperience, addExperience, updateExperience } =
    useWorkExperience();

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
        {workExperience &&
          workExperience.map((experience, index) => {
            const isExpanded = index === expandedIndex;
            return (
              <Box
                key={experience.id}
                sx={{
                  width: 100,
                  minHeight: "min-content",
                  position: "relative",
                  border: "0.5px solid gray",
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    padding: 0,
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton
                    onClick={() => handleClick(index)}
                    sx={{ margin: 0 }}
                  >
                    <ListItemText
                      primary={
                        <div>
                          {experience.company}
                          <br />
                          {experience.jobTitle}
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
