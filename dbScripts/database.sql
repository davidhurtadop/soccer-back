CREATE DATABASE "soccerAppDB"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE "soccerAppDB"
    IS 'Soccer Tournament BD';

GRANT CREATE, CONNECT ON DATABASE "soccerAppDB" TO postgres;
GRANT TEMPORARY ON DATABASE "soccerAppDB" TO postgres WITH GRANT OPTION;

GRANT TEMPORARY, CONNECT ON DATABASE "soccerAppDB" TO PUBLIC;