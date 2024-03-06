# Week 14.2 | Intro to Next.js (Server Side)

### Contents - 
- [**Backend in Next.js**](#backend-in-nextjs)
- [**Recap of data fetching in React**](#recap-of-data-fetching-in-react)


### Backend in Next.js
- Next.js is a full stack framework.
    ![](images/nextjs-full-stack.png)
- This means the same server handles the frontend and backend request.
    ![](images/next-frontend.png)
    ![](images/next-backend.png)
- Next.js allows us to maintain a single codebase for our application rather than maintaining seperate codebase for frontend and backend which we used to do with MERN.
- This also ensure that there are **no CORS issues**, as same domain name is for both backend and frontend.
- This also makes deployment easier, we only have to deploy a single codebase, where as on MERN, we have to deploy both frontend and backend seperately.


### Recap of data fetching in React
- This is a card website that let's a user see their name and email from the given endpoint.
    ![](images/card-app.png)
- Now lets look at the UserCard component -
    ![](images/user-card-component.png)
- Now see how to data fetching is happening on the client
    ![](images/user-card--data-fetching.png)
    - First we send a request to the endpoint and get backs an empty HTML.
    - Second request is send to get the JS scripts.
    - Then the UserCard component get rendered initial with a spinner and backend request is send to the server to fetch the user details.
    - After fetching the user details it gets rendered on the client side.
    