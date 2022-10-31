# School Analytics Project 
- Technologies used are NextJS, and MongoDB
- There is a hosted MongoDB server which I can email the connection string for
- A couple extra libraries were used: Formik for form handling, react-hot-toasts for toasts, jest for testing, jsPDF for generating a pdf, react-unicons for some icons

## Requirements 
-input (text) that accepts school name
-download button that searchs DB with input text
-Button to download file that contains grades for students from the searched school (any format)
-API call to create a student with grades and a school
-API call to list all students in a school 

## Running the App Locally

In the directory with the package.json file. run:
- npm install

Change the '.env.local.example' file to '.env.local'
I will email you the connection string to add

Run by...

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Some test schools are listed on the home page, but they are:
- Mohawk College
- McMaster University
- University of Toronto
- Hogwarts

To run unit tests run 
- npm test

## Project Structure

- NextJS uses file based routing. Each page in the "pages" folder are a route

- NextJS allows server side code (it runs a node server) - anything in the /api folder will be run as a node server would run it
- the APIs for searching schools, and adding students are both under the /pages/api folder

- there is a generic /components folder, where components live. Each component has a js file, test (.spec) file, and css file

- There is a /helpers folder which contains some generic reusable code