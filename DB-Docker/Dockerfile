# Use the official MySQL image from Docker Hub
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=nts_tpse
ENV MYSQL_USER=nts_user
ENV MYSQL_PASSWORD=nts@12345

# Optional: Copy custom configuration file
# COPY ./my.cnf /etc/mysql/my.cnf

# Expose MySQL port
EXPOSE 3306

# Start MySQL server
CMD ["mysqld"]
