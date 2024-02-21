💻
# Mern-Auth
view:
1>>> Postman test
![postmantest](https://github.com/akku27-cse/Mern-Auth/assets/115920400/f05954c1-bc1a-49df-b82a-07afd23d68d6)

2>>> PostMan token Test
![postman-token-test](https://github.com/akku27-cse/Mern-Auth/assets/115920400/24baabd9-3e20-40de-937c-943e9767ef7d)

3>>> Databse view
![image](https://github.com/akku27-cse/Mern-Auth/assets/115920400/e5781e7c-e76f-4eda-bbf5-07be2d7d1a5a)

##Installation 
1.Initialize node Project
```shell
npm init -y
```
2.Express
```shell
npm i express
```
3.Install Mongoose
```shell
npm i mongoose
```
4.Install Cors(for sending response to client)
```shell
npm i cors
//expamle
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
5.Install bcryptjs(for use hashed password)
```shell
npm i bcryptjs
ex==//
To hash a password:

var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

To check a password:

// Load hash from your password DB.
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not_bacon", hash, function(err, res) {
    // res === false
});
 
// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true
});

Auto-gen a salt and hash:

bcrypt.hash('bacon', 8, function(err, hash) {
});

```
5.Install jwt (for json Web Token)
```shell
npm i jsonwebtoken

ex==//
const express = require('express'); 
const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken'); 

const app = express(); 

// Set up Global configuration access 
dotenv.config(); 

let PORT = process.env.PORT || 5000; 
app.listen(PORT, () => { 
console.log(`Server is up and running on ${PORT} ...`); 
}); 

// Main Code Here // 
// Generating JWT 
app.post("/user/generateToken", (req, res) => { 
	// Validate User Here 
	// Then generate JWT Token 

	let jwtSecretKey = process.env.JWT_SECRET_KEY; 
	let data = { 
		time: Date(), 
		userId: 12, 
	} 

	const token = jwt.sign(data, jwtSecretKey); 

	res.send(token); 
}); 

// Verification of JWT 
app.get("/user/validateToken", (req, res) => { 
	// Tokens are generally passed in header of request 
	// Due to security reasons. 

	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY; 
	let jwtSecretKey = process.env.JWT_SECRET_KEY; 

	try { 
		const token = req.header(tokenHeaderKey); 

		const verified = jwt.verify(token, jwtSecretKey); 
		if(verified){ 
			return res.send("Successfully Verified"); 
		}else{ 
			// Access Denied 
			return res.status(401).send(error); 
		} 
	} catch (error) { 
		// Access Denied 
		return res.status(401).send(error); 
	} 
});
```
## Fronted Install
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

1.React
```shell
npx i create-react-app userauth
```
2.React-router-dom
```shell
npm i react-router-dom
```
3.Install axios(send request to backend)
```shell
npm i axios

ex==//
axio.post("http://localhos:5000/api/signup)
```
4.git command 
(basic git commad use in GitHub when first project are added there has some different command like git repository link or git push main)
```shell
git init
git status
git add .
git commit
git push
git pull
```



