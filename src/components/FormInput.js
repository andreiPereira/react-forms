import React from 'react';
import { Controller } from 'react-hook-form';
import { Grid, TextField } from '@mui/material';

const FormInput = ({ name, control, label, type, size, required, defaultValue }) => {

    const defaults = {
        type : type ? type : 'text',
        size: size ? size : 12,
        required: required ? true : false,
    }

    return (
        <Grid item xs={12} sm={defaults.size} sx={{ padding: '10px' }}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={label.charAt(0).toUpperCase() + label.slice(1)} // Usa o nome para gerar um label capitalizado
                        variant="outlined"
                        required={defaults.required}
                        type={defaults.type}
                        fullWidth
                    />
                )}
            />
        </Grid>
    );

};

export default FormInput;
