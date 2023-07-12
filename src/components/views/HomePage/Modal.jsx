import Box from "@mui/material/Box";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { closeModal } from "../../../redux/actions/modalActions";
import CloseIcon from "@mui/icons-material/Close";
import { Button, makeStyles } from "@material-ui/core";
// import { gapi } from "gapi-script";
import GoogleLogin from './GoogleLogin';

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: "#1999ff",
    width: "250px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1999ff",
    },
  },
}));
const Modal = ({ isOpen, closeModal, children }) => {
  const classes = useStyles();

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-close">
              <IconButton
                aria-label="delete"
                onClick={closeModal}
                style={{ color: "#1999ff" }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            {children}
            <div>
              <div>
                <div className="signInTitle">SIGN IN</div>
                <div className="signInBox">
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Email"
                      id="fullWidth"
                      color="primary"
                      focused
                      InputProps={{
                        style: { color: "white" },
                      }}
                    />
                    <br />
                    <br />
                    <TextField
                      fullWidth
                      label="Password"
                      id="fullWidth"
                      color="primary"
                      focused
                      InputProps={{
                        style: { color: "white" },
                      }}
                    />
                  </Box>
                  <div className="loginBtnStyle">
                    <Button
                      variant="contained"
                      className={classes.customButton}
                    >
                      Login
                    </Button>
                  </div>
                  <div className="loginBtnStyle">
                    {/* <a></a> */}
                    <a href="http://" className="helpIssue">
                      Help, I can't sign in
                    </a>
                  </div>
                  <GoogleLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
