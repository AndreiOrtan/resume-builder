import useWorkExperience from "@/hooks/useWorkExperience";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
export default function EditWorkExperience() {
  const router = useRouter();
  const { experienceId } = router.query;
  const { workExperience, updateExperience } = useWorkExperience();

  const renderedInputs = workExperience
    .filter((experience) => experience.id === experienceId)
    .map((expr) => {
      return (
        <div className="inputs-container" key={expr.id}>
          <TextField
            label="Company"
            variant="outlined"
            value={expr.company}
            onChange={(e) =>
              updateExperience(
                typeof experienceId === "string" ? experienceId : "",
                { company: e.target.value }
              )
            }
          />
          <TextField
            label="Job title"
            variant="outlined"
            value={expr.jobTitle}
            onChange={(e) =>
              updateExperience(
                typeof experienceId === "string" ? experienceId : "",
                { jobTitle: e.target.value }
              )
            }
          />
          <Button>
            <Link href="/builder">Save and go back</Link>
          </Button>
        </div>
      );
    });
  return <>{renderedInputs}</>;
}
