# Final Project

### Horace Bramwell / Student ID: 0004871418

Hello my name is Horace Bramwell. I am a Web Design & Development student from Full Sail University.

![Degree Program](https://img.shields.io/badge/degree-web%20design%20%26%20development-blue.svg)&nbsp;

hbramwell@student.fullsail.edu -- (754) 302-8813

---

## Log

### April 12, 2022

**🛠 Worked completed:**

During this week, I started working on the backend of the application. This included creating the database (PostgreSQL), creating the models, and creating the routes. I also worked on some basic error handling. The backend is currently in a very early stage of development and will be updated as time goes on. For example, some routes return null values, which is not ideal. They should be updated to return a 404 status code with a message. In addition to this, the user route which I created for testing purposes should be removed in the future. Other than that, the backend is pretty solid. However, I am a bit concerned about how migrations will work once I began deploying the application since some models depend on other models and require migrations to run in a specific order. Other than that, I think the backend is coming along nicely.

**🛑 Challenges:**

My biggest challenge this week was removing columns from the database. I tried creating a new migration file and running it. However, it failed with the following error: 'relation "products" does not exist. After some research, I found that this error may have been caused by how the table was created. So, I decided to remove the columns from the database from the command line and update the existing migration file.

In addition, some models and routes needed updating from what I originally intended. This was because of changes made to the front end. To reduce the amount of refactoring that could be required, I decided to remove or add some columns and relationships to some models. While this wasn't a huge deal, it did slow down the development process a bit.

**⚡️ Plans:**

To address the above challenges and concerns, I will be working on the following:

- [ ] Test deployment of the application on Heroku. Testing migrations and seeds.
- [x] Refactor the codebase to improve readability, maintainability, and consistency.
- [x] Replace the user route with an authentication route.
- [x] Update controllers/routes to return a 404 status code with a message when data is null.
- [x] Add comments to the codebase. As the codebase grows, it will be easier to understand what is going on.

<br>
### April 19, 2022

<br>

**🛠 Worked completed:**

This week, the main tasks I wanted to focus on were authentication and testing. For authentication, I created an authentication controller that will handle all of the authentication logic. This includes creating a user and logging in a user. I also created the routes for the authentication controller. I then proceeded to create an auth middleware that is used to check for a valid token. This middleware was added to the routes I don't want to be accessible to the public or unauthorized users. I created utility functions to handle token generation that is used in the authentication controller.

In addition to adding authentication to the backend, I began running tests on all of the API endpoints using [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest). These test cases were checking for the status code and the response body. As I continue to make improvements to the API, I will be running additional tests to ensure that the API is working as intended.

Lastly, I added image upload functionality to the application and updated the forms on the front end. Currently, the image upload functionality is in its own route and controller. However, I am planning on adding this to the user route in the future once I added an avatar column to the database and updated the user model.

**🛑 Challenges:**

This week, there weren't any major challenges as it pertains to the project. However, there were some personal challenges that affected the quality of work produced this week.

**⚡️ Plans:**

This week I wasn't able to test the deployment of the application on Heroku. So that will be one of the first things I will do during the next milestone. In addition to testing deployment on Heroku, I plan to complete the following:

- [ ] Update Redux to use Backend API.
- [ ] Additional Refactoring.
- [ ] Add an avatar column to the database and update the user model.
- [ ] Update response body to include status code and message for each endpoint. This will be used to display messages on the front end.
- [ ] Test new features.

<!-- <br>

---

## Progress Check / Stand Up

Each week, I will summarize my milestone activity and progress by including a **Stand-Up**. A "stand-up" is when I take the time to briefly report out on the following...

1. **Accomplishments** - What I worked on this past week
2. **Challenges** - Any challenges I may have (and how I am addressing those challenges)
3. **Next Steps** - What I plan to prioritize and do next

<br>

**Week 1**: This week I researched to help complete some of the project requirements for this week. This included producing a project concept, creating a wireframe outlining the important features of the project, style tile, and project proposal. One of the challenges I faced was finding a concept for the project. I was a bit limited on time so I felt like I didn't spend enough time on research or brainstorming. I feel like my project concept isn't fully fleshed out. However, I was able to zero in on a concept that I not only have some experience with but also got some good input from other people. Moving into the next milestone, I will be sure to allocate more time to research and make sure the features I am proposing are clear and easy to understand.

**Week 2**: This week, I worked on the planning portion of my project. This work included creating a click-through prototype of the application, creating issues for things to get done, and planning out the API endpoints required for the application. The challenges I faced this week were understanding the type of relationships necessary for specific API tables. The other challenge was figuring out the proper way to set up junction tables associations with Sequelize. I've begun building out the API with Sequelize since I know it will take the most time. My plan moving forward is to continue this work and make improvements where I see fit.

**Week 3**: This week I learned how to set up ESLint and how to set up a React project with a node server. I also went over a few additional research topics to help me create the components for my application. The challenge for me this week was Heroku. I was unable to get things set up according to assignment requirements or deploy anything. I am a bit confused about what exactly I should be doing. I would need to reach out for more clarification. To move things forward, I will be sure to ask for some feedback and get more clarification on what I should be doing in this particular course.

**Week 4**: During the final milestone, in addition to weekly research, I worked on implementing the Redux toolkit into my project using APIary mock API for the data. I continued to make improvements to the overall UI of the application. Also, I fixed most of the responsive issues with the lists/tables. There weren't any challenges I faced during this milestone. To keep this project moving forward, I will continue refactoring the code, making changes to the UI where I see fit. -->
