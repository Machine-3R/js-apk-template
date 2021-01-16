# js-apk-template

I want to create js applications for my Oculus Quest. So i need a way to 
streamline the creation of apkfiles to sideload into my Quest.
Therefore I need a project template.

Being an amateur I might use your help and advise...but please, babysteps..

Feel free to fork this project.

## using:
- npm
    - rimraf to delete files and folders (i'm on windows)
    - mkdirp to create files and folders (still on windows)
    - webpack ( from ./src folder to ./build folder)
        (https://webpack.js.org/)
    - androidjs (from ./build to create ./dist/ apk file)
        (https://android-js.github.io/)

## tasks:
- done:
    - create github repository with license (MIT) and readme (this file)
    - clone and create project
    - create package.json
    - create package.json/scripts/init: npm install & npm init
    - empty these fields before npm init
        - package.json
            .name
            .description
            .author
    - remove these fields before npm init
        - package.json
            .repository
            .bugs
            .homepage
    - change this readme to markup
    - setup webpack and create ./build folder
    - create package.json/scripts/clean: delete ./build
    - create package.json/scripts/build: clean && webpack

- todo:
    - create build/package.json
        - set androidjs fields
        - copy dependencies
    - create package.json/scripts/apk: build && androidjs build
    - create branch to test new idea
        - update package.json/scripts/init to start with a minimal src
            - i should start with script: init creating src from 
            `androidjs init` and use script:build to copy and pack files. Will 
            try it in a branch. Issue created at 
            https://github.com/android-js/androidjs/issues/162, because 
            currently `androidjs init` has 2 prompts

- extra:
    - find a way to use an android emulator to test apk
    - create package.json/scripts/test: test apk

- issues:
    - none yet

## usage: !!!! UNTESTED YET !!!!
    ```
    $ <fork this project>
    $ git clone <your-forked-project>
    $ cd <path/to/your/project>
    $ npm run init
    ```
