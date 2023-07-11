import Box from "@mui/material/Box";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import { closeModal } from "../../../redux/actions/modalActions";
import CloseIcon from "@mui/icons-material/Close";
import { Button, makeStyles } from "@material-ui/core";

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initGoogleSignIn = () => {
      // window.gapi.load("auth2", () => {
      //   window.gapi.auth2
      //     .init({
      //       client_id: "44599695390-gup6helb1r9diigcs629dvp14dal92e9.apps.googleusercontent.com",
      //     })
      //     .then(() => {
      //       const auth = window.gapi.auth2.getAuthInstance();
      //       setUser(auth.currentUser.get());
      //       auth.isSignedIn.listen((isSignedIn) => {
      //         setUser(isSignedIn ? auth.currentUser.get() : null);
      //       });
      //     })
      //     .catch((error) => {
      //       console.log("Google Sign-In failed:", error);
      //     });
      // });
      if (typeof window.gapi === "undefined") {
        console.error("Google API (gapi) is not available.");
        return;
      } else {
        window.gapi.load("auth2", () => {
          // Initialize the API with your client ID
          window.gapi.auth2
            .init({
              client_id:
                "44599695390-gup6helb1r9diigcs629dvp14dal92e9.apps.googleusercontent.com",
            })
            .then(
              () => {
                // Authentication was successful, do something here
              },
              (error) => {
                // Authentication failed, handle the error here
              }
            );
        });
      }
    };
    initGoogleSignIn();
  }, []);

  const handleSignIn = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn().then(() => setUser(auth.currentUser.get()));
  };

  const handleSignOut = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut().then(() => setUser(null));
  };
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
                  <div>
                    <button>google login</button>
                  </div>
                  <div>
                    {user ? (
                      <>
                        <span>
                          Signed in as {user.getBasicProfile().getName()}
                        </span>
                        <button onClick={handleSignOut}>Sign out</button>
                      </>
                    ) : (
                      <button onClick={handleSignIn}>
                        Sign in with Google
                      </button>
                    )}
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
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
