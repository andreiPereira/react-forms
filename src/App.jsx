
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import FormInput from "./components/FormInput";

const App = () => {

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <Grid container sx={{ mt: 4 }} px={6}>

        <FormInput label="Login" name="user" control={control} />
        <FormInput label="Senha" name="password" control={control} type='password' />
        <FormInput label="Idade" name="age" control={control} type='number' size={6} />

        <Grid item xs={12} sm={6} mt={1.2}>
          <Button variant="contained" sx={{paddingY:1.8}}  fullWidth type="submit">Submit</Button>
        </Grid>

      </Grid>
      
    </form>
  );
};

export default App;
