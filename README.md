# The Lootbox 
Find and save your favorite anime and manga to a curated list



### 1. Working Prototype
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/



### 2. User Stories
This app is for two types of users: a visitor and a logged-in user

###### Landing Page (Importance - High) (Est: 1h)
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

######  Home Page (Importance - High)  (Est: 2h)

* As a visitor
* I want to search by keyword, genre, character, or voice actor the myAnimeList API
* so I can view series by those criteria

######  Home Page (Importance - High)  (Est: 2h)

* As a visitor
* I want to sign up to save my searched anime to Lootboxes
* so I can view my saved series later

######  Home Page (Importance - High)  (Est: 1h)

* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.

######  Home Page (Importance - High)  (Est: 2h)

* As a logged-in user,
* I want to be able to search other users Lootboxes first
* So i can see what other users are adding to Lootboxes

###### Edit Page (Importance - High)  (Est: 2h)

* As a logged-in user,
* I want to be able to see all my lootboxes
* So i can choose which one I want to edit

###### Edit Page (Importance - High)  (Est: 2h)

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


### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes
Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)

Register Page
:-------------------------:
![Register Page](/github-images/wireframes/sign-up-wireframe.png)

Login Page
:-------------------------:
![Login Page](/github-images/wireframes/login-page-wireframe.png

User Dashboard Page
:-------------------------:
![Dashboard Page](/github-images/wireframes/new=user-dashboard.png)

Lootbox Display Page
:-------------------------:
![Lootbox Display Page](/github-images/wireframes/lootbox-display-wireframe.png)


Search Result Page
:-------------------------:
![Search Result Page](/github-images/wireframes/search-result-wireframe.png)



### 6. Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__ 
            * __Navbar.js__ (stateless) - 
                * __Login.js__ (stateful) -
                * __Register.js__ (stateful) - 
            * __Footer.js__ (stateless) - Displays contact data, a site map
            * __SearchBar.js__ (stateful) - gets searches from users and boxes imported from API
                * __ResultBar__ (stateful) - gets data from fetch requests either from user lootboxes or API
            * __LootboxSearchBar.js__ (stateful) - gets searches from users and boxes imported from server
                * __LootboxResultBar__ (stateful) - gets data from fetch requests either from user lootboxes or API
                    * __LootBoxes.js__ (stateful) - gets drops held in state and imported from context
                        * __Drops.js__ (stateufl) - gets drops contained in each lootbox from LootBox.js
        * __UserAccount.js__ (stateful) - receives user selected from 
            * __LootBoxes.js__ (stateful) - gets drops held in state and imported from context
                * __Drops.js__ (stateufl) - gets drops contained in each lootbox from LootBox.js
        

### 7. Back-end Structure - Business Objects
*  Users (database table)
    * id (auto-generated)
    * user_name (email validation)
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

### 8. API Documentation
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
    |   └── GET
            └── /:user_id
    |    └── DELETE
            └── /:user_id
    ├── /lootboxes
    │   └── GET
            ├── /
    │       ├── /:lootbox_id
        └── POST
    │       ├── /
        └── DELETE
    │       ├── /:lootbox_id
        └── PATCH
    │       ├── /:lootbox_id
    ├── /drops
    │   └── GET
            ├── /
    │       ├── /:drop_id
        └── POST
    │       ├── /
        └── DELETE
    │       ├── /:drop_id
        └── PATCH
    │       ├── /:drop_id
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
##### GET `/api/users`
```js
    // req.body
    {
      "id": 2,
      "user_name": 'peregrin.took@shire.com',
      "password": 'secret'
    }
```

##### GET `/api/lootboxes`
```js
    // req.body
    {
     "id": 6,
     "title": "Shojo Classics",
    "description": "Soft titles with a romantic plotline, beautiful characters, and a dramatic climax",
    "is_public": 0,
    "box_owner": 1
    }
```

##### GET `/api/lootboxes/:lootbox_id`
```js
    // req.body
    {
     "id": 6
    }
```

##### POST `/api/lootboxes`
```js
    // req.body
    {
     "title": "Shojo Classics",
    "description": "Soft titles with a romantic plotline, beautiful characters, and a dramatic climax",
    "is_public": 0,
    "box_owner": 1
    }
```

##### PATCH `/api/lootboxes/:lootbox_id`
```js
    // req.body
    {
     "id": 1
     "title": "Shojo Classics",
    "description": "Soft titles with a romantic plotline, beautiful characters, and a dramatic climax",
    "is_public": 0,
    "box_owner": 1
    }
```

##### DELETE `/api/lootboxes/:lootbox_id`
```js
    // req.body
    {
     "id": 1
    }
```

##### GET `/api/drops`
```js
    // req.body
    {
     "id": 1,
    "mal_id": 6969,
    "drop_description": "A lovely advnture of two lovers star crossed through time.",
    "lootbox_id": 1,
    "drop_type": "manga",
    "drop_name": "Naruto 2: Electric Boogaloo",
    "url": "https://myanimelist.net/manga/42/Dragon_Ball",
    "image_url": "https://cdn.myanimelist.net/images/manga/2/54545.jpg"
    }
```

##### GET `/api/drops/:drop_id`
```js
    // req.body
    {
     "id": 1
    }
```

##### POST `/api/drops`
```js
    // req.body
    {
    "mal_id": 6969,
    "drop_description": "A lovely advnture of two lovers star crossed through time.",
    "lootbox_id": 1,
    "drop_type": "manga",
    "drop_name": "Naruto 2: Electric Boogaloo",
    "url": "https://myanimelist.net/manga/42/Dragon_Ball",
    "image_url": "https://cdn.myanimelist.net/images/manga/2/54545.jpg"
    }
```

##### PATCH `/api/drops/:drop_id`
```js
    // req.body
    {
     "id": 1
    "mal_id": 6969,
    "drop_description": "A lovely advnture of two lovers star crossed through time.",
    "lootbox_id": 1,
    "drop_type": "manga",
    "drop_name": "Naruto 2: Electric Boogaloo",
    "url": "https://myanimelist.net/manga/42/Dragon_Ball",
    "image_url": "https://cdn.myanimelist.net/images/manga/2/54545.jpg"
    }
```

##### DELETE `/api/drops/:drop_id`
```js
    // req.body
    {
     "id": 1
    }
```

### 9. Screenshots
Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)

Register Page
:-------------------------:
![Register Page](/github-images/screenshots/sign-up-screenshot.png)

Login Page
:-------------------------:
![Login Page](/github-images/screenshots/login-page-screenshot.png

User Dashboard Page
:-------------------------:
![Dashboard Page](/github-images/screenshots/new-user-dashboard.png)

Lootbox Display Page
:-------------------------:
![Lootbox Display Page](/github-images/screenshots/lootbox-display-screenshot.png)


Search Result Page
:-------------------------:
![Search Result Page](/github-images/screenshots/search-result-screenshot.png)




### 10. Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Make drop names nullable
* Add private lootboxes and restrict search to only public ones
* Add color coding to drops to assign value in lootboxes
* Lootbox showcase on the landing page
* Add username and email distinction



### 11. How to run it
Use command line to navigate into the project folder and run the following in terminal

##### Local React scr
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test   