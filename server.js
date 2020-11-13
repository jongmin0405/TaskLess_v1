const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");

const conf = JSON.parse(data);

const { Client } = require("pg");
const client = new Client(conf);

client.connect();

app.get("/api/customers", (req, res) => {
 //client.query(`SET search_path TO "taskless";` );
  client.query(
    `select * from get_saledata('20201012','20201012')`,
    //'select * from comc09an',
    (err, datarow) => {
     if(err){ 
              throw err;
          }
      res.send(datarow.rows);
      //console.log(datarow.rows);
    }
  );
});



app.listen(port, () => console.log(`Listening on port ${port}`));
