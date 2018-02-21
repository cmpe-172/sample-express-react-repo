const  express =  require ('express'); 
const  Sequelize =  require ('sequelize');const  app = express();const  port = process.env.PORT || 5000;
var sequelize = new Sequelize('HotelDB', 'hotelboss', 'boss123', {
 dialect:  "mysql" ,
 port: 3306});
sequelize.authenticate()  .then(() => { console .log( 'Connection to database successfully.' );
})  .catch(err => { console .error( 'Unable to connect to the database:' , err); });app.get( '/api/hello' , (req, res) => { res.send({ express:  'Hello From Express'  });});app.listen(port, () =>  console .log( `Listening on port  ${port} `)  );