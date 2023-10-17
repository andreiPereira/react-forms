
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

        <FormInput label="Login" name="user" control={control} required/>
        <FormInput label="Senha" name="password" control={control} type='password' required/>

        <Grid item xs={12} sm={12} sx={{ padding: '10px' }}>
          <Button variant="outlined" fullWidth type="submit">Submit</Button>
        </Grid>

      </Grid>
      
    </form>
  );
};

export default App;
