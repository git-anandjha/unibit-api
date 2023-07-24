// init-script.js

db.createUser({
    user: "root",
    pwd: "root",
    roles: [
        {
            role: "readWrite",
            db: "unibit",
        },
    ],
});

db = db.getSiblingDB("unibit");
