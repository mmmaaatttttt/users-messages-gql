CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    body text NOT NULL,
    username text NOT NULL REFERENCES users
);
