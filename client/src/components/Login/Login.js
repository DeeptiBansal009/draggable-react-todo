import React, { useEffect } from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Button } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { AuthService } from "../../services/authService";
import { fetchAPI } from "../../services/api";

const Login = (props) => {
  const classes = useStyles(style)();
  let history = useHistory();
  useEffect(() => {
    if (props.location && props.location.search) {
      const session = props.location.search.split("=");
      AuthService.authenticate(session[1]);
      fetchAPI(`/user`)
        .then((res) => {
          if(res.data && Object.keys(res.data).length){
            AuthService.setUserData(res.data);
            history.push("/todo");
            props.loginSession(session[1]);
          }
        
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className={classes.signInDiv}>
      <a href="http://localhost:8443/api/v1/auth/google">
        <Button>
          <img alt="linkedin logo" src={logo} />
          Sign in with Google
        </Button>
      </a>
    </div>
  );
};

export default Login;
