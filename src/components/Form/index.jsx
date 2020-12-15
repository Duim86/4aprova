import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/material.css';
import { Typography } from '@material-ui/core';
import useStyles from './style';

export default function Form() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    phone: '',
  });
  const onSubmit = (data) => console.log(data);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Receba as últimas novidades
      </Typography>
      <Typography variant="h4" component="h2" className={classes.title}>
        Fique por dentro dos últimos Shows
      </Typography>

      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          name="name"
          id="name"
          label="Nome"
          type="text"
          inputRef={register}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          inputRef={register}
        />
        <TextField
          id="date"
          name="date"
          label="Data de Nascimento"
          type="date"
          defaultValue="2020-12-14"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={register}
        />
        <PhoneInput
          specialLabel="Telefone"
          country="br"
          value={state.phone}
          onChange={(phone) => setState({ phone })}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
          }}
        />
        <input type="hidden" name="phone" value={state.phone} ref={register} />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              name="checked"
              color="primary"
            />
          }
          label="Fique por dentro das novidades"
          inputRef={register}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
