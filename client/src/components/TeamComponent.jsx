import React from 'react'
import { Link } from 'react-router-dom';

function TeamComponent({team}) {
  // console.log(team)
  return (
    <div className="">
        <div className="max-w-lg mx-auto my-10  rounded-lg shadow-md p-5">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={team.avatar_url}
            alt="Profile picture"
          />
          <h2 className="text-center text-2xl font-semibold mt-3">{team.name}</h2>
            <small className='text-base text-gray-900 dark:text-white'>
              <div className="flex justify-center">
                <Link className='text-center' to={team.html_url}>@{team.login}</Link>
              </div>
            </small>
          <p className="text-center text-gray-600 mt-1">Software Engineer</p>
          <div className="flex justify-center mt-5">

            <a href={team.blog || team.html_url} className="text-blue-500 hover:text-blue-700 mx-3">
              LinkedIn
            </a>
            <a href={team.html_url} className="text-blue-500 hover:text-blue-700 mx-3" target='_blank' rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold">Bio</h3>
            <p className="text-gray-600 mt-2">
            {team.bio}
            </p>
          </div>
        </div>
      </div>
  )
}

export default TeamComponent;