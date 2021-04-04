import { Typography, List, ListItem, ListItemText} from "@material-ui/core"
import React from "react";

type Props = {
  organizationDetails
  organizationLocation
  mainContact
}

export default function OrganizationSummary(props: Props) {
  const { organizationDetails, organizationLocation, mainContact } = props

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        The summary of your application
        </Typography>
      <Typography variant="h5" align="center" style={{ padding: "15px" }}>{organizationDetails.name}</Typography>
      <List>
        <ListItem>
          <ListItemText>Mission:</ListItemText>
          <Typography variant="body1" style={{wordWrap: "break-word", paddingLeft:"340px"}}>{organizationDetails.mission}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Vision:</ListItemText>
          <Typography variant="body1" style={{wordWrap: "break-word", paddingLeft:"340px"}}>{organizationDetails.vision}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Story:</ListItemText>
          <Typography variant="body1" style={{wordWrap: "break-word", paddingLeft:"340px"}}>{organizationDetails.story}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Organization address:</ListItemText>
          <Typography variant="subtitle1" style={{wordWrap: "break-word", paddingLeft:"340px"}}>{organizationLocation.address}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Country:</ListItemText>
          <Typography variant="subtitle1">{organizationLocation.country.name}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Main contact:</ListItemText>
          <Typography variant="subtitle1">{`${mainContact.first_name} ${mainContact.last_name}`}</Typography>
        </ListItem>
      </List>
    </div>
  );
}
