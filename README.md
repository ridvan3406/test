## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?

   Modular system is being used in app-standalone in order to work efficiently. Modular system has plenty advantages in the process of production. I will write them some of them below.
   1-	If you want to develop a website probably you will have different components to work on. For example if you want to assign someone for login page and not anything else you create a file that contains everything related to login page. At that time work can be easily done without distraction and complexity.
   2-	Time is very important for everybody especially if you are a web developer. When you have something with your codes some times its hard to find the source of problem if you are working on a large project. Instead of looking thousands lines of code you can find easily detect the problem.
   3-	Modular system help us to share code  and reuse the codes  in different part of our project and even on other projects.
   4-	Testing is important while developing an application. Instead of testing the whole app each and every time we can test specific part of the app as much as its needed. We can write different version of code and test them whichever we like we can use them


2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*
   There is a testing file in Square file but not other files.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?
   Yes I am familiar with Redux. Redux store all application data in a single state object. We call this object state. This state can only be changed dispatching an action to store. For that purpose we should write reducer function. These reducer functions must be pure function. 
   Not all apps need Redux. It's important to understand the kind of application we are going to build or building. If your state is updated by the user frequently then it is time to use redux. Also if so many people are going to work on a large sized app then definitely redux should be used because you will use a lots of state during the process.

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like* 
      -When async function is used  try-catch should be used.
      -Server file is not exist.


### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





