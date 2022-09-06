import * as React from "react";
import Typography from "@mui/material/Typography";

function CardElements(props) {
  const { data, title } = props;
  return (
    <Typography class="typography">
      <b> {title}</b>
      {data}
    </Typography>
  );
}

export default CardElements;
