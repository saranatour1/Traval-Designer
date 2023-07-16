import React, { useEffect, useState } from "react";
import Embed from "react-embed";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDateTime from "../../hooks/useDateTime";
import usePost from "../../hooks/usePost";

// eslint-disable-next-line react/prop-types
function Post({ item, onDeleteProp, showPopUp, onEdit }) {
  // use state for the number of comments and number of likes

  const [content, setContent] = useState("");

  const { likes, comments, likers, isAuthor, addOrDelete } = usePost({ item });

  const [expanded, setExpanded] = useState(false);

  const { getTimeAgo } = useDateTime();

  const navigate = useNavigate();

  const [timeAgo, setTimeAgo] = useState("");

  const location = useLocation();

  useEffect(() => {
    location.pathname.includes("post") ? setExpanded(true) : setExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    function extractLinks(content) {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const links = content.match(urlRegex) || [];
      const text = content.split(urlRegex);

      return { links, text };
    }

    const { links, text } = extractLinks(item.content);

    setContent(text);

  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo(item.createdAt));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const deletePost = () => {
    fetch(`http://localhost:8000/api/trips/${item._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        onDeleteProp(item._id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function isYoutubeLink(url) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(url);
  }


  return (
    <>
      {/* Make it into a component later */}
      <div className="rounded-xl border p-5 shadow-md w-full sm:w-11/12 bg-white mx-auto mt-3">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-slate-400">
              <img src={item?.author?.defaultUserInformation?.imgUrl} alt="" />
            </div>

            <Link
              to={`/user/${item.author._id}`}
              className="text-lg font-bold text-slate-700"
            >{`${item.author.firstName} ${item.author.lastName}`}</Link>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 mt-2 sm:mt-0">
            {item.labels.map((label, idx) => (
              <button
                key={idx}
                className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold"
              >
                {label}
              </button>
            ))}
            <div className="text-xs text-neutral-500">{timeAgo} </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold">
            {" "}
            <Link to={`/post/${item._id}`}>{item.title}</Link>{" "}
          </div>
          <div className="text-sm text-neutral-600 text-clip">
            {expanded ? (
              <>
                {content.map((segment, index) => (
                  <React.Fragment key={index}>
                    {segment.match(/(https?:\/\/[^\s]+)/g) ? (
                      <>
                        {isYoutubeLink(segment) ? (
                          <Embed
                            url={
                              segment +
                              "?showinfo=0&enablejsapi=1&origin=http://localhost:5173"
                            }
                          />
                        ) : (
                          <iframe
                            src={segment}
                            name="iframe_a"
                            title="Iframe Example"
                            width={1260}
                            height={360}
                          ></iframe>
                        )}
                      </>
                    ) : (
                      <p key={index}>{segment}</p>
                    )}
                  </React.Fragment>
                ))}
                {/* <p className="my-4">{item.content}</p> */}
              </>
            ) : (
              <p className="my-4">
                {item.content.substring(0, 20)}
                ...
                <Link to={`/post/${item._id}`}>Show more</Link>{" "}
              </p>
            )}
            {expanded &&
              item.toDoList.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <input
                    disabled={true}
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <p className="text-gray-800">{item.content}</p>
                </div>
              ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 sm:space-x-8">
              <div
                className="flex cursor-pointer items-center transition hover:text-slate-600"
                onClick={() => navigate(`/post/${item._id}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span>{item.comments.length}</span>
              </div>

              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <button onClick={() => addOrDelete(item._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </button>
                <span>{likes}</span>
              </div>

              {isAuthor && (
                <>
                  <button
                    className="text-slate-500 hover:text-slate-600"
                    onClick={() => deletePost()}
                  >
                    delete
                  </button>

                  <button
                    className="text-slate-500 hover:text-slate-600"
                    onClick={() => {
                      showPopUp();
                      onEdit(item);
                    }}
                  >
                    edit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
