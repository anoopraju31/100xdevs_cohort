# week 15.21 | Docker Intro

## Contents:
- [**Why Docker?**](#why-docker)
- [**Containerization**](#containerization)
    - [**What are containers**](#what-are-containers)
    - [**Why containers**](#why-containers)
    - [**Benifits of using containers**](#benifits-of-using-containers)
- [**Installing Docker**](#installing-docker)
- [**Inside Docker**](#inside-docker)
    - [**Docker Engine**](#docker-engine)
    - [**Docker CLI**](#docker-cli)
    - [**Docker Registry**](#docker-registry)
- [**Images vs Containers**](#images-vs-containers)
    - [**Docker Image**](#docker-image)
    - [**Docker Container**](#docker-container)


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

#### Why containers
Setting up a project locally isn't easy, depending on the operating system used the steps to run the projects varies. It becomes hard to keep track of dependencies as the project grows. Sometimes some of these dependencies or other softwares are already present on your system and are of different verions, this also cause issues setting up projects locally. 
That to not, event after the project gets completed most of these dependencies will still be in the system. 
That where containers comes into action, a container create an isolate environment to run the project with all the neccesary dependencies. With a single command the project is up and running regardless of the operating system you are using.

#### Benifits of using containers
![](images/containers-benifits.png)
- We can describe all the configurations in a single file.
- We can run our projects in an isolated environment.
- Setting projects locally a breeze and with a single command.
- Makes installing auxiliary services/DBs easy

### Installing Docker
- We could install docker for [**here**](https://docs.docker.com/engine/install/).
![](images/docker-installation.png)

- Also make sure that you are able to run the `docker cli` locally -
![](images/docker-cli.png)

### Inside Docker
![](images/docker-flow.png)
Suppose we want to run a mongo container locally. we will run the command `docker run mongo` in the terminal. this is command is run with the help of `docker CLI`. the cli will talk to the `docker engine` to run the mongo container. Now the docker engine will check if the mongo image is present locally if so it create a mongo container and run it. If no mongo image present locally, the docker engine will pull the mongo image from the docker registry and the run the mongo container.

#### Docker Engine
- Docker Engine is an open-source containerization technology that allows developers to package applications into container.
- Containers are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

#### Docker CLI
The command line interface lets us talk to the `docker engine` and lets us start/stop/list containers.
```bash
docker run -d -p 27017:27017 mongo
```
#### Docker Registry
- A Docker registry is a system for versioning, storing and distributing Docker images. 
- It is similar to `github`, but it lets you push images rather than sourcecode.
- Docker’s main registry - [Docker Hub](https://dockerhub.com/)
- DockerHub is a hosted registry used by default when installing the Docker engine, but there are other hosted registries available for public use such as AWS and Google's own registries.

### Images vs Containers
#### Docker Image
A Docker image is a lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files.

#### Docker Container
- A container is a running instance of an image. 
- It encapsulates the application or service and its dependencies, running in an isolated environment.
- We can create multiple containers from the same image.
![](images/images-containers--registry.png)