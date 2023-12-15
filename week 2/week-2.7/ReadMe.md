# Git/Github


#### What is version control system?
- A system that keep track of our files or projects.
- it allows you to revert selected files to a previous state, revert the entire project to a previous state, compare changes over time, see who last modified someting so that we can know what might be causing a problem or what is the issue, who made it, and when with the details.

#### Types of Version Control Systems (VCS)
- There are 2 types VCS
    1. Centralized Version Control 
        ![Centralized Version Control](./images/centralizedversion_control.png)
        - Helps us backup, track and synchronize files
        - Keeps a single copy of the project.
        - the major drawback for this is common point failure, if the server is down no will be able to access the repositories.
        - It good with smaller teams working on smaller projects
        - examples: Subversion, Team Foundation Server
    2. Distributed Version Control ()
        ![Distributed Version Control](./images/distributed_version_control.png)
        - Each person working on the project has a copy of the project along with its history available within there machine.
        - Even if the main server goes down we can restore the repository from any of the team members.
        - In Distributed Version Control, the server doesn't have to online everytime to make changes, we can keep pushing the code to local copy of the repository we have push to the main repository whenever it is online and other members in the team can the pull the change made.
        - examples: Git, Mercurial
