require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const userRoute = require('./routes/user-route');
const rentRoute = require('./routes/rent-route');
const reviewsRoute = require('./routes/reviews-route');
const dressesRoute = require('./routes/dresses-route.js');
const paymentRoute = require('./routes/payment-route'); 
const calenderRoute = require('./routes/calender-route');

const app = express()

app.use(cors())
app.use(express.json())

// service
app.use('/auth', authRoute);
app.use(userRoute);
app.use(rentRoute);
app.use(reviewsRoute);
app.use(dressesRoute);
app.use(paymentRoute);
app.use(calenderRoute);  

// notFound
app.use(notFound); 


// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, () => console.log('Server on Port :', port))
