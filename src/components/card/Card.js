import { useState } from 'react';

import { card } from '../../actions/card';
import Button from '@mui/material/Button';
// import { TextField } from '@mui/material';
import './card.css';
import Input from '../../utils/input/Input';

const Card = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [dateExp, setDateExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('1000');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Отправлена форма.');
  // };

  const validateInput = (input, reg, num = 0) => {
    return num
      ? reg.test(input) && input.length === num
        ? null
        : 'form__input-error'
      : reg.test(input)
      ? null
      : 'form__input-error';
  };

  const colorCard = validateInput(
    cardNumber,
    /[2-6]([0-9]{3})([0-9]{4}){3}/,
    16
  );
  const colorData = validateInput(dateExp, /([0-1][1-9]\/?)[0-9]{4}/, 7);
  const colorCvv = validateInput(cvv, /\d{3}/, 3);
  const colorAmount = validateInput(amount, /^\d+$/);

  const isEnabled = !colorCard && !colorData && !colorCvv && !colorAmount;

  // console.log(isEnabled, colorCard, colorData, colorCvv, colorAmount);
  return (
    <div className='form'>
      <div
        // onSubmit={handleSubmit}
        className='form__body'
        // action='#'
        // method='post'
      >
        <h3 className='form__title'>Заполните данные</h3>
        <div className='form__item'>
          <label for='cardNumber' className='form__label'>
            Card Number
          </label>
          <Input
            id='cardNumber'
            type='text'
            name='cardNumber'
            setValue={setCardNumber}
            value={cardNumber}
            className={`form__input ${colorCard}`}
            placeholder='Только цифры, длина значения 16'
          />
        </div>
        <div className='form__item-two'>
          <div>
            <label for='dateExp' className='form__label-two'>
              Expiration Date
            </label>
            <Input
              id='dateExp'
              type='text'
              name='dateExp'
              setValue={setDateExp}
              value={dateExp}
              className={`form__input-two ${colorData}`}
              placeholder='MM/YYYY'
            />
          </div>
          <div>
            <label for='cvv' className='form__label-two'>
              CVV
            </label>
            <Input
              id='cvv'
              type='text'
              name='cvv'
              setValue={setCvv}
              value={cvv}
              className={`form__input-two ${colorCvv}`}
              placeholder='3 цифры'
            />
          </div>
        </div>
        <div className='form__item'>
          <label for='amount' className='form__label'>
            Amount
          </label>
          <Input
            id='amount'
            type='text'
            name='amount'
            setValue={setAmount}
            value={amount}
            className={`form__input ${colorAmount}`}
            placeholder='Сумма, рублях'
          />
        </div>
        <Button
          type='submit'
          variant='contained'
          disabled={!isEnabled}
          onClick={() => card(cardNumber, dateExp, cvv, amount)}
        >
          Отправить
        </Button>
        {/* <button disabled={!isEnabled} className='btn'>
          Добавить
        </button> */}
      </div>
    </div>
  );
};

export default Card;
