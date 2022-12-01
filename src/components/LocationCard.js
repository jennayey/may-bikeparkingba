import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { changeLocation, changeView } from "../features/locationSlice";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PaymentIcon from "@mui/icons-material/Payment";
import Tooltip from '@mui/material/Tooltip';

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
        {/* <Box sx={{flexGrow: 2}}> */}
        <CardContent sx={{ display: "flex" }}>
          {/* <CardMedia
            component="img"
            sx={{
              width: 80,
              height: 80,
              marginRight: "12px",
              borderRadius: "5px",
            }}
            image={`../images/${props.click.imgName}.jpg`}
            alt="Live from space album cover"
          /> */}
          <Box component="img" src={`/images/${props.click.imgName}`} sx={{
              width: 80,
              height: 80,
              marginRight: "12px",
              borderRadius: "5px",
              objectFit: "cover"
            }}></Box>
          <Box>
            <Typography variant="h6" component="div">
              {props.locationName}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              {props.locationAddress}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Tooltip title="Free parking" arrow>
              <PaymentIcon color={props.click.free ? "primary" : "gray"} fontSize="small" />

              </Tooltip>
              <Tooltip title="Covered parking" arrow>
              <WarehouseIcon color={props.click.covered ? "primary" : "gray"} fontSize="small" />

              </Tooltip>
            </Stack>
          </Box>

          {/* <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}><DirectionsBikeIcon color="primary" />
            <Chip
              size="small"
              icon={<DirectionsBikeIcon color="primary" />}
              label="Folding bike friendly"
            />
          </Stack> */}
        </CardContent>
      </CardActionArea>

      {/* <CardActions>
      <Button size="small"   onClick={() => {
          dispatch(changeView(true));
        }}>Details</Button>
      <Button size="small">View in Google Maps</Button>

    </CardActions> */}
      {/* </Box> */}
    </Card>
  );
}
