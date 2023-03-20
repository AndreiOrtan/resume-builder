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
    <div>
      <TextField
        id="outlined-basic"
        label="University"
        variant="outlined"
        value={university}
        onChange={(e) => updateField({ university: e.target.value })}
      />
      <Card sx={{ width: 350 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Word of the Day
          </Typography>
          <Typography component="div">ascasdasda</Typography>
          <Typography sx={{ mb: 6.5 }} color="-moz-initial">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
