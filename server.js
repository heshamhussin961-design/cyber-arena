// server.js - The Backend
const express = require('express');
const path = require('path');
const app = express();

// أهم سطر: ده اللي بيربط الباك إند بالفروانت إند
// بيقول للسيرفر: "أي ملفات HTML أو صور، دور عليها جوه فولدر public"
app.use(express.static(path.join(__dirname, 'public')));

// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل السيرفر على بورت 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Cyber Arena is Live: http://localhost:${PORT}`);
});