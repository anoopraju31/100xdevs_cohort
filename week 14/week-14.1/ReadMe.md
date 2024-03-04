# Week 14.1 | Into to Next.js (Client Side)

## Contents:
- [**Introduction to Next.js**](#introduction-to-nextjs)
- [**Problem with React.js**](#problem-with-reactjs)
- [**SEO Optimisation**](#seo-optimisation)


### Introduction to Next.js
- **Next.js** is a React framework for building full-stack web applications. 

### Problem with React.js
1. In React Project, we have maintain a seperate repository for backend and has to deploy seperately.
2. React does not provide out of the box routing (We had to use react-router-dom).
3. React is not SEO Optimised
4. Waterfalling Problem

### SEO Optimisation
- Google has a bunch of crawlers that hit websites and figure out what the website does.
- These crawlers ranks the website based on the HTML it gets back.
- The crawlers don't usually run JS code and renders the webpage to see the final output.
- A website build using React.js, initially has a boiler plate HTML, which gets hydrated after the react code gets rendered.
- This isn't suitable for SEO Crawlers, as the HTML they gets is just a boiler plate that does not specific any information regarding the website.
- ![](images/seo.png)
- Thats where Next.js comes into picture, It also Static Site Generation(SSG) and Server Side Rendering(SSR).