# Description

This is my node.js and postgres exercise

# Prerequisite

You should have docker and docker-compose installed on your machine

# Installation

Run the following command:
`docker-compose up --build`
The above command will do a couple of things:

1. Pulling postgres image from docker hub and build postgres container
2. Pulling node 14 image from docker hub and build app container
3. Install app dependency and then run the app server

# Migration

For simplicity, I choose default postgres database called _postgres_, so all the table will be store in this database.
Run below command to create the table:
`docker-compose run pivotapp npm run migrate`

# Populate the Database

`docker-compose run pivotapp npm run seed`

# Test

`docker-compose run pivotapp npm run test`
