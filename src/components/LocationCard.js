import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Paper from "@mui/material/Paper";
import CardActionArea from "@mui/material/CardActionArea";
import { useDispatch } from 'react-redux'
import {changeLocation} from '../features/locationSlice'
export default function LocationCard(props) {
    const dispatch = useDispatch()
  return (
    <Paper elevation={0} sx={{ width: "inherit", borderBottom: "1px solid #eee", borderRadius: 0, padding: "20px 20px" }} onClick={() => dispatch(changeLocation(props.click))}>
   
          <Typography variant="h6" component="h6">
            {props.locationName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {props.locationAddress}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
            <Chip
              size="small"
              icon={<DirectionsBikeIcon />}
              label="Folding bike friendly"
            />
          </Stack>
      

      {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </Paper>
  );
}

