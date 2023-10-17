import React from 'react';
import { Controller } from 'react-hook-form';
import { Grid, TextField } from '@mui/material';

const FormInput = ({ name, control, label }) => {
    return (
        <Grid item xs={12} sm={12} sx={{ padding: '10px' }}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={label.charAt(0).toUpperCase() + label.slice(1)} // Usa o nome para gerar um label capitalizado
                        variant="outlined"
                        fullWidth
                    />
                )}
            />
        </Grid>
    );
};

export default FormInput;
