Timetable app based on Angular 2 Quickstart seed project

Reference
https://angular.io/docs/ts/latest/guide/setup.html

#Git
Get git docker container if you don't have git locally
docker build -f Dockerfile_git -t kuldeeparyadotcom/git:snapshot .

Run a container to run Git (Mind volume that you're mounting)
docker run --rm -it -v /Users/KD/timetable:/data kuldeeparyadotcom/git:snapshot

#Node
Image Creation
docker build -f Dockerfile_node -t kuldeeparyadotcom/node:snapshot .

Run a container to run node (Mind volume that you're mounting)
docker run -it --name timetable_node -p 3000:3000 -p 3001:3001  -v /Users/KD/timetable:/data kuldeeparyadotcom/node:snapshot

Get in to quickstart_node container to execute node commands
docker exec -it timetable_node /bin/bash

#Code Editor
You can pick up any code editor of your choice.
i.e. http://code.visualstudio.com
Open your code directory i.e. /Users/KD/timetable and start modifying Angular 2 Quick Start Seed project.

Thank You!
