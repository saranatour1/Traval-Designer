import React from "react";
import github from "../assets/github-mark-white.svg";
import Nav from "../components/Nav";
import TeamComponent from "../components/TeamComponent";

// const users =[
//     "saranatour1",
//     "Yousef-labadi",
//     "HamdanIbra",
//   ]
const updatedUser = [
  {
    login: "saranatour1",
    id: 77834808,
    node_id: "MDQ6VXNlcjc3ODM0ODA4",
    avatar_url: "https://avatars.githubusercontent.com/u/77834808?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/saranatour1",
    html_url: "https://github.com/saranatour1",
    followers_url: "https://api.github.com/users/saranatour1/followers",
    following_url:
      "https://api.github.com/users/saranatour1/following%7B/other_user%7D",
    gists_url: "https://api.github.com/users/saranatour1/gists%7B/gist_id%7D",
    starred_url:
      "https://api.github.com/users/saranatour1/starred%7B/owner%7D%7B/repo%7D",
    subscriptions_url: "https://api.github.com/users/saranatour1/subscriptions",
    organizations_url: "https://api.github.com/users/saranatour1/orgs",
    repos_url: "https://api.github.com/users/saranatour1/repos",
    events_url: "https://api.github.com/users/saranatour1/events%7B/privacy%7D",
    received_events_url:
      "https://api.github.com/users/saranatour1/received_events",
    type: "User",
    site_admin: false,
    name: "Sara",
    company: null,
    blog: "https://personal-website-indol-sigma.vercel.app/",
    location: "Tulkarem, Palestine ",
    email: null,
    hireable: true,
    bio: "Writing, documenting, Following my dreams. ",
    twitter_username: null,
    public_repos: 37,
    public_gists: 13,
    followers: 10,
    following: 35,
    created_at: "2021-01-22T10:21:06Z",
    updated_at: "2023-06-16T09:32:20Z",
  },
  {
    login: "Yousef-labadi",
    id: 27770555,
    node_id: "MDQ6VXNlcjI3NzcwNTU1",
    avatar_url: "https://avatars.githubusercontent.com/u/27770555?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Yousef-labadi",
    html_url: "https://github.com/Yousef-labadi",
    followers_url: "https://api.github.com/users/Yousef-labadi/followers",
    following_url:
      "https://api.github.com/users/Yousef-labadi/following%7B/other_user%7D",
    gists_url: "https://api.github.com/users/Yousef-labadi/gists%7B/gist_id%7D",
    starred_url:
      "https://api.github.com/users/Yousef-labadi/starred%7B/owner%7D%7B/repo%7D",
    subscriptions_url:
      "https://api.github.com/users/Yousef-labadi/subscriptions",
    organizations_url: "https://api.github.com/users/Yousef-labadi/orgs",
    repos_url: "https://api.github.com/users/Yousef-labadi/repos",
    events_url:
      "https://api.github.com/users/Yousef-labadi/events%7B/privacy%7D",
    received_events_url:
      "https://api.github.com/users/Yousef-labadi/received_events",
    type: "User",
    site_admin: false,
    name: "Yousef-Labadi",
    company: null,
    blog: "yousef-labadi",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 9,
    public_gists: 0,
    followers: 0,
    following: 1,
    created_at: "2017-04-19T12:23:15Z",
    updatedat: "2023-04-18T22:54:07Z",
  },
  {
    login: "HamdanIbra",
    id: 124331374,
    node_id: "U_kgDOB2klbg",
    avatar_url: "https://avatars.githubusercontent.com/u/124331374?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/HamdanIbra",
    html_url: "https://github.com/HamdanIbra",
    followers_url: "https://api.github.com/users/HamdanIbra/followers",
    following_url:
      "https://api.github.com/users/HamdanIbra/following%7B/other_user%7D",
    gists_url: "https://api.github.com/users/HamdanIbra/gists%7B/gist_id%7D",
    starred_url:
      "https://api.github.com/users/HamdanIbra/starred%7B/owner%7D%7B/repo%7D",
    subscriptions_url: "https://api.github.com/users/HamdanIbra/subscriptions",
    organizations_url: "https://api.github.com/users/HamdanIbra/orgs",
    repos_url: "https://api.github.com/users/HamdanIbra/repos",
    events_url: "https://api.github.com/users/HamdanIbra/events%7B/privacy%7D",
    received_events_url:
      "https://api.github.com/users/HamdanIbra/received_events",
    type: "User",
    site_admin: false,
    name: "Ibrahim Hamdan",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 11,
    public_gists: 0,
    followers: 3,
    following: 2,
    created_at: "2023-02-03T04:05:46Z",
    updated_at: "2023-04-02T22:22:25Z",
  },
];

function Team() {
  // const val = useRef(0);
  // useEffect(() => {
  //   if(val.current===0){
  //     getUsersData();
  //     val.current++;
  //     if(val.current===3){
  //       return;
  //     }
  //   }

  // }, []);

  // const getUsersData = () => {
  //   users.slice(0, 3).forEach((item) => {
  //     fetch(`https://api.github.com/users/${item}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         updatedUser.unshift(data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  // };

  return (
    <>
      <Nav />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {updatedUser.map((item, idx) => (
          <div className="rounded-lg" key={idx}>
            <TeamComponent team={item} />
          </div>
        ))}
      </div>


      <h1 className=" ml-4 mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Checkout our <span className="text-blue-600 dark:text-blue-500">Github Repo</span> </h1>
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
          <span className="ml-2">GitHub</span>
        </a>
      </div>
    </>
  );
}

export default Team;
