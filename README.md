# The Lootbox 
Find and save your favorite anime and manga to a curated list



### 1. Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/



### 2. User Stories (to do now)
This app is for two types of users: a visitor and a logged-in user

###### (Example) Landing Page (Importance - High) (Est: 1h)
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it



###### Login Page (Importance - High) (Est: 3h)
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.



###### Sign Up (Importance - High)  (Est: 3h)
* As a visitor
* I want to register to use this app
* So I can create a personal account to view my Lootboxes

######  Home Page (Importance - High)  (Est: 2h)
* As a visitor
* I want to register to use this app
* So I can create a personal account to view my Lootboxes

* As a visitor
* I want to search by keyword, genre, character, or voice actor the myAnimeList API
* so I can view series by those criteria

* As a visitor
* I want to sign up to save my searched anime to Lootboxes
* so I can view my saved series later

* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.

* As a logged-in user,
* I want to be able to search other users Lootboxes first
* So i can see what other users are adding to Lootboxes

###### Edit Page (Importance - High)  (Est: 2h)

* As a logged-in user,
* I want to be able to see all my lootboxes
* So i can choose which one I want to edit

* As a logged-in user,
* I want to be able to return to and edit my lootboxes
* So i can change and update them as my taste evolves




### 3. Functionality
The app's functionality includes:
* Every User has the ability to create an account
* Every User has the ability to search myAnimeList API
* Every User has the ability to save and name their list 
* Every User has the ability to search other users public lists
* Every User has the ability to save private lists
* Every User has the ability to search by genre, keyword, voice actor, character, airing, and user
* Every User has the ability to click a link to watch their show


### 4. Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)



### 6. Front-end Structure - React Components Map (to do later)
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) - 
            * __SearchBar.js__ (stateful) - gets searches from users and boxes imported from context
        * __Navbar.js__ (stateless) - 
        * __UserAccount.js__ (stateful) - receives user selected from 
        * __LootBoxes.js__ (stateful) - gets drops held in state and imported from context
            * __Drops.js__ (stateufl) - gets drops contained in each lootbox from LootBox.js



### 7. Back-end Structure - Business Objects (to do later)
*  Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)
*  Lootboxes (database table)
    * id (auto-generated)
    * user_id (foreign key to users list)
    * title (varchar 255 not null)
    * description (varchar 255 not null)
    * is_public (integer not null default 0)
* Drops (database table)
    * id (auto-generated) 
    * lootbox_id (foreign key to lootboxes list)
    * anime_title (varchar 255 not null) (api)
    * genre (varchar 255 not null) (api)
    * image_url (varchar 255 not null) (api)
    * description (varchar 255 not null) (api)

### 8. API Documentation (to do later)
#### API Overview
```text
    /api
    .
    ├── /auth
    │   └── POST
    │       ├── /login
    ├── /users
    │   └── POST
    │       └── /
```

##### POST `/api/auth/login`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "Password1"
    }

    // res.body
    {
    "authToken": String,
        "userId": 1
    }
```

##### POST `/api/users/`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "123456"
    }


    // res.body
    {
        "id": 1,
        "user_name": "demo@gmail.com"
    }
```



### 9. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 10. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality



### 11. How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test   