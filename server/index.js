const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//app.use(bodyParser.json());
app.use(cors());

const submissions = require('./routes/api/submissions');

app.use('/api/submissions', submissions);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));	
}

const port = process.env.PORT || 1111;

app.listen(port, () => console.log(`Server started on port ${port}`));





