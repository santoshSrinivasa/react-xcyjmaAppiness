import React from "react";
import Welcome from "./Welcome";
import styled from 'styled-components';
import InputBox from "./inputBox";
import Button from "./button";
import { connect } from "react-redux";
import axios from "axios";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "hruday@gmail.com",
      password: 'hruday123',
      userNameEntered: "",
      passwordEntered: "",
      isloginValid: false,
      invalidFlag: '',
      persons:[],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.type === "text" ? event.target.value : event.target.value;
    if (name == "userNameEntered")
      this.setState({ userNameEntered: value });
    if (name == "passwordEntered")
      this.setState({ passwordEntered: value });
  }
  handleClick(event) {
    event.preventDefault();
    const nameDefault = this.state.username;
    const pwdDefault = this.state.password;
    const nameEntered = this.state.userNameEntered;
    const pwdEntered = this.state.passwordEntered
    if ((nameDefault == nameEntered) && (pwdDefault == pwdEntered)) {
      this.setState({ isloginValid: true });
      this.props.history.push("/searchOptions")
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        this.setState({ persons });
        this.props.searchUpdated(persons);
      })
    } else {
      const invalid = "Invalid User login"
      this.setState({ invalidFlag: invalid })
    }
  }
  render() {
    return (
      <UserLoginContainer>
        <MainDiv>
          <div>
            <label>User name : </label>
            <InputBox type="text" name="userNameEntered" className="marginUsername" onChange={this.handleChange} />
          </div>
          <MarginTop>
            <label>Password : </label>
            <InputBox type="password" name="passwordEntered" className="marginPwd" onChange={this.handleChange} />
          </MarginTop>
          <MarginTop>
            < AlignButton>
              <Button type="submit" onClick={this.handleClick} />
            </AlignButton >
          </MarginTop >
          <LoginResults>{this.state.invalidFlag}</LoginResults>
        </MainDiv>
      </UserLoginContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchUpdated: (details) => dispatch({ type: 'LOGINDETAILS', searchvalue: details }),
  }

}
function mapStateToProps(state) {
  console.log(state);
  return {
    searchValueStore: state.details,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);

const UserLoginContainer = styled.div`
    height: -webkit-fill-available;
    background-color: antiquewhite;
`;

const MainDiv = styled.div`
    top: 45%;
    left: 40%;
    position: absolute;
`;

const MarginTop = styled.div`
  margin-top: 10px;
`;

const AlignButton = styled.div`
  text-align: center;
`;

const LoginResults = styled.h3`
  text-align: center;
  color: red;
`;