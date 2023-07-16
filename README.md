## Table of Contents

## Table of Contents

- [Introduction](#introduction---travel-designer-an-application-for-sharing-travel-ideas)
- [Setup](#setup)
- [Backstory](#backstory)
- [Contributors](#contributors)
- [Tools used](#tools-used)
- [Functionality](#functionality)
  - [Sign in and Sign Up pages](#sign-in-and-sign-up-pages)
    - [Demo](#demo)
  - [Dashboard](#dashboard)
    - [Demo](#demo)
  - [Logged in profile pages](#logged-in-profile-pages) 
    - [Demo](#demo)
  - [Other's profiles](#others-profiles)
    - [Demo](#demo)
  -  [Team](#Team)
    - [Demo](#demo)
    - [Issues](#issues)
- [Conclusion](#conclusion)

    



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

So, let's talk about the functionality by telling the user story:

### Main Page

Once the user visits the webpage, they are met with a search bar. The webpage will ask them to accept location access. Then, based on the coordinates, the 10 places near that coordinate will appear on the search page.

If the user wants to search for a place of their choice, the data gets sorted to include both the new places and the old nearby places.
![First Time Users](https://github.com/saranatour1/Traval-Designer/assets/77834808/22b1462b-6388-47fd-a7d8-ec8fee4595b4)

If they want to search a place, Let's say Nablus: 
![Search Result for the City of Nablus](https://github.com/saranatour1/Traval-Designer/assets/77834808/c52e5a4f-c0e8-4cd7-ad96-c399eb586bfb)

Then If you navigate to the Sign in or sign up pages this is the scenario :

### Sign Up
You will be met with this page, where all validations are required! ,Next Let's sign up
  
![Regestration Page](https://github.com/saranatour1/Traval-Designer/assets/77834808/22d7120f-f8ef-4a33-a15c-2a279115fe5b)

  - How the sign up proccess would look like , Clean Regestration : 
![Regestration Successfull page](https://github.com/saranatour1/Traval-Designer/assets/77834808/16d186a0-3126-47e3-840d-33cee896d265)
- But what if my Passwords don't match?
![Validation Error](https://github.com/saranatour1/Traval-Designer/assets/77834808/8241594e-2f62-4da6-be85-9bec76b0edcd)

### Sign in 
Upon Successful Regestry , we navigate to the Sign in page
![Unsuccessful sign in](https://github.com/saranatour1/Traval-Designer/assets/77834808/074995d7-c520-4273-8f53-d11c121e7dc9)


### Dashboaard 
Upon sucseefull sign in you will be met with this dashboard
![Dashboard](https://github.com/saranatour1/Traval-Designer/assets/77834808/39dac751-c304-48f5-a9aa-341995bbc368)

 - You Can Like Peoples comments
 - you can Post posts
 - you can delete your posts or your comments, you can edit your post as well. 
![Screen Shot 2023-07-06 at 00 03 57](https://github.com/saranatour1/Traval-Designer/assets/77834808/d73d2276-42a4-4f70-8822-6ffcd3f46743)

### Post and Comment Page : 
- when you click on a post, you will see the post details and people who commented on it and you can comment yourself!
![Screen Shot 2023-07-16 at 15 45 29](https://github.com/saranatour1/Traval-Designer/assets/77834808/c2ca8e94-c693-4835-bb33-c344d5d8016c)
![Screen Shot 2023-07-16 at 15 45 58](https://github.com/saranatour1/Traval-Designer/assets/77834808/47b170a7-1f51-4763-8fa6-0cf8e7317a74)

### The profile page :
This is where you will see your posts, information , and posts you have collaborated on (github wanna be) <sub><sup>Please don't sue , we are open for work</sup></sub> , you will edit your posts, and delete them if you want. 
![Screen Shot 2023-07-16 at 15 40 38](https://github.com/saranatour1/Traval-Designer/assets/77834808/1a68afbb-9059-4eec-8439-a3ef9b5559c1)

### Our team page : 
**Becasue we can** 
![Screen Shot 2023-07-06 at 00 34 53](https://github.com/saranatour1/Traval-Designer/assets/77834808/1c7b24ae-7116-437f-a934-5b3baaf30ff2)

 
# Conclusion

Working on this project has been an incredible experience for our team. We thoroughly enjoyed collaborating and leveraging our individual strengths to ensure the success of the project. Throughout the development process, we showcased effective time management and communication skills, allowing us to work efficiently and harmoniously.

One of the remarkable aspects of our team was the diverse problem-solving approaches each member brought to the table. This diversity not only enriched our project but also fostered a respectful and collaborative environment where everyone's ideas were valued.

Although our project is already functional and delivers on its core objectives, we believe it has even more potential for growth. There are additional features and functionalities that we would like to implement in the future, enhancing the project's overall value and user experience. We plan to revisit the codebase, optimize it further, and continue adding new features to make it even more impressive.

Your feedback and criticism are essential to us, as they help us improve and refine our project. If you decide to use our code or have any suggestions, please don't hesitate to reach out to us. We would greatly appreciate it if you could show your support by giving us a star on the repository.

Finally, we learned a lot during this project in a limited period of time. We were all eager to learn and help each other, which made the experience even more enjoyable.

Thank you for taking the time to read about our project!

- Creators of Travel-Designer

<img src="client/src/assets/logo.svg" alt="Project Logo" width="256px" height="256px">


## a few issues (Very Late Section)
- Youtube 'http' issue : [Link](https://stackoverflow.com/questions/27573017/failed-to-execute-postmessage-on-domwindow-https-www-youtube-com-http)

- Maybe Don't use React Render because it's only for videos? : [Link](https://stackoverflow.com/questions/45677637/how-to-create-react-component-that-can-render-img-or-video-depending-on-api-data)

- Time Zone by area: [Link](https://stackoverflow.com/questions/1091372/getting-the-clients-time-zone-and-offset-in-javascript)

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
### disclaimer :
![Work in Progress](https://media2.giphy.com/media/Lr4HRF6DEEJo90SQXF/giphy.gif?cid=6c09b952ne4e3rkkvhqoq38gbl2auw7netoakq1zuvr6veez&ep=v1_stickers_related&rid=giphy.gif&ct=s)
