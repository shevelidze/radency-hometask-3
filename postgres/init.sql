CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    content TEXT NOT NULL,
    is_archived BOOLEAN NOT NULL DEFAULT FALSE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE
);

