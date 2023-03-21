import { FormPages, FormData } from "@/types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
export default function Education({
  updateField,
  university,
}: FormPages & FormData) {
  return (
    <div className="inputs-container">
      <TextField
        label="University"
        variant="outlined"
        value={university}
        onChange={(e) => updateField({ university: e.target.value })}
      />
    </div>
  );
}
