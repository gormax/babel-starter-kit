import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get ('/task2A', (req, res) =>{
    const sum = (+req.query.a || 0)+ (+req.query.b || 0);
    res.send(sum.toString());
});

app.get ('/task2B', (req, res) =>{

    const strFIO = req.query.fullname;
    var arrFIO = strFIO.split(' ');
    var strRes = '';

    console.log(arrFIO.length.toString());

    if (arrFIO.length.toString() == '3') {
      strRes = arrFIO[2] + ' ' + arrFIO[0][0] + '. ' + arrFIO[1][0] + '.';
    }
    else if (arrFIO.length.toString() == '2'){
      strRes = arrFIO[1] + ' ' + arrFIO[0][0] + '.';
    }
    else if ((arrFIO.length.toString() == '1') && !(arrFIO[0] == '')){
      strRes = arrFIO[0];
    }
    else{
      strRes = 'Invalid fullname';
    }

    res.send(strRes);

    // console.log(strRes);
    // res.send(arrFIO.length.toString());
});

app.listen(3000, () =>{
  console.log('ok');
});
