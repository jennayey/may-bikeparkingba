import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

import CardActionArea from "@mui/material/CardActionArea";
import { useDispatch } from "react-redux";
import { changeLocation, changeView } from "../features/locationSlice";
export default function LocationCard(props) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: "90%", margin: "10px 5%" }}>
      <CardActionArea
        onClick={() => {
          dispatch(changeLocation(props.click));
          dispatch(changeView(true));
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
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
        </CardContent>
      </CardActionArea>

      {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
  );
}
