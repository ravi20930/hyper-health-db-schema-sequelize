require("dotenv").config()
const express = require('express')
const sequelize = require('./utils/database')

const Consultation=require('./models/consultation')
const DoctorAvailableTiming=require('./models/doctorAvailableTiming')
const UserReview=require('./models/userReview')
const ConsultationSymptom=require('./models/consultationSymptom')
const ConsultationVitalSign=require('./models/consultationVitaSign')
const Prescription=require('./models/prescription')
const PrescriptionMedicine=require('./models/prescriptionMedicine')
const UserDocument=require('./models/userDocument')
const UserPayment=require('./models/userPayment')
const UserLanguage=require('./models/userLanguage')
const UserSpecialization=require('./models/userSpecialization')
const UserAddress=require('./models/userAddress')
const UserRole=require('./models/role')
const News = require('./models/news')


const app = express()

sequelize.sync({alter:true})


app.get("/", (req, res) => {
    res.json({ message: "Login/Signup" })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
