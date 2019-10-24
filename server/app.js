const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://rahmat:test123@ds345937.mlab.com:45937/gql')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server is running at port 4000')
})