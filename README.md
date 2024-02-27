# Todo Application In React

This project was bootstrapped with [Vite | Next Generation Frontend Tooling](https://vitejs.dev/).

Built using:

- Front-end library: React
  - useReducer hook
  - useContext hook
  - react-icons library
  - css modules
- Added Local storage functionality


## About Todo App

⭐ firstly created a form to add new todos. Using controlled input fields, where the value of the input fields is stored in states and updated as the user interacts with them, ensures that your component stays in sync with the user input. 

⭐ I have used the useState hook intially to store my todos but after that i learned about usereducer hook so i used it store my todos.



⭐ I utilized the useContext hook to encapsulate all logic related to adding, deleting, and dispatching todos, as well as defining the reducer function.



⭐ Additionally, I implemented Local Storage Functionality - to synchronize my todos with the user's device I used the useEffect hook - By including the state containing all the todos in the dependency array. so that whenever my todos changes ,the useEffect function called and it  updates the local storage. 



⭐ Obviously, the app is fully responsive and can be used to prioritize your tasks.



🤩 And Crafting this app was an enjoyable experience that greatly contributed to my learning journey.

The  [Live Link](https://todo-react-application-ss.netlify.app/)
 demonstrates various features implemented within the application. 



https://github.com/Anjali-Git-Hub/Todo-Application/assets/122084921/ece8aa97-cf05-419d-b145-de7c78451d2b




<hr>

  In the /Todo app, you can run:

### `npm install`

If you haven't installed dependencies yet, you can do so by navigating to your project directory in the command line and running.

### `npm run dev`

Runs the app in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`
For running unit tests or integration tests, you would use the test runner configured in your project. 
It could be Jest, Mocha, or any other testing framework.










