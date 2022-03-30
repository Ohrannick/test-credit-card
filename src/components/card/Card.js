import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { card } from '../../actions/card';
// import Button from '@mui/material/Button';
import './card.css';

export default function Card() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className='App'>
      <h1>Hello Form - react-hook-form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Card Number
          <input
            {...register('cardNumber', {
              required: 'Номер карты обязателен к заполнению...',
              max: {
                value: 16,
                message: 'требуется 16 цифр',
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.cardNumber && (
            <p>{errors?.cardNumber?.message || 'Error!'}</p>
          )}
        </div>

        <input type='submit' />
      </form>
    </div>
  );
}

// const Card = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [dateExp, setDateExp] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [amount, setAmount] = useState('1000');

//   const validateInput = (input, reg, num = 0) => {
//     return num
//       ? reg.test(input) && input.length === num
//         ? null
//         : 'form__input-error'
//       : reg.test(input)
//       ? null
//       : 'form__input-error';
//   };

//   const colorCard = validateInput(
//     cardNumber,
//     /[2-6]([0-9]{3})([0-9]{4}){3}/,
//     16
//   );
//   const colorData = validateInput(dateExp, /([0-1][1-9]\/?)[0-9]{4}/, 7);
//   const colorCvv = validateInput(cvv, /\d{3}/, 3);
//   const colorAmount = validateInput(amount, /^\d+$/);

//   const isEnabled = !colorCard && !colorData && !colorCvv && !colorAmount;

//   return (
//     <div className='form'>
//       <div className='form__body'>
//         <h3 className='form__title'>Заполните данные</h3>
//         <div className='form__item'>
//           <label for='cardNumber' className='form__label'>
//             Card Number
//           </label>
//           <input
//             id='cardNumber'
//             type='text'
//             name='cardNumber'
//             onChange={(e) => setCardNumber(e.target.value)}
//             value={cardNumber}
//             className={`form__input ${colorCard}`}
//             placeholder='Только цифры, длина значения 16'
//           />
//         </div>
//         <div className='form__item-two'>
//           <div>
//             <label for='dateExp' className='form__label-two'>
//               Expiration Date
//             </label>
//             <input
//               id='dateExp'
//               type='text'
//               name='dateExp'
//               onChange={(e) => setDateExp(e.target.value)}
//               value={dateExp}
//               className={`form__input-two ${colorData}`}
//               placeholder='MM/YYYY'
//             />
//           </div>
//           <div>
//             <label for='cvv' className='form__label-two'>
//               CVV
//             </label>
//             <input
//               id='cvv'
//               type='text'
//               name='cvv'
//               onChange={(e) => setCvv(e.target.value)}
//               value={cvv}
//               className={`form__input-two ${colorCvv}`}
//               placeholder='3 цифры'
//             />
//           </div>
//         </div>
//         <div className='form__item'>
//           <label for='amount' className='form__label'>
//             Amount
//           </label>
//           <input
//             id='amount'
//             type='text'
//             name='amount'
//             onChange={(e) => setAmount(e.target.value)}
//             value={amount}
//             className={`form__input ${colorAmount}`}
//             placeholder='Сумма, рублях'
//           />
//         </div>
//         <Button
//           type='submit'
//           variant='contained'
//           disabled={!isEnabled}
//           onClick={() => card(cardNumber, dateExp, cvv, amount)}
//         >
//           Отправить
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Card;
