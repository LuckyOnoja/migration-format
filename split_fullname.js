const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.all("SELECT id, full_name, email FROM users", [], (err, rows)=> {
    if (err) throw err;

    console.table(rows.map(r => {
        let parts = (r.full_name || "" ).trim().split(" ");
        return {
            id:r.id,
            first_name: parts[0] || "", 
            last_name: parts.length > 1 ? parts.slice(1).join(" ") : "",
            email: r.email
        }
    }));

});

setTimeout(() => db.close(()=> console.log("Database connection closed cleanly.")), 500 );
