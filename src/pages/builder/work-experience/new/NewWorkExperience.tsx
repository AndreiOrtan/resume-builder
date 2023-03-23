import useWorkExperience from "@/hooks/useWorkExperience";
import { IWorkExperience } from "@/types";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function WorkExperience() {
  const [jobExpToAdd, setJobExpToAdd] = useState<IWorkExperience>({
    company: "",
    jobTitle: "",
  });
  const { addExperience } = useWorkExperience();

  return (
    <div className="inputs-container">
      <TextField
        label="Company"
        variant="outlined"
        value={jobExpToAdd.company}
        onChange={(e) =>
          setJobExpToAdd((prev) => {
            return { ...prev, company: e.target.value };
          })
        }
      />
      <TextField
        label="Job title"
        variant="outlined"
        value={jobExpToAdd.jobTitle}
        onChange={(e) =>
          setJobExpToAdd((prev) => {
            return { ...prev, jobTitle: e.target.value };
          })
        }
      />
      <Button onClick={() => addExperience(jobExpToAdd)}>
        <Link href="/builder">Save</Link>
      </Button>
    </div>
  );
}
