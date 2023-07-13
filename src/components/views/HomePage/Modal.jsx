import React from "react";
import Box from "@mui/material/Box";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import CompanyLogo from "../../../assets/image/Logos/logoIcon.png";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import { Button, makeStyles } from "@material-ui/core";
import { TextField, IconButton } from "@material-ui/core";
import { closeModal } from "../../../redux/actions/modalActions";

const useStyles = makeStyles((theme) => ({
  customButton: {
    backgroundColor: "#1999ff",
    width: "250px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1999ff",
    },
  },
  icon: {
    fill: "white",
  },
  root: {
    color: "white",
  },
  countryList: {
    ...theme.typography.body1,
  },
}));

const Modal = ({ isOpen, closeModal, children, auth }) => {
  
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [checked, setChecked] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState("");
  const [userPass, setUserPass] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const getUserInfo = (event) => {
    setUserInfo(event.target.value)
  }

  const getUserPass = (event) => {
    setUserPass(event.target.value)
  }

  const goToDashboard = () => {
    dispatch({ type: 'LOGIN' });
    navigate('/dashboard');
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-close">
              <IconButton
                aria-label="delete"
                onClick={closeModal}
                style={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            {children}
            <div>
              <div className="modalFlexDirection">
                <div className="flexPos">
                  {/* Logo Section */}
                  <div className="signInLogo">
                    <img src={CompanyLogo} alt="segritude_logo" />
                  </div>
                  {/* SignIn Box Section */}
                  <div className="signInBox">
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Email or Discord Username"
                        id="fullWidth"
                        color="primary"
                        focused
                        value={userInfo}
                        onChange={getUserInfo}
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
                        value={userPass}
                        onChange={getUserPass}
                        InputProps={{
                          style: { color: "white" },
                        }}
                      />
                    </Box>
                    {/* Remeber User Section */}
                    <div className="checkRemember">
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                      Remember Me
                    </div>
                  </div>
                  {/* Login Button Style Section */}
                  <div>
                    <div className="loginBtnStyle">
                      <Button
                        variant="contained"
                        className={classes.customButton}
                        onClick={goToDashboard}
                      >
                        Log In
                      </Button>
                    </div>
                  </div>
                  {/* Lost Password Section */}
                  <div>
                    <div className="aTagPos">
                      <a
                        href="http://"
                        className="lostPass"
                        style={{ textDecoration: "none" }}
                      >
                        Lost your password?
                      </a>
                    </div>
                  </div>
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
  closeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
