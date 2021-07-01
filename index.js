const express = require('express');

const app = express();
//app.set('port', process.env.PORT || 8888);

app.get('/hello', (req, res)=>{
    res.send('안녕하세요 저는 강현서 입니다!!');
    console.log('누군가 접속했다!');
});

app.listen(8888, ()=>{
    console.log('익스프레스 서버 실행'); 
});


