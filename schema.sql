\c other;

DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;

DROP SCHEMA IF EXISTS mysdcschema CASCADE;

CREATE SCHEMA mysdcschema



-- ALTER SCHEMA public
-- RENAME TO mysdcschema;

  CREATE TABLE mysdcschema.product(
  -- CREATE TABLE product(
    id SERIAL UNIQUE,
    product_name VARCHAR(50),
    product_slogan VARCHAR(250),
    product_description VARCHAR(1000),
    product_category VARCHAR(100),
    -- default_price numeric CONSTRAINT positive_default_price CHECK (default_price > 0),
    default_price numeric,
    PRIMARY KEY (id)
  )

  CREATE TABLE mysdcschema.styles(
  -- CREATE TABLE styles(
    id SERIAL UNIQUE,
    product_id int,
    style_name VARCHAR(250),
    -- sale_price numeric CONSTRAINT positive_sale_price CHECK (sale_price > 0),
    sale_price varchar(50),
    -- original_price numeric CONSTRAINT positive_original_price CHECK (original_price > 0),
    original_price numeric,
    default_style BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id)
  )

  CREATE TABLE mysdcschema.photos(
  -- CREATE TABLE photos(
    id SERIAL UNIQUE,
    style_id int NOT NULL,
    photo_url text,
    thumbnail_url text,
    PRIMARY KEY (id),
    FOREIGN KEY (style_id) REFERENCES styles(id)
  )

  CREATE TABLE mysdcschema.skus(
  -- CREATE TABLE skus(
    id SERIAL UNIQUE,
    style_id int NOT NULL,
    size VARCHAR(10),
    quantity INT,
    PRIMARY KEY (id),
    FOREIGN KEY (style_id) REFERENCES styles(id)
  )

  CREATE TABLE mysdcschema.related(
  -- CREATE TABLE related(
    id SERIAL UNIQUE,
    current_product INT NOT NULL,
    related_product INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (current_product ) REFERENCES product(id)
  )

  CREATE TABLE mysdcschema.features(
  -- CREATE TABLE features(
    id SERIAL UNIQUE,
    product_id INTEGER NOT NULL,
    feature VARCHAR(250),
    value VARCHAR(250),
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id)
  );



SET search_path TO mysdcschema,public;

-- SET search_path TO mysdcschema,public;


-- SET search_path TO mysdcschema,public;

-- products import:
COPY product FROM '/Users/cucho/Documents/hackReactor/SDC/products/csvFiles/product.csv' DELIMITER ',' CSV HEADER;
-- styles import:
COPY styles FROM '/Users/cucho/Documents/hackReactor/SDC/products/csvFiles/styles.csv' DELIMITER ',' CSV HEADER;
-- feature import:
COPY features FROM '/Users/cucho/Documents/hackReactor/SDC/products/csvFiles/features.csv' DELIMITER ',' CSV HEADER;
-- related import:
COPY related FROM '/Users/cucho/Documents/hackReactor/SDC/products/csvFiles/related.csv' DELIMITER ',' CSV HEADER;
--  import photos:
COPY photos FROM '/Users/cucho/Documents/hackReactor/SDC/products/csvFiles/photos.csv' DELIMITER ',' CSV HEADER;
-- import skus:
COPY skus FROM '/Users/cucho/Documents/hackReactor/SDC/products/csvFiles/skus.csv' DELIMITER ',' CSV HEADER;


SET search_path TO mysdcschema,public;







/* Create other tables and define schemas for them here! */


/*CONSTRAINT fk_user
    FOREIGN KEY (user_id)
    REFERENCES users (user_id)
  CONSTRAINT fk_chatroom
    FOREIGN KEY (room_id)
    REFERENCES chatroom (room_id)*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/sch
 *  to create the database and the tables.*/