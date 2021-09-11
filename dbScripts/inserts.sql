insert into users values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'Carlos Ramirez','cramirez','c123');
insert into users values ((select uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)),'David Hurtado','dhurtado','c123');
