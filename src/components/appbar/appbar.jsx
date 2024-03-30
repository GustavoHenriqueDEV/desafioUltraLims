import React from "react";
import { Toolbar, Typography, AppBar, Box } from "@mui/material";
import logoUltra from "../../assets/logoUltra.png";

function AppBarone() {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#c3c3c3" }} position="static">
        <Toolbar>
          <img
            src={logoUltra}
            style={{ height: "40px", marginRight: "10px" }}
            alt=""
          />
          <Typography
            color={"black"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            ChalengeUltraLims
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default AppBarone;
