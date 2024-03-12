# week 15.21 | Docker Intro

## Contents:
- [**Why Docker?**](#why-docker)
- [**Containerization**](#containerization)
    - [**What are containers**](#what-are-containers)
    


### Why Docker?
Docker is a powerful platform that serves several purposes in the development, deployment, and running of applications. Below are the reasons why it is used:
1. **Containerization of Applications:** 
    - Docker allows us to package our application and its dependenices into a container, which is a lightweight, standalone and executable software package.
    - This containerization ensures that the application run consistently across different computing environments from development to staging to production.
2. **Running Other People's Code and Project:**
    - With docker, we can easily run software and applications build by others without worrying about the setting up the required environment or dependenices.
    - This is because all the necessary components are included within the container.
3. **Running Common Software Packages:**
    - Docker provides the ability to run common software packages such as databases(MongoDB, Postgres, etc.) within containers.
    - This means we can quickly deploy and manage these services without the need  to install and configure them directly on out host machine.

### Containerization
#### What are containers
Containers are a way to package and distribute software applications in a way that makes them easy to deploy and run consistently across different environments. They allow us to package an application, along with all its dependencies and libraries, into a single unit that can be run on any machine with a container runtime, such as Docker.