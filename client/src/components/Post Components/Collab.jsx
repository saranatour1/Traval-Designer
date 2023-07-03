import React, { useState } from "react";

function Collab({ users }) {
  const [collaborators, setCollaborators] = useState(users);
  const [searchField, setSearchField] = useState("");
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);

  const handleInputFieldChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  const handleAddCollaborator = (collaborator) => {
    setSelectedCollaborators([...selectedCollaborators, collaborator]);
  };

  const handleRemoveCollaborator = (collaborator) => {
    setSelectedCollaborators(
      selectedCollaborators.filter((item) => item._id !== collaborator._id)
    );
  };

  const filteredCollaborators = collaborators.filter((collaborator) => {
    if (searchField === "") {
      return true;
    } else {
      return (
        collaborator.firstName.toLowerCase().includes(searchField) ||
        collaborator.lastName.toLowerCase().includes(searchField) ||
        collaborator.email.toLowerCase().includes(searchField)
      );
    }
  });

  const availableCollaborators = filteredCollaborators.filter(
    (collaborator) =>
      !selectedCollaborators.find((item) => item._id === collaborator._id)
  );

  return (
    <div className="mx-auto w-full">
      <div className="flex md:flex-row flex-col items-start justify-center px-6 py-8 w-full">
        <div
          id="popover"
          className="transition duration-150 ease-in-out md:mt-0 mt-8 top-0 left-0  w-10/12 md:w-80"
        >
          <div className="w-full bg-white rounded shadow-2xl">
            <div className="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
              <div className="mx-auto">
                <input
                  type="text"
                  className="w-52 ml-auto mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search a Collaborator"
                  value={searchField}
                  onChange={handleInputFieldChange}
                />
              </div>
              <div className="mt-4">
                {availableCollaborators.length > 0 ? (
                  <ul>
                    {availableCollaborators.map((collaborator, index) => (
                      <li key={index}>
                        {collaborator.firstName} {collaborator.lastName} -{" "}
                        {collaborator.email}
                        <button
                          onClick={() => handleAddCollaborator(collaborator)}
                        >
                          Add
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No more people found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Selected Collaborators:</h3>
          <ul>
            {selectedCollaborators.map((collaborator) => (
              <li key={collaborator._id}>
                {collaborator.firstName} {collaborator.lastName} -{" "}
                {collaborator.email}
                <button
                  onClick={() => handleRemoveCollaborator(collaborator)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Collab;
