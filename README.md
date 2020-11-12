# WR6 FULLSTACk REVIEW

## MVP
- Users can add bird pictures to database
- Users can create an account
- Users can login
- Users can view bird pictures
- Users can edit/delete their posts

## Ice box
- Users can comment on other users' posts
- Users can upvote/like posts
- Users can view locations of bird sightings using Google Maps Api
- Can create friendslist
- Can view individual profiles (including your own)

### Database

- Schemas:

users
```SQL
CREATE TABLE bird_users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL
);
```
posts
```SQL
CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY,
    img text,
    species_name VARCHAR(32),
    location TEXT,
    user_id INT REFERENCES bird_users(user_id)
);
```
comments
```SQL
CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    body TEXT,
    user_id INT REFERENCES bird_users(user_id),
    post_id INT REFERENCES posts(post_id)
);
```

### Server
- Dependencies:
    - express
    - massive
    - dotenv
    - express-session
    - bcrypt

- File Structures:
    - server/
        - index.js
        - controller.js
            - authController.js
            - postController.js
            - commentController.js(icebox)

- Endpoints:
    - auth endpoints:
        - register => '/api/register'
        - login => '/api/login'
        - logout => '/api/logout'
        - getUserSession => '/api/get_user'
    -post endpoints:
        - read posts => '/api/posts'
        - delete posts => '/api/post/:id'
        - edit posts => '/api/post/:id'
        - create posts => '/api/post'
    -comment endpoints(icebox):

### Frontend
- Dependencies:
    - axios
    - react-router-dom
    - react-redux
    - redux
    - redux-promise-middleware

- File Structure
    -src/
        - App.js
        - reset.css
        - App.css
        - routes.js
            - '/' => Auth.js
            - '/createpost' => Form.js
            - '/feed' => Feed.js
        - redux/
            - store.js
            - reducer.js
        - components/
            - Header.js
            - Auth.js
            - posts.js
            - Feed.js
            - Form.js

<a href="wireframe page">My Figma Wireframe </a>