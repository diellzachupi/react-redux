import * as React from "react";
import "../styles/UserCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CardElements from "../components/CardElements";

function UserCard(props) {
  const { name, email, phone, address, company, website, removeCard } = props;

  return (
    <Card class="card">
      <CardHeader
        justify="space-between"
        title={name}
        action={
          <IconButton
            onClick={() => removeCard(email)}
            style={{ position: "absolute", top: "0", right: "0" }}
          >
            <CloseIcon />
          </IconButton>
        }
      />

      <CardContent>
        <CardElements data={email} title="Email:" />
        <CardElements data={address.street} title="Address:" />
        <CardElements data={phone} title="Phone:" />
        <CardElements data={company.name} title="Company:" />
      </CardContent>
      <CardActions>
        <a href={"http://www." + website} target="_blank" rel="noreferrer">
          {website}
        </a>
      </CardActions>
    </Card>
  );
}

export default UserCard;
