# Rush iToonz

A music app for people who want to look up albums by the band Rush. Users can search what albums they want to look up and click to see the album's description, track-listing, personnel, and release date.

## Demo

Short Demo here: https://www.youtube.com/watch?v=JICsV91VL5g

### iTunes API

https://itunes.apple.com/search?term=rush&entity=album

#### Component Hierarchy

                                    App.js
            __________________________|________________________
                      |             |                |
                    Header.js    Albums.js         Search.js
                                    |
                                Album.js
                                    |
                                AlbumDisplay.js
#### Screenshots

Home Page

![Screen Shot 2020-12-11 at 4 05 09 PM](https://user-images.githubusercontent.com/62581000/101954963-fc76aa80-3bca-11eb-8cc2-b9a05de83063.png)

CSS used to keep the albums inline (Located in the Albums.css file)

![Screen Shot 2020-12-11 at 4 12 08 PM](https://user-images.githubusercontent.com/62581000/101955381-aeae7200-3bcb-11eb-8db1-71eddd89103e.png)

Map function to populate the albums on to the page (Located in the Albums.js)

![Screen Shot 2020-12-11 at 4 15 40 PM](https://user-images.githubusercontent.com/62581000/101955632-309e9b00-3bcc-11eb-89eb-cb8e4b825611.png)

When you click on an album

![Screen Shot 2020-12-11 at 4 05 09 PM](https://user-images.githubusercontent.com/62581000/101955154-4eb7cb80-3bcb-11eb-9803-37449c3a48db.png)

Search function (Located in App.js)

![Screen Shot 2020-12-11 at 4 25 12 PM](https://user-images.githubusercontent.com/62581000/101956389-86c00e00-3bcd-11eb-9680-5d2f6ec4afd2.png)



##### Technologies Used

Programming Languages: HTML, CSS, and JavaScript

Framework: React.js

Deployed with Heroku

Deployed app here: https://rushitoonzapp.herokuapp.com/

Everything else below is the available scripts that you can use after installing create-react-app along with other documentation that you might find useful.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

###### Available Scripts

In the project directory, you can run:

###### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

###### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

###### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# sei-project-tworushitoonz
