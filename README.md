# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was configured to use TypeScript with \
`npx create-react-app my-app --template typescript` \
https://create-react-app.dev/docs/adding-typescript

Placeholder images are provided by [Lorem Picsum](https://picsum.photos/).

## See it running

https://alexandre-jung.github.io/react-responsive-signup-form/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Run the app in Docker (development)

### Build the image

`docker build -t signup-form:dev . --rm` \
`docker build -t signup-form:dev . --rm --no-cache` \
(use --no-cache to rebuild)

### Create the container without starting it

`docker create -p 3000:3000 --name signup-form-app signup-form:dev`

### Create and start the container

`docker run -p 3000:3000 --name signup-form-app signup-form:dev` \
`docker run -p 3000:3000 [--rm] --name signup-form-app signup-form:dev` \
(use --rm to remove the container after it finished running)

### Run the container

`docker container start signup-form-app`

### Stop the container

`docker stop signup-form-app`

### Remove the container

`docker rm signup-form-app`

### Delete the image

`docker image rm signup-form:dev`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Source articles & pages

Dockerizing a React app https://mherman.org/blog/dockerizing-a-react-app/ \
Node.js Docker images https://hub.docker.com/_/node

### Docker documentation

https://docs.docker.com/engine/reference/commandline/build/ \
https://docs.docker.com/engine/reference/commandline/create/ \
https://docs.docker.com/engine/reference/commandline/start/ \
https://docs.docker.com/engine/reference/commandline/run/ \
https://docs.docker.com/engine/reference/commandline/rm/ \
https://docs.docker.com/docker-for-windows/networking/ \
https://docs.docker.com/engine/reference/commandline/image_rm/
