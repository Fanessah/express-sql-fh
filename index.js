import express from 'express'
import { getAllCustomers,getCustomerById,addNewCustomers } from './src/customers.js'



const app = express()


app.use(express.json())
app.get('/customers',getAllCustomers)
app.get('/customers/:customerId', getCustomerById)
app.get('/customers',addNewCustomers)
app.listen(3030, () => console.log ('Listening on http://localhost:3030...'))

