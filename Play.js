import express from "express";
const app = express();
app.listen(3000, ()=>{
    console.log('Running from play.js')
});

app.use(express.static('client/public'));

const logMiddleware = (req,res, next)=>{
 console.log(`Recieved a ${req.method} reqiest from ${req.ip}`)
 next()
}
app.use(logMiddleware);
app.get('/a', (req, res)=>{
  res.send(" this is from the play server ");
});

app.get('/b', (req,res)=>{
    res.send("this is b");
})
