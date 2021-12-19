var express = require('express');
var bodyParser = require('body-parser');
const { Pool } = require('pg');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// variables to be manipulated by buttons

let count = 0;
let namesList = [];

// handle requests

// RETRIEVE count - send value of first row of button_count table

app.get('/count', (request, response) => {
    console.log(`Got request for count, sending ${count}`);
    pool.query('SELECT count FROM button_count')
	.then(res => {
	    console.log('DB response: ' + res.rows[0]);
	    response.send(res.rows[0]);
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})

// UPDATE count - increment value in first row of button_count table
/* Optional technical note:  HTTP PUT requests should be "idempotent" - 
   i.e., repeatable.  This implemenation, where the SQL command increments 
   count, does not adhere to that standard usage.  
     * Incrementing in the front end application (after retrieving the 
       prior count value) would be more complicated but would adhere to 
       the HTTP norm.  
     * HTTP POST is the only HTTP operation that doesn't need to be idempotent,
       (so could alternatively be used from an HTTP viewpoint;  but that 
       differs from our choice of HTTP PUT for REST Update...)
   For this class, we will allow either PUT (for idempotent actions) or POST 
   (for non-idempotent actions) for implementing REST Update operations */

app.post('/count', (request, response) => {
    // count++;
    console.log(`Got request to increment count, will add 1 in database`);
    pool.query('UPDATE button_count SET count = count + 1')
	.then(res => {
	    console.log('DB response: ' + res.rows[0]);
	    response.sendStatus(200)
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})

// UPDATE count - RESET value in first row of button_count table to 0

app.put('/count/reset', (request, response) => {
    // count++;
    console.log(`Got request to reset count, will assign to 0 in database`);
    pool.query('UPDATE button_count SET count = 0')
	.then(res => {
	    console.log('DB response: ' + res.rows[0]);
	    response.sendStatus(200)
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})

// RETRIEVE names - send array of all names in button_names table

app.get('/names', (request, response) => {
    console.log(`Got request for names`);
    pool.query('SELECT * FROM button_names ORDER BY nid')
	.then(res => {
	    let arr = [];
	    console.log('DB response: ');
	    res.rows.forEach(val => {
		console.log(val);
		arr.push(val.name);
	    });
	    response.send({names: arr})
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})

// CREATE names - insert a name into button_names table

app.post('/names', (request, response) => {
    let name = request.body.name;
    console.log(request.body)
    console.log(request.body.name)
    console.log(`Got request to add a name, will add ${name} to database`);
    pool.query('INSERT INTO button_names (name) VALUES ($1)', [name])
	.then(res => {
	    console.log('DB response: ' + res.rows[0]);
	    response.sendStatus(200)
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})

// DELETE names - delete all rows of button_names table with matching names

app.delete('/names', (request, response) => {
    let name = request.body.name;
    console.log(request.body)
    console.log(request.body.name)
    console.log(`Got request to delete matching names, will remove ${name} from database`);
    pool.query('DELETE FROM button_names WHERE name = $1', [name])
	.then(res => {
	    console.log('DB response: ' + res.rows[0]);
	    response.sendStatus(200)
	})
	.catch(err =>
	       setImmediate(() => {
		   throw err;
	       }));
})

// catch 404 and forward to error handler

app.use(function(request, response, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, request, response, next) {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
});


/* Main program */

console.log(`Starting button-server-db app`);

const lib = require('./mcalib');
// lib.setErrorPrefix(__filename);  // set label for lib error messages

// database connection parameters
const dbHost = "anansi.stolaf.edu";
const user = 'chant1';    // CHANGE to your username, e.g., jones1
const password = lib.getPGPassword(dbHost);  // uncomment for Windows
const dbName = 'mca_f21';
const schema = 'chant1';  // CHANGE to your username as schema for Lab 5
                       // CHANGE to team schema for project

const pool = new Pool({
    user: user,
    password: password,                      // uncomment for Windows
    host: dbHost,
    database: dbName,
    port: 5432,
});

pool.on('connect', client => {
    client.query(`SET search_path = ${schema}, public;`)
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

console.log(`Connected to database ${dbName} on ${dbHost}`);

console.log("IP addresses:  ", lib.getIPAddresses());

module.exports = app;
