import styles from "../../styles/styles.module.scss";
import { useForm } from "react-hook-form";
import WalletButton from "../WalletButton";
import useWeb3Modal from "../../hooks/useWeb3Modal";
import { Web3Provider } from "@ethersproject/providers";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
// import { Link } from "react-router-dom";
//Public
   


export default function ConnectWallet({ formStep, nextFormStep, provider, loadWeb3Modal, logoutOfWeb3Modal })

{
  const { register, handleSubmit, formState: { errors } } = useForm();
  //const { setFormValues } = useFormData();

  const onSubmit = (values) => {
    //setFormValues(values);
    nextFormStep();
  };
  
  return (
    <List>
      <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
            <Grid item xs={12} md={12} >
              <ListItem  alignItems="flex-start">
              <ListItemText className={formStep === 0 ? styles.showForm : styles.hideForm}>
                <WalletButton
                onClick={() => nextFormStep()}
                provider={provider as Web3Provider}
                loadWeb3Modal={loadWeb3Modal}
                logoutOfWeb3Modal={logoutOfWeb3Modal}
                />
                <span className="chooseWallet">Choose your favorite wallet</span>
       {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="displayName">Display Name*</label>
          <input type="text" {...register("displayName", { required: true })} />
          {errors.displayName && <span>This field is required</span>}
        </div>

        <div className={styles.formRow}>
          <label htmlFor="bio">Short Bio</label>
          <input type="text" {...register("bio")} />
        </div>

        <button type="submit">
          Next
        </button>
      </form>  */}
    </ListItemText>
    </ListItem>
    </Grid>

    <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', marginLeft: '0.75rem'}}>
      <ListItem alignItems="flex-start" >
    <ListItemText className="needWallet" >
    <span >I need a wallet</span>  
    {/* <Button
        onClick={handleClickOpen}
        
      /> */}
    
    </ListItemText>
    </ListItem> 
    </Grid>
    </Grid>
    </List> 
  );
}