---
author: Jangwon Lee
date: 2024-05-30
---

Commands used:
```
npm install sequelize sequelize-cli mysql2

# configure
npx sequelize-cli init
vim config/config.json # set database credentials as needed

# create migration
npx sequelize-cli migration:generate --name create-table
vim migrations/...-create-table.js # define the migration 
docker-compose up --build -d
npx sequelize-cli db:migrate # `exec` inside the node container
```

You can access the MySQL database via cli from the mysql container:
```
mysql -h db -u root -p # password is `example`, as defined in the docker-compose file. 
```

Query used to insert customer data:
```
use mydb;
INSERT INTO customers (name, email) VALUES
('Alice Smith', 'alice@example.com'),
('Bob Johnson', 'bob@example.com'),
('Charlie Brown', 'charlie@example.com'),
('Diana Prince', 'diana@example.com'),
('Edward Norton', 'edward@example.com');
```