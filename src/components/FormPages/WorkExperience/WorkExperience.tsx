import useWorkExperience from "@/hooks/useWorkExperience";
import { FormPages, FormData, IWorkExperience } from "@/types";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";

export default function WorkExperience({ data, updateField }: FormPages) {
  //   const { workExperience } = data;
  const { workExperience, addExperience } = useWorkExperience();
  return (
    <div className="inputs-container">
      <Button variant="contained">
        <Link href="/builder/work-experience/new">Add work place</Link>
      </Button>

      <div className="test">
        {workExperience &&
          workExperience.map((exprr, i) => {
            return (
              <Box
                key={exprr.id}
                sx={{
                  width: "100%",
                  minHeight: "min-content",
                  backgroundColor: "primary.dark",
                }}
                onClick={(e) => console.log(e.target)}
              >
                {exprr.id}
                <br />
                {exprr.company}
                <br />
                {exprr.jobTitle}
              </Box>
            );
          })}
      </div>
      {/* {workExperience.map((experience, i) => {
        return (
          <div key={i}>
            <TextField
              label="Company"
              variant="outlined"
              value={experience.company}
              onChange={(e) =>
                updateField({
                  workExperience: workExperience.map((expr) => {
                    return { ...expr, company: e.target.value };
                  }),
                })
              }
            />
            <TextField
              label="Job Title"
              value={experience.jobTitle}
              onChange={(e) =>
                updateField({
                  workExperience: workExperience.map((expr) => {
                    return { ...expr, jobTitle: e.target.value };
                  }),
                })
              }
            />
          </div>
        );
      })} */}
    </div>
  );
}
