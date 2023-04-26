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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import Checkbox from "@mui/material/Checkbox";

export default function WorkExperience({
  addExperience,
  deleteExperience,
  updateExperience,
  workExperiences,
}: WorkExperienceComponent) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  function handleAddClick(index: number) {
    addExperience({
      company: "",
      jobTitle: "",
      startDate: String(dayjs().set("date", 1)),
      untilPresent: false,
      endDate: String(dayjs().set("date", 1)),
      city: "",
    });
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
                  {!isExpanded && (
                    <ListItemButton
                      onClick={() => handleClick(index)}
                      sx={{ margin: 0 }}
                    >
                      <ListItemText
                        sx={{ margin: 0, width: "100%" }}
                        primary={
                          <div>
                            <Typography
                              sx={{ color: experience.jobTitle ? "" : "gray" }}
                            >
                              {experience.jobTitle
                                ? experience.jobTitle
                                : "Job title"}
                            </Typography>
                            <br />
                            <Typography
                              sx={{ color: experience.company ? "" : "gray" }}
                            >
                              {experience.company ? (
                                <>
                                  {experience.company}
                                  <span>
                                    {experience.city
                                      ? `, ${experience.city}`
                                      : ""}
                                  </span>
                                </>
                              ) : (
                                "Company name"
                              )}
                            </Typography>

                            <span className={styles.tools}>
                              <Link
                                href=""
                                onClick={() => deleteExperience(experience.id)}
                                className={styles.deleteIcon}
                              >
                                <DeleteOutlineOutlinedIcon
                                  sx={{ color: "black" }}
                                />
                              </Link>
                            </span>
                          </div>
                        }
                      />
                    </ListItemButton>
                  )}

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
                        sx={{ width: "100%", mb: 1.5 }}
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
                      <TextField
                        label="City"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        value={experience.city}
                        onChange={(e) =>
                          updateExperience(
                            {
                              city: e.target.value,
                            },
                            index
                          )
                        }
                      />
                    </List>
                    <div className={styles.checkbox}>
                      <Checkbox
                        checked={experience.untilPresent}
                        onChange={(e) =>
                          updateExperience(
                            { untilPresent: !experience.untilPresent },
                            index
                          )
                        }
                      />
                      <label>I work here</label>
                    </div>
                    <section className={styles.dates}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label={"Select the starting date"}
                          views={["month", "year"]}
                          value={dayjs(experience.startDate)}
                          onChange={(newValue) =>
                            updateExperience({ startDate: newValue }, index)
                          }
                        />

                        <DatePicker
                          label={"Select the ending date"}
                          views={["month", "year"]}
                          value={dayjs(experience.endDate)}
                          onChange={(newValue) =>
                            updateExperience({ endDate: newValue }, index)
                          }
                          disabled={experience.untilPresent}
                        />
                      </LocalizationProvider>
                    </section>
                    <Button
                      variant="contained"
                      onClick={() => handleClick(index)}
                    >
                      Done
                    </Button>
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
        onClick={() =>
          handleAddClick(workExperiences ? workExperiences.length : 0)
        }
        sx={{ mr: "auto", border: "0.5px solid gray", color: "#4A4A50" }}
      >
        Add employment
      </Button>
    </div>
  );
}
