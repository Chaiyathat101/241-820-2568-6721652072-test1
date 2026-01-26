// ทำการ import http
const http = require('http');
const host = 'localhost';
const port = 8000;

// กำหนดค่าเริ่มต้นของเซิร์ฟเวอร์เมื่่อเปิดใช้งานเว็บผ่านเบราว์เซอร์ ที่ localhost:8000

const requireListener = function(req, res) {{
    res.writeHead(200);
    res.end('My 1st server\n');
}

// run server
const server = http.createServer(requireListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});