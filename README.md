# Healthcare-Backend

$ npm init  -->  package.json
$ npm i bcrypt cloudinary cookie-parser cors dotenv express mongoose express-fileupload jsonwebtoken validator  -->  node_modules (folder), package-lock.json

Updated package.json
adding "type": "module",
and
    "start": "node server.js",
    "dev": "nodemon server.js"
inside "scripts" of "../package.json"

Before running the server on port 4000, install nodemon globally
   sudo npm install -g nodemon

Check installation
   nodemon -v

To start the development server, use the following command:
    npm run dev