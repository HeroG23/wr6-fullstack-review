INSERT INTO bird_user(email, username, password)
VALUES ($1, $2, $3);
RETURNING *