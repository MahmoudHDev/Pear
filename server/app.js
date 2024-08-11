import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const uri = "mongodb://localhost:27017/users";
mongoose.connect(uri);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 9000;

app.use(cors());
const { Schema } = mongoose;

const UserShema = new Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    age: Number,
    gender: String,
});

const User = mongoose.model('User', UserShema);

app.get('/', (req, res) => {
    res.send('Hello World!');

});

app.post('/posts', async (req, res) => {

    if (req.body.id !== "") {
        const userData = await User.findById(req.body.id);


        const { password, ...rest } = Object.assign({}, userData._doc);

        res.send({ status: true, data: rest })
    } else {
        res.send({ status: false })
    }
});


app.post('/register', (req, res) => {
    const newUser = new User(req.body)
    newUser.save()
        .then(() => {
            console.log('Saved')
            res.send({ Saved: true, message: "User saved Successfully" })
        });
});


app.post('/login', async (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    try {
        const userData = await User.find({ email: userEmail, password: userPassword });
        userData.length !== 0 ? res.send({ userData: userData[0], logged: true }) : res.send({ userData: userData, logged: false })
    } catch (err) {
        console.log(err)
    };
});


app.post('/profile', async (req, res) => {
    const userID = req.body.id;

    try {
        const user = await User.find(userID);
        user.length !== 0 ? res.send({ res: user[0], success: true }) : res.send({ res: null, success: false })

    } catch (error) {
        console.log(error)
    };

});


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})