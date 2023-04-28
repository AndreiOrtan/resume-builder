import { FormPages, FormData } from "@/types";
import { TextField } from "@mui/material";
import styles from "./Education.module.css";
import FormLayout from "@/components/Layouts/FormLayout";

export default function Education({ updateField, data }: FormPages) {
  return (
    <FormLayout>
      <div className={styles.education}>
        <TextField
          label="University"
          variant="outlined"
          value={data.university}
          onChange={(e) => updateField({ university: e.target.value })}
          sx={{ width: "100%", mb: 2 }}
        />
      </div>
    </FormLayout>
  );
}
