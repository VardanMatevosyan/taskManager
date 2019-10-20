
INSERT INTO roles(name) VALUES ('MODERATOR');
INSERT INTO roles(name) VALUES ('ADMIN');
INSERT INTO roles(name) VALUES ('USER');

INSERT INTO user_profile(first_name, last_name) VALUES ('Var', 'Dan');
INSERT INTO user_profile(first_name, last_name) VALUES ('Dan', 'Van');

INSERT INTO users(email, password, first_name, last_name, user_name, user_profile_id)
VALUES ('user@user.com', 'Var', 'Dan', 'Var', 'password', 1);
INSERT INTO users(email, password, first_name, last_name, user_name, user_profile_id)
VALUES ('admin@admin.com', 'Dan', 'Van', 'Dan', 'password', 2);

INSERT INTO user_role(user_id, role_id) VALUES (1, 3);
INSERT INTO user_role(user_id, role_id) VALUES (2, 2);