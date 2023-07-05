## Table of Contents
- [Introduction](#Introduction)
- [Setup](#setup)
- [Backstory](#Backstory)
- [Contributers](#Contributers)
- [Tools used ](#Tools-used)
- [Functionality](#Functionality)
  - [Sign in and Sign Up pages](#Sign-in-and-Sign-Up-pages)
    - [Demo](#Demo)
  - [dashboard ](#dashboard)
    - [Demo](#Demo)
  - [Logged in profile pages](#Logged-in-profile-pages) 
    - [Demo](#Demo)
  - [other's profiles](#other's-profiles)
    - [Demo](#Demo)
  - [messages](#messages)
    - [Demo](#Demo)
  - [other functions](#other-functions)
    - [Search](#Search)
      - [Demo](#Demo)
    - [Custom error pages](#Custom-error-pages) 
      - [Demo](#Demo)
    - [issues](#issues)
 - [Conclusion](#Conclusion) 
    



## Introduction - Travel-Designer: An Application for Sharing Travel Ideas

<img src="client/src/assets/logo.svg" alt="Project Logo" width="256px" height="256px">


Welcome to Travel-Designer, a small project aimed at sharing travel stories and ideas with everyone. This application is designed to be convenient, easy to use, and doesn't require page refreshes!

This project was developed as part of the End-of-Bootcamp project with Axsos Academy. I had the pleasure of partnering with these talented developers:

- [Sara Natour](https://github.com/saranatour1)
- [Hamdan Ibrahim](https://github.com/HamdanIbra)
- [Yousef Labadi](https://github.com/Yousef-labadi)

Feel free to explore our code repository and contribute to make Travel-Designer even better!




### Setup:

To set up and run this project, please follow the steps below:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Change into the project directory:

    ```bash
    cd <repository-directory>

    ```
3. Navigate to the server directory: 
    ```bash
    cd server
    ```

4. Install the server dependencies:
    ```bash
      npm install
    ```

5. Go back to the main project directory:
    ```bash
      cd ..
    ```

6. Navigate to the client directory:
    ```bash 
      cd client
    ```

7. Install the client dependencies:

    ```bash
      npm install
    ```

8. Start the client development server: 

    ```bash
      npm run dev
    ```
9. In a separate terminal, go back to the server directory: 

    ```bash
      cd ../server
    ```

10. Start the server using nodemon: 

    ```bash 
      nodemon server.js
    ```
The website will now be accessible at localhost:5137 and the server will be running on localhost:8000. You are all set to use the application!

_______________________

### Backstory:

### Travel Buddy & Design App: Connect, Plan, and Explore Together! 
Our project is all about bringing travel enthusiasts closer. With our Travel Buddy & Design App, you can find like-minded travelers, create personalized itineraries, and share unforgettable experiences. Discover travel companions based on shared interests and desired destinations. Post trip updates, exchange travel stories, and seek advice from a vibrant community. Design your dream itinerary and receive valuable feedback. Seamlessly coordinate trips and communicate with fellow travelers through our integrated messaging system. Get inspired, forge new connections, and embark on exciting adventures. Join us on this journey of exploration and friendship, one travel buddy at a time. Feel free to contribute and make our Travel Buddy & Design App even more amazing! Let's make travel unforgettable!

## Contributers

- [Sara Natour](https://github.com/saranatour1)
- [Hamdan Ibrahim](https://github.com/HamdanIbra)
- [Yousef Labadi](https://github.com/Yousef-labadi)

## Tools used

- Front End:
  - Vite: Vite makes the life of developers easier. We used Vite-React-SWC to speed up our development server and bundle our website easily for the web.
  - React: React (SWP) is a JavaScript-based library that uses virtual DOM to manipulate data across all pages.
  - react-router-dom: for front-end routing.
  - Tailwind: for styling our components and making responsive pages.
  - Material UI: We used it to create ready-to-use React components.
  - GitHub REST API: to show general information about our team.

- Back End:
  - Node.js and Express: Fast, unopinionated, minimalist web framework for Node.js.
  - TripAdvisor API: to show general nearest information about the person's location by search.
  - Postman: for testing our REST API endpoints.
  - Node-Fetch: A lightweight module that brings the Fetch API to Node.js.
  - Mongoose: elegant MongoDB object modeling for Node.js.

- Database:
  - MongoDB.


 

## Functionality
  So, We will talk about the functionality by telling the user Story: 
  ### Main Page
  once the user visits the webpage, they are met with a search bar where the webpage will ask them to accept location access, then from the coordinates, the 10 places that are near that coordinate will appear in the search page. 
  if they want to search for a place of their choice, the data get's sorted to the new places, as well as the old nearby places.

  



### issues
Some of the issues we faced during the project were related to the problem of static files rendering. Here are a few resources that can make your life easier:
- [Stack overflow, running on the local host](https://stackoverflow.com/questions/62555499/django-react-the-resource-was-blocked-due-to-mime-type-text-html-mismatch)
- [Stack overflow, settings.py fix](https://stackoverflow.com/questions/25913849/django-static-file-not-loading)
- [whitenoise](https://whitenoise.readthedocs.io/en/latest/)

# Conclusion:

This was a fun project, and we enjoyed working together as a team to ensure its success. We demonstrated time management and soft skills by listening to each other and utilizing our strengths to complete tasks efficiently. We were amazed at how differently each of us approached problem-solving and delighted to work in a respectful team environment.

As a team, we believe this project has a future, and there are still some functionalities we did not have time to implement. We plan to revisit the repository, clean up the code, and add more features to make it even more presentable.

We would love to hear your feedback and criticism if you end up using our code. Please don't hesitate to reach out to us. And if you find our project useful, please consider giving us a star on the repository.

Finally, we learned a lot during this project in a limited period of time. We were all eager to learn and help each other, which made the experience even more enjoyable.

Thank you for taking the time to read about our project!

- Creators of Moods 

  ![image](https://user-images.githubusercontent.com/77834808/230228434-15fbe2c1-dc37-4518-9f00-9affb391acb0.png)





# Traval-Designer
## Styled Ccomponents Source:
- The Sign Up and Sign In Form [Link](https://tailwindcomponents.com/component/simple-sign-in) 
- Simple Toast : [Link](https://tailwindcomponents.com/component/simple-toast)
- Nav Bar : [Link](https://tailwindui.com/components/application-ui/navigation/navbars)
- React Modal : [Link](https://mui.com/material-ui/react-modal/)
- Steps : [Link](https://mui.com/material-ui/react-stepper/)
- posts : [Link](https://tailwindcomponents.com/component/user-post-card)
- adding collaborators : [Link](https://tailwindcomponents.com/component/free-tailwind-css-popover-component)
- comment form : [Link](https://tailwindcomponents.com/component/comment-form)
- Loading : [Link](https://tailwindcomponents.com/component/loading-1)
- Edit Button : [Link](https://tailwindcomponents.com/component/animated-edit-button)
- Comment Form : [Link](https://tailwindcomponents.com/component/comment-form)
## General Knowldge Sources:
- Vite + why Vite : [Link](https://vitejs.dev/guide/why.html)
- Fetch Api MDN : [Link](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 
- active style Link : [Link](https://v5.reactrouter.com/web/api/NavLink/activeclassname-string)
- resize for ract -did not find anything else , can be done in CSS media queries- : [Link](https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react)

- jwt header :[Link](https://stackoverflow.com/questions/61964623/i-want-to-get-my-jwt-value-from-cookies-in-browser)

- click outside an element : [Link](https://stackoverflow.com/questions/32553158/detect-click-outside-react-component)

### Next steps
- [] Remove any unused code.
- [] Add Hooks instead of repeated code