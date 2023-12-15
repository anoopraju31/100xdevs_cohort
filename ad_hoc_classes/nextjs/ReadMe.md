# Next.js

#### Problems with React.js
- Waterfalling 
    - In react, initially the index.html page will empty and later get filled with each consequent rendering.
- Not SEO optimised - 
    - Search Engine are designed to scrap through the html file and read the meta data from it. but in react, initially index.html is empty and after hydration only html page gets filled. but search engines dont run javascript, so they wont be able to hydrate the index.html page.
- Does not work in places js can't run (emails) -
    - In emails with custom styling uses html, and the email providers wont allow javascript to run on these emails for security reasons.
    - In this case, react is of no use without javascript support react can't render the html.   

#### How Next.js solves it?
- Server Side Rendering(SSR)
    - In SSR, the initial rendering happens in the server, were the empty index.html get fill by initial render.
    - The initial render renders the code that does not require the backend to check weather that particular code need to be rendered or not. In other words basically it renders the code that does not require any sort of authentication and authorization or that is publically available to all.
    - This let index.html page to have some content that the search engine can scrap on and also used for custom use cases like an email.
    - In SSR, the initial render will happen in the server and the consequent render will on client side.
    - Next.js used the capablities React.js and enhances it with added support for SSR for a better user experience.
    