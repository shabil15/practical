const express=require('express');
const app = express();

app.set('port',3000);
app.set('view engine','ejs');

console.log(app.get("port"));
console.log(app.get('view engine'));

app.listen(app.get(port),()=>{
    console.log(`Server running at ${app.get('port')}`)
})