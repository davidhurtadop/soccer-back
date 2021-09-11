DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS tournaments;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS player_types;
DROP TABLE IF EXISTS teams;

CREATE TABLE tournaments(  
    "Id"        uuid NOT NULL,
    "Name"      character varying(200) NOT NULL,
    "UserId"    uuid,
    CONSTRAINT "PK_TOURNAMENT" PRIMARY KEY ("Id")
);

ALTER TABLE tournaments OWNER to postgres;

COMMENT ON TABLE tournaments
    IS 'Soccer tournaments';

CREATE TABLE "matches"
(
    "Id" uuid NOT NULL,
    "LocalTeam" uuid NOT NULL,
    "VisitorTeam" uuid NOT NULL,
    "TournamentId" uuid NOT NULL,
    "ScoreLocalTeam" numeric(2) NOT NULL,
    "ScoreVisitorTeam" numeric(2) NOT NULL,
    "MatchDate" date NOT NULL,
    CONSTRAINT "PK_MATCHES" PRIMARY KEY ("Id")
);

ALTER TABLE "matches"
    OWNER to postgres;

CREATE TABLE "player_types"
(
    "Id" uuid NOT NULL,
    "Name" character varying(200) NOT NULL,
    CONSTRAINT "PK_PLAYER_TYPES" PRIMARY KEY ("Id")
);

ALTER TABLE "player_types"
    OWNER to postgres;

CREATE TABLE "players"
(
    "Id" uuid NOT NULL,
    "FullName" character varying(100) NOT NULL,
    "TeamId" uuid ,
    "TypeId" uuid ,
    CONSTRAINT "PK_PLAYERS" PRIMARY KEY ("Id")
);

ALTER TABLE "players"
    OWNER to postgres;

COMMENT ON TABLE "players"
    IS 'Player Teams';

CREATE TABLE "teams"
(
    "Id" uuid NOT NULL,
    "Name" character varying(100) NOT NULL,
    "Logo" oid,
    CONSTRAINT "PK_TEAMS" PRIMARY KEY ("Id")
);

ALTER TABLE "teams"
    OWNER to postgres;

COMMENT ON TABLE "teams"
    IS 'Soccer Teams';

CREATE TABLE "users"
(
    "Id" uuid NOT NULL,
    "FullName" character varying(100) NOT NULL,
    "Login" character varying(50),
    "Pass" character varying(20),
    CONSTRAINT "PK_USERS" PRIMARY KEY ("Id")
);

ALTER TABLE "users"
    OWNER to postgres;

ALTER TABLE tournaments 
ADD CONSTRAINT FK_tournaments_USERS 
FOREIGN KEY ("UserId") 
REFERENCES "users" ("Id");

ALTER TABLE "players" 
ADD CONSTRAINT FK_PLAYERS_TEAMS 
FOREIGN KEY ("TeamId") 
REFERENCES "teams" ("Id");

ALTER TABLE "players" 
ADD CONSTRAINT FK_PLAYERS_PLAYERS_TYPES 
FOREIGN KEY ("TypeId") 
REFERENCES "player_types" ("Id");

ALTER TABLE "matches" 
ADD CONSTRAINT FK_MATCHES_TEAMS01 
FOREIGN KEY ("LocalTeam") 
REFERENCES "teams" ("Id");

ALTER TABLE "matches" 
ADD CONSTRAINT FK_MATCHES_TEAMS02 
FOREIGN KEY ("VisitorTeam") 
REFERENCES "teams" ("Id");

ALTER TABLE "matches" 
ADD CONSTRAINT FK_MATCHES_tournaments
FOREIGN KEY ("TournamentId") 
REFERENCES tournaments ("Id");