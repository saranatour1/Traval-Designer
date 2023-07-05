import React, { useEffect, useRef, useState } from "react";
import github from "../assets/github-mark-white.svg";
import Nav from "../components/Nav";
import TeamComponent from "../components/TeamComponent";

const users = [
  "saranatour1",
  "Yousef-labadi",
  "HamdanIbra",
];

function Team() {
  const [newUsers, setNewUsers] = useState([]);

  const val = useRef(0);

  useEffect(() => {
    if (val.current === 0) {
      getUsersData();
      val.current++;
      if (val.current === users.length) {
        return;
      }
    }
  }, []);

  const getUsersData = () => {
    users.forEach((item) => {
      fetch(`https://api.github.com/users/${item}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setNewUsers((prevUsers) => [...prevUsers, data]);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <>
      <Nav />
      <h3 className="h-32 flex items-center justify-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white my-5 text-center">
  Our Team
</h3>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto">
        {newUsers.map((item, idx) => (
          <div className="rounded-lg" key={idx}>
            <TeamComponent team={item} />
          </div>
        ))}
      </div>

      <h1 className="ml-4 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Checkout our{" "}
        <span className="text-blue-600 dark:text-blue-500">GitHub Repo</span>{" "}
      </h1>
      <div className="flex justify-center">
        <a
          href="https://github.com/saranatour1/Traval-Designer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <img className="w-5" src={github} alt="GitHub logo" />
          </div>
          <span className="ml-2">GitHub Repo</span>
        </a>
      </div>
    </>
  );
}

export default Team;
