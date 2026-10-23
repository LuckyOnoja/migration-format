const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        full_name TEXT, 
        email TEXT
     )`);
    
    const stmt = db.prepare("INSERT INTO users (full_name, email) VALUES (?, ?)");
    stmt.run("Alice Smith", "alice@example.com");
    stmt.run("Bob Jones", "bob@example.com");
    stmt.run("Charlie", "charlie@example.com"); 
    stmt.run("Diana Prince", "diana@example.com");
    stmt.run("Peer Mc Hogan", "peer@mail.com")
    stmt.finalize();
});

db.close(() => console.log("Database initialized with legacy schema."));