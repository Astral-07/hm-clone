-- H&M Clone Database Schema
-- Run this in your PostgreSQL database

CREATE TABLE users (
    id          BIGSERIAL PRIMARY KEY,
    email       VARCHAR(255) UNIQUE NOT NULL,
    password    VARCHAR(255) NOT NULL,          -- stored as BCrypt hash
    first_name  VARCHAR(100),
    last_name   VARCHAR(100),
    role        VARCHAR(20) DEFAULT 'CUSTOMER', -- CUSTOMER or ADMIN
    created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categories (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,           -- e.g. "Women", "Men", "Kids"
    slug        VARCHAR(100) UNIQUE NOT NULL     -- e.g. "women", "men"
);

CREATE TABLE products (
    id              BIGSERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    price           DECIMAL(10, 2) NOT NULL,
    category_id     BIGINT REFERENCES categories(id),
    image_url       VARCHAR(500),
    stock_quantity  INT DEFAULT 0,
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
    id          BIGSERIAL PRIMARY KEY,
    user_id     BIGINT REFERENCES users(id),
    status      VARCHAR(30) DEFAULT 'PENDING',   -- PENDING, CONFIRMED, SHIPPED, DELIVERED
    total_price DECIMAL(10, 2),
    created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id          BIGSERIAL PRIMARY KEY,
    order_id    BIGINT REFERENCES orders(id),
    product_id  BIGINT REFERENCES products(id),
    quantity    INT NOT NULL,
    unit_price  DECIMAL(10, 2) NOT NULL          -- price at time of purchase
);

-- Sample data to get started
INSERT INTO categories (name, slug) VALUES
    ('Women', 'women'),
    ('Men',   'men'),
    ('Kids',  'kids'),
    ('Sale',  'sale');

INSERT INTO products (name, description, price, category_id, image_url, stock_quantity) VALUES
    ('Floral Summer Dress',    'Light and breezy floral dress', 29.99, 1, 'https://placehold.co/400x500', 50),
    ('Slim Fit Chinos',        'Classic slim-fit chino trousers', 34.99, 2, 'https://placehold.co/400x500', 40),
    ('Kids Graphic T-Shirt',   'Fun printed tee for kids',       14.99, 3, 'https://placehold.co/400x500', 100),
    ('Oversized Blazer',       'Relaxed fit blazer in beige',    59.99, 1, 'https://placehold.co/400x500', 20),
    ('Linen Shirt',            'Breathable linen shirt for men', 24.99, 2, 'https://placehold.co/400x500', 60);
