# Week 27.1 | Intro to kubernetes

### contents:
- [**What is kubernetes**](#what-is-kubernetes)
- [**Before kubernetes**](#before-kubernetes)
- [**After kubernetes**](#after-kubernetes)

### What is kubernetes

- **Kubernetes** (popularly known as **k8s**) is a *container orchestration engine*, which as the name  suggests lets you create, delete, and update *containers*.
- This is useful when:
    - You have your docker images in the docker registry and want to deploy it in a cloud native fashion.
    - You want to not worry about patching, crashes. You want the system to auto heal.
    - You want to autoscale with some simple constructs.
    - You want to observe your complete system in a simple dashboard.

![](images/Screenshot_2024-06-01_at_1.54.06_AM.png)

**Note:** **Kubernetes** is also known as **k8s**. **K_ _ _ _ _ _ _ _ s**

### Before kubernetes

![](images/before-kubernetes-backend.png)
![](images/before-kubernetes-frontend-nextjs.png)
![](images/before-kubernetes-frontend-reactjs.png)


### After kubernetes

Your frontend, backend are all pods in your kubernetes cluster.

Kuberetes cluster is bunch of machines(node).
a pod is smallest unit in which we can run container.
a single pod can run multiple container
![](images/nodes-pods.png)
a pod is an abstraction over a container.
![](images/kubernetes-cluster.png)

#### Terminologies
##### Nodes
- In kubernetes, you can create and connect various machines together, all of which are running `kubernetes`. Every machine here is known as a `node`
- There are two types of nodes:
    1. **Master Node (Control Pane):**  The node that takes care of deploying the containers/healing them/listening to the developer to understand what to deploy.
    2. **Worker Nodes:** The nodes that actually run your application (Backend/Frontend).
