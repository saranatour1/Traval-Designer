import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "../components/Form Components/Card";
import TopHeading from "../components/Form Components/TopHeading";
import InputItem from "../components/Form Components/InputItem";
import FormButton from "../components/Form Components/FormButton.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";
import useErrors2 from "../hooks/useErrors2";

function RegestrationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getErrors = (errors) => {
    // console.log('we have errors');
  };

  const { errors, addError } = useErrors2({ getErrors });

  const navigate = useNavigate();

  /**
   * The `handleRegister` function sends a POST request to a registration API endpoint with user data,
   * handles the response, and performs actions based on the response.
   */
  const handleRegister = () => {
    fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        // If successfull Go to the main page
        if (data.errors) {
          Object.entries(data.errors).forEach(([key, value]) => {
            addError(value?.message);
          });
        } else {
          const token = data.token;
          if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("userId", data.id);
          }
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Card>
        <TopHeading pageName={"Register"} />
        <div className="m-7">
          <form onSubmit={(e) => e.preventDefault()}>
            {errors.map((item, idx) => (
              <p key={idx} className="text-red-500 mt-2">
                {item}
              </p>
            ))}
            <div className="flex ">
              <InputItem
                onChangeProp={(element) => setFirstName(element)}
                type="text"
                elId="firstName"
                labelText="First Name"
                placeholderText="John"
              />
              <InputItem
                onChangeProp={(element) => setLastName(element)}
                type="text"
                elId="lastName"
                labelText="Last Name"
                placeholderText="Doe"
              />
            </div>
            <InputItem
              onChangeProp={(element) => setEmail(element)}
              type="email"
              elId="email"
              labelText="Email Address"
              placeholderText="you@company.com"
            />
            <InputItem
              onChangeProp={(element) => setPassword(element)}
              type="password"
              elId="password"
              labelText="Password"
              placeholderText="Your Password"
            />
            <InputItem
              onChangeProp={(element) => setConfirmPassword(element)}
              type="password"
              elId="confirmPassword"
              labelText="Confirm Password"
              placeholderText="Confirm Password"
            />
            <FormButton btnText="Register" onClickProp={handleRegister} />
            <p className="text-sm text-center text-gray-400">
              Already Have an Account?{" "}
              <Link
                to="/signin"
                className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
              >
                Sign In
              </Link>
              !
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default RegestrationPage;
