# js-apk-template

I want to create js applications for my Oculus Quest. So i need a way to 
streamline the creation of apkfiles to sideload into my Quest.
Therefore I need a project template.

Being an amateur I might use your help and advise...but please, babysteps..
Feel free to fork this project.

using:
- npm
    - rimraf to delete files and folders (i'm on windows)
    - webpack (to create ./build folder from ./src folder)
        (https://webpack.js.org/)
    - androidjs (to create ./src and apk file from ./build)
        (https://android-js.github.io/)

tasks:
    done:
    - create github repository with license (MIT) and readme (this file)
    - clone and create project

    todo:
    - create package.json/scripts/init: androidjs init 
    - setup webpack and create ./build folder
    - create package.json/scripts/clean: delete ./build
    - create package.json/scripts/build: clean && webpack
    - create package.json/scripts/apk: build && androidjs build
    - update package.json/scripts/init to start with a minimal src
    - change this readme to markup

    issues:
    - none yet
