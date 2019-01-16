CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    fName VARCHAR(20),
    lName VARCHAR(20),
    bio VARCHAR(500),
    imgPath VARCHAR
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    author_id INTEGER REFERENCES authors (id),
    category INTEGER REFERENCES categories (id),
    body VARCHAR,
    create_date DATE,
    publish_date DATE,
    visible BOOLEAN
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    post_date DATE,
    blog_id INTEGER REFERENCES articles (id),
    body VARCHAR,
    visible BOOLEAN
);