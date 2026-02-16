# MERN-User-manager-app

About project:

This is a full-stack web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It is a simple application to manage user details.
It can be used for creating/editing/deleting users info.

---------------------------------------------------------------------

Tech Stack:

Frontend: React.js, JavaScript (ES6+), HTML5, Tailwindcss

Backend: Node.js,Express.js

Database:MongoDB, Mongoose driver

---------------------------------------------------------------------

Source code repository :

https://github.com/DharaniSettipalli/MERN-User-manager-app-undep

---------------------------------------------------------------------

Deployed link to the live application:

https://mern-user-manager-app-ui.vercel.app/allUser

(front end deployed on vercel, backend deployed on Render)

---------------------------------------------------------------------

Localhost Setup instructions:

1️⃣ Clone the Repository: Create a new folder and Open a terminal or command prompt from the new folder, clone the repo with below command.

git clone https://github.com/DharaniSettipalli/MERN-User-manager-app-undep.git

change directory using below command:

cd MERN-User-manager-app-undep

2️⃣ Backend Setup:

From MERN-User-manager-app-undep directory, open a terminal and Navigate to backend directory and install packages with below commands.

cd backend => to navigate to backend folder

npm install => install the required backend packages

Open .env file inside the backend folder and add your own MONGO_URL. Please dont't change the PORT variable in the .env file.

MONGO_URL => Details for creating the cluster and generating a connection string are present in the Mongo DB official site below.
For this project, we've used MongoDB Atlas connection string, and it is recommended way. Please access the below link and navigate to this section: "How to get your MongoDB Atlas connection string" to create your connection string.

https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string

Start the backend server: While in the backend terminal, run the below command and see the server and db connections were successful.

npm run dev


3️⃣ Frontend Setup:

Open a new terminal window, In terminal/command prompt, navigate to MERN-User-manager-app-undep directory and move to frontend directory.

cd frontend

From frontend directory, run npm install command to install the required front end packages

npm install

Once the required packages are installed, run the below command to start the application

npm run dev

Once both frontend and backend runs(in different terminals), navigate to the application by using the link in the frontend terminal/cmd window.


Brief explanation of how to add new fields to the form:

Frontend changes:

1. Navigate to frontend directory, open utils.js file under src directory.
2. Search for the variable userSchema and add an object(related to the input field) in the below format:
   
    for the mandatory/ required inputs:
   
               {
                  name: <field-name>,
                  label: <field-label>,
                  type: <field-input-type>,
                  required: true,
                  list: <list-with-sample-input-vaues> (required for mock data generation)
               }
   
   for the optional/ not mandatory inputs:

       {
            name: <field-name>,
            label: <field-label>,
            type: <field-input-type>,
            list: <list-with-sample-input-vaues>, (this is required for mock data generation)
         }
   Note: For now, we've not provided provision for select/dropdown inputs. The input field types supported are text, password, calendar, number.
   
4. Follow this step for adding validation rule to the mandatory input.
    Go to AddUser.jsx, in components folder under src directory.
    Under handleChange function, add a validation rule to validate the input as         below, for invalid case, setError to an error message. For valid case, setError     to empty string.

      For example: 

       if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]+$/i ;
            if (!emailRegex.test(e.target.value)) {
                setError('Invalid mail format, please enter valid email');
            } else {
                setError('');
            }

        }

Backend changes: 

FOLLOW THESE STEPS ONLY IF YOU ARE ADDING MANDATORY INPUT FIELDS IN YOUR FRONTEND. FOR OPTIONAL FIELDS, BACKEND CHANGES ARE NOT REQUIRED.

1. Navigate to backend directory,
   
   
   
     a) Go to UserModel.js under Models directory and add the input field(with the field name as per the name added in the frontend) in the userSchema         variable.
        The below is the format which checks the type and required attributes, one can add default values and set unique to true for the fields which          requires unique vaues like email/ user id.
   
   Format:
   
       <field-name-as-in-frontend>: {
                  type: <valid-mongoose-type-suitable-for-the-data>,
                  required: true
              }
   
   For example:
   
       department: {
            type: String,
            required: true
        }

   b) Go to userControllers file under Controllers directory and go to createUser function, destructure the field name and add a validation rule in the first if statement to ensure that the value is provided.

        //destructing the field name
       const { firstName, lastName, email, phoneNumber, <field-name> } = req.body;
     
       // add !<field-name> to ensure that the empty value is not passed.
        if (!firstName || !lastName || !email || !phoneNumber || !<field-name>)  {
            return res.status(400).json({ message: "Please enter all the required fields (first name, last name, email, phone, department)", success: false })
        }
   
   
   
