const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

//Set up server
const app = express();
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

//Connect to mongoDB
mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},(err) => {
    if(err) return console.error(err);
    console.log("Connected to mongoDB");
});

app.use("/auth", require("./apis/auth/authRouter.js"));
app.use("/avatar", require("./apis/users/avatarRouter"));
app.use("/user", require("./apis/users/userRouter"));
app.use("/project", require("./apis/projects/projectRouter.js"));
app.use("/projectImage", require("./apis/projects/imageRouter"));
app.use("/mail", require("./apis/mail/mailRouter"));
app.use("/admin", require("./apis/admin/adminRouter"));