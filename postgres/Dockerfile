FROM postgres:14.5

ENV POSTGRES_PASSWORD=mysecretpassword
ENV POSTGRES_DB=notes

RUN mkdir database-init
COPY . ./database-init

WORKDIR ./database-init

RUN cat init.sql >> final_init.sql
RUN cat defaults.sql >> final_init.sql

RUN mv final_init.sql /docker-entrypoint-initdb.d 

WORKDIR ..

RUN rm -r database-init

