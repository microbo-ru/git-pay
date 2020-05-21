const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 8081;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

// more specific routes go first
app.get('/api', (req, res) => {
    res.send({
        message: 'hello world'
    });
});

// shall server static files from Vuew first
const publicDist = path.join(__dirname, '../../client/dist');
app.use(express.static(publicDist));

// this is used to fallback not-matched request to the Vue main index.html
// and propogate history, so that Vue would be able to position on a specific page
app.use(history({
    index: publicDist + '/index.html'
}));

app.all("*", (_req, res) => {
    try {
        res.sendFile(publicDist + '/index.html');
    } catch (error) {
        res.json({ success: false, message: "Something went wrong" });
    }
});

const server = app.listen(port, () => {
    console.log('Server started, listening on port %s...', server.address().port);

    console.log('Using AIRTABLE_API_KEY =', process.env.AIRTABLE_API_KEY);
    console.log('Using AIRTABLE_DB_NAME =', process.env.AIRTABLE_DB_NAME);
    console.log('Using W1_PLATFORM_ID =', process.env.W1_PLATFORM_ID);
    console.log('Using W1_PLATFORM_SECRET =', process.env.W1_PLATFORM_SECRET);
});
