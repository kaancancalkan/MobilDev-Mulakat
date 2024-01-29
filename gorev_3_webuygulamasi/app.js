const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Veritabanı bağlantısı
let db = new sqlite3.Database(':memory:');

// Tablo oluşturma
db.serialize(() => {
    db.run("CREATE TABLE users (name TEXT, email TEXT)");
});

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Form gönderim işlemi
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email], (err) => {
        if (err) {
            res.status(500).send('Hata: Veritabanına kaydedilemedi.');
        } else {
            res.send('Veri başarıyla eklendi.');
        }
    });
});

// Verilerin listelenmesi
app.get('/data', (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            res.status(500).send('Hata: Veriler alınamadı.');
        } else {
            res.json(rows);
        }
    });
});

// Port dinleme
app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışıyor.`);
});

