# Week 11.1 - Serverless Fns

## Contents:
- **What are backends servers?**
- **What are Serverless Backends**
- **Famous Serverless Providers**
- **When Should We use a serverless architecture?**
- **Cloudflare Worker Setup**
- **How cloudflare workers work**
- **Initializing a worker**
- **Deploying a worker**
- **Adding express to it**
- **Using hono**
- **Middlewares**
- **Connecting to DB**

### What are backends servers?
- We have used **express** to create a Backend server and the way we run it usually is **node index.js** which starts a process on a certain port(usually 3000).
- When we have to deploy the it on the internet, we usually go with any of the cloud providers like AWS, GCP, Azure or Cloudflare.
- After choosing the cloud provider of our choice, we need to rent a VM(Virtual Machine) and deploy our app.
- Put it in an Auto Scaling Group.
- Deploy it in a Kubernetes Cluster.
- There are few Downsides to doing this - 
    - Taking care of how/when to scale.
    - Base cost even if no one is visiting out website.
    - Monitoring various servers to make sure no server is down.
    