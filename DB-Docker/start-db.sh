#!/bin/bash

docker build -t custom-mysql .

docker run -d -p 3306:3306 --name mysql-server custom-mysql

# docker run -d -p 3306:3306 --name mysql-server \  -v mysql-data:/var/lib/mysql \  custom-mysql

exit 0
