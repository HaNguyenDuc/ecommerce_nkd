const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/logout", (req, res) => {
  res.status(200).json("Logout successful");
});
//LOGIN

router.post("/login", async (req, res) => {
  try {
    console.log(req)
    const user = await User.findOneAndUpdate({ username: req.body.username });
    console.log(user)
     !user && res.status(401).json("Wrong credentials!");

    
    // const hashedPassword = CryptoJS.AES.decrypt(user?.password, process.env.PASS_SEC);
    // console.log(hashedPassword)
    // const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    // console.log(hashedPassword,OriginalPassword )
    // OriginalPassword !== req.body.password &&
    //   res.status(401).json("Wrong credentials!");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    console.log(bcrypt.compare(req.body.password, user.password))
    // if (!validPassword) {
    //   return res.status(401).json("Wrong credentials!");
    // }
    console.log(validPassword)
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
