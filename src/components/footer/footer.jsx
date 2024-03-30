import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "40px",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>&copy; 2024 Chalenge</p>
    </footer>
  );
}

export default Footer;
