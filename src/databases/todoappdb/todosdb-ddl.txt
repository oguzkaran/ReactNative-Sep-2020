create table users (
    user_id integer primary key autoincrement,
    name text not null,
    username text not null unique,
    password text not null,
    register_date numeric not null default(DATETIME())
);

create table todo (
    todo_id integer primary key autoincrement,
    user_id integer not null,
    title text not null,
    description text,
    completed integer not null default(0) check(completed = 1 or completed = 0),
    insert_date text not null default(datetime()),
    last_update text not null default(datetime()),
    foreign key (user_id) references users(user_id)
);