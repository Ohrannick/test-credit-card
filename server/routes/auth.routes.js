const Router = require('express');
const User = require('../models/User');
const Card = require('../models/Card');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const router = new Router();

router.post(
  '/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check(
      'password',
      'Password must be longer than 3 and shorter than 12'
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      console.log(req.body);
      const errors = validationResult(req, res);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Uncorrect request', errors });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exists` });
      }

      const hasPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hasPassword });
      await user.save();
      return res.json({ message: `User with email ${email} was created` });
    } catch (e) {
      console.log(e);
      res.send({ message: 'Server error' });
    }
  }
);

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(404).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
      expiresIn: '1h',
    });
    return res.json({
      token: token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

router.post('/card', async (req, res) => {
  try {
    const { cardNumber, dateExp, cvv, amount } = req.body;
    const isCard = await Card.findOne({ cardNumber });
    console.log('isCard', isCard, cardNumber, dateExp, cvv, amount);
    // if (!isCard) {
    //   return res
    //     .status(404)
    //     .json({ message: `Card with number ${cardNumber} already exists` });
    // }

    const card = new Card({ cardNumber, dateExp, cvv, amount });
    await card.save();
    return res.json({
      card: {
        id: card.id,
        cardNumber: card.cardNumber,
        dateExp: card.dateExp,
        cvv: card.cvv,
        amount: card.amount,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: 'Server error' });
  }
});

module.exports = router;
