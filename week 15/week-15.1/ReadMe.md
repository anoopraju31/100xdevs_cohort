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
- [**Port Mapping**](#port-mapping)
- [**Common Docker Commands**](#common-docker-commands)
- [**Dockerfile**](#dockerfile)
    - [**How to write a dockerfile**](#how-to-write-a-dockerfile)
    - [**Understand the common commands**](#understand-the-common-commands)
- [**Building images**](#building-images)
- [**Running images**](#running-images)
- [**Passing in env variables**](#passing-in-env-variables)
- [**More Commands**](#more-commands)
- [**Pushing to dockerhub**](#pushing-to-dockerhub)

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

### Port Mapping
As we know containers are an isolated environment, suppose we are running a mongo container.
```bash
docker run mongo
```
the mongoDB server running on PORT 27017 inside the container. Since the container is an isolate environment we cannot access the port 27017 directly.
that where port mapping comes into picture. the localhost request from the system is mapped to the container. 
```bash
docker run -p 27017:27017 mongo
```
![](images/port-mapping.png)

### Common Docker Commands
1. Pulling an image: `docker pull <image-name>`
2. Show all the image present locally: `docker images`
3. Start a container: `docker run <image-name>`
4. Start a container in detatched mode: `docker run -d <image-name>`
5. Start a container with port mapping: `docker run -p <port-number>:<port-number> <image-name>`
6. Show all running containers: `docker ps`
7. Push an image to a registry: `docker push <image-name>`
8. Kill a container: `docker kill <container-id>`
9. Remove an Image `docker rmi <image-name>`

### Dockerfile
- Docker builds images automatically by reading the instructions from a dockerfile which is a text file that contains all the commands, in order, needed to build a given image.
- A Docker image consists of read-only layers each of which represents a Dockerfile instruction. The layers are stacked and each one is a delta of the changes from the previous layer.

#### How to write a dockerfile
A dockerfile consists of 2 parts:
1. Base Image
2. Bunch of commands that we run on the base image (to install dependencies like Node.js).
This is an example of a dockerfile.
![](images/dockerfile.png)

Let's write our own Dockerfile
```dockerfile
FROM  node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

# commands before this runs we starts the container

CMD ["node", "dist/index.js"]
```
#### Understand the common commands
1. `WORKDIR`: Sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` instructions that follow it.
2. `RUN`: Executes any commands in a new layer on top of the current image and commits the results.
3. `CMD`: Provides default for executing a container. There can only be one CMD instruction in a Dockerfile.
4. `EXPOSE`: Informs Docker that the container listens on the specified network ports at runtime.
5. `ENV`: Set the environmental variables.
6. `COPY`: Allow files from the docker host to be added to the docker image.

### Building images
Since we have already added a dockerfile in our project, try building a `docker iamge` from it.
```bash
docker build -t image_name .
```
the dot (.) at the end represents where to build the images from.
![](images/docker-build.png)
Now lets look at our images, we should notice a new image created.
![](images/showing-docker-images-after-docker-build.png)

### Running images
``` bash
docker run -p 3000:3000 -d image_name
```
![](images/docker-container-running.png)

### Passing in env variables

```bash
docker run -p 3000:3000 -e DATABASE_URL="postgres://avnadmin:AVNS_EeDiMIdW-dNT4Ox9l1n@pg-35339ab4-harkirat-d1b9.a.aivencloud.com:25579/defaultdb?sslmode=require" image_name
```
The -e argument let’s us send in environment variables to your node.js app.

### More Commands
1. `docker kill`: to kill a container
``` bash
docker kill <container_id>
```
2. `docker exec`: to execute a command inside a container

lets look at some examples
- List all the contents of a container folder:
```bash
docker exec <container_name_or_id> ls
```
![](images/docker-exec.png)
- Running an Interactive Shell
```bash
docker exec -it <container_name_or_id> /bin/bash
```

### Pushing to dockerhub
Once we have created an image, we can push it to `dockerhub` to share it with the world. 
1. Sign Up/In to `dockerhub`
2. create a new repository.
![](images/docker-hub.png)
3. Login to docker cli
    1. docker login
    2. we might have to create an access token - https://docs.docker.com/security/for-developers/access-tokens/
4. Push to the repository
```bash
docker push your_username/your_reponame:tagname
```