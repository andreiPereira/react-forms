
import { useForm, Controller } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import FormInput from "./components/FormInput";

const App = () => {

  const { handleSubmit, control, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <Grid container sx={{ mt: 4 }} px={6}>

      <FormInput label="Login" name="user" control={control} />
      <FormInput label="Senha" name="password" control={control} />
      <FormInput label="Idade" name="age" control={control} />

        <Grid item xs={12} sm={12} sx={{ padding: '10px' }}>
          <Button variant="contained" fullWidth type="submit">Submit</Button>
        </Grid>

      </Grid>



    </form>
  );
};

export default App;
