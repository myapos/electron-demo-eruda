# electron-demo-eruda

A demo project built with electron, vue, vite to showcase eruda library

# Tools and version

node version should be >20. Built with pnpm version 10.11.0

- `nvm use 20`
- `npm install -g pnpm@latest`

# Installation

- packages `./clearInstall.sh`
  To use electron you have to install the environemnt first with the command.
- electron `node node_modules/electron/install.js`. It is already installed in the `clearInstall.sh` script

# Remote debugging

- serveo and console.re
  Clone, install and run console.re locally (client and server)
  `ssh -R mylog:80:localhost:3000 serveo.net`
  `ssh -R mylog:80:localhost:8088 serveo.net`
- Use them in the ad script --> See myCreative.html

# Console.re

- `https://github.com/kurdin/console-remote-server?tab=readme-ov-file`

#Tunneling

Has to support websockets
Other tools for Tunelling

- https://pagekite.net/
- https://serveo.net/
- localtunnel

#TODOs

- Create some more ad banners and display them : OK
  - multiple ad dimensions, bottom banner ads, left and right banners, top banner, inline ad --> OK
- Investigate for fluid and responsive ads --> OK
  - top ad na dw an kanei k gia mobile --> OK
  - na balw ena 100X90 --> OK
- Use some more tools
