import React from 'react'
import { Typography } from '@material-ui/core'


export const Footer = function() {
    return (
        <footer style={{ background:"white", paddingTop: "30px", paddingBottom: "40px", marginTop:"15px"}}>
        <Typography variant="h6" align="center" gutterBottom> Your title </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Transforming the lives of street children and turn their potentials into assets for the society.
        </Typography>
      </footer>
  );
}

export const AboutMongenFooter = function() {
  return (
    <> 
    <div style={{height:"100px"}}></div>
      <div style={{position:"relative", marginTop:"30px"}}>
          <footer style={{ background:"white", paddingTop: "30px", paddingBottom: "40px", marginTop:"25px", position:"absolute", bottom:"0", width:"100%"}}>
          <Typography variant="h6" align="center" gutterBottom> Mongen Initiative </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Helping charities to save people!
          </Typography>
        </footer>
      </div>
    </>
  );
}
