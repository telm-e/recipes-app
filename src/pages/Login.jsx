import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import Input from '../components/Input';
import Button from '../components/Button';
import UserContext from '../context/userContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setLoggedUser } = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const MIN = 6;

  // Fazer validação do email e senha.
  // Usar useEffect passando como 2ndo arg. um arr com as dependências email e password,
  // para rodar a validação toda vez que esses estados mudarem.
  useEffect(() => {
    const flag = validator.isEmail(email) && password.length > MIN;
    if (flag) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  // Controlar submit do form, prevenindo comport. padrão,
  // chamar setLoggedUser pra setar o email do Provider,
  // e redirecionar para pag. Foods.
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedUser(email);
    history.push('/foods');
  };

  return (
  // Componentizar Input e Button, e passo atrib. via props
    <form onSubmit={ handleSubmit }>
      <div>
        <Input
          type="email"
          name="Email"
          data-testid="email-input"
          placeholder="Type your email"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div>
        <Input
          type="password"
          data-testid="password-input"
          name="Password"
          placeholder="******"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <Button
        type="submit"
        data-testid="login-submit-btn"
        value="Enter"
        disabled={ isDisabled }
      />
    </form>
  );
};

export default Login;
