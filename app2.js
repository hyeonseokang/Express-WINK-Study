const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 8888);

app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, 'file'))); 

app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'hyunseo',
    cookie: {
        httpOnly: true,
    },
    name: 'connect.sid',
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next)=>{
    console.log('모든 요청에 다 실행됨! 다 실행됨!!!');
    next();
});


app.get('/error', (req, res)=>{
    res.status(404).send("error!");
});

app.get('/total', (req, res)=>{
    if (req.session.num === undefined){
        req.session.num = 1;
    }
    else{
        req.session.num += 1;
    }

    res.send(`지금 까지 총 ${req.session.num}
    번 요청 하셨습니다.`);
});


app.get('/hello', (req, res)=>{
    res.send('안녕하세요 저는 강현서 입니다!!');
    console.log('누군가 접속했다!');
});

app.listen(app.get('port'), ()=>{
    console.log('익스프레스 서버 실행'); 
});


