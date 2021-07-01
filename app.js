const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8888);

app.use('/hi', (req, res, next)=>{
    console.log('모든 요청에 다 실행됨!');
    next();
});

app.get('/hello', (req, res)=>{
    res.send('안녕하세요 저는 강현서 입니다!!');
    console.log('누군가 접속했다!');
});

app.listen(app.get('port'), ()=>{
    console.log('익스프레스 서버 실행'); 
});


