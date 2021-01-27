import { Typography, List, ListItem, ListItemText } from "@material-ui/core"
import React from "react";

type Props = {
  organizationDetails
  organizationLocation
  mainContact
}

export default function OrganizationSummary(props: Props) {
  const { organizationDetails, organizationLocation, mainContact } = props

  console.log(organizationDetails)
  console.log(organizationLocation)
  console.log(mainContact)

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        The summary of your application
        </Typography>
      <Typography variant="h5" align="center" style={{ padding: "15px" }}>{organizationDetails.name}</Typography>
      <List>
        <ListItem>
          <ListItemText>Mission</ListItemText>
          <Typography variant="body1">{organizationDetails.mission}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Vision:</ListItemText>
          <Typography variant="body1">{organizationDetails.vision}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText>Address:</ListItemText>
          <Typography variant="subtitle1">{organizationLocation.address}</Typography>
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
