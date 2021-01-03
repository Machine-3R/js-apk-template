# js-apk-template

I want to create js applications for my Oculus Quest. So i need a way to 
streamline the creation of apkfiles to sideload into my Quest.
Therefore I need a project template.

Being an amateur I might use your help and advise...but please, babysteps..

Feel free to fork this project.

## using:
- npm
    - rimraf to delete files and folders (i'm on windows)
    - webpack (to create ./build folder from ./src folder)
        (https://webpack.js.org/)
    - androidjs (to create ./src and apk file from ./build)
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
    - create package.json/scripts/apk: build && androidjs build
    - update package.json/scripts/init to start with a minimal src

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
