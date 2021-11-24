import styles from "../styles/styles.module.scss";
import Image from 'next/image';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import WalletButtonH from "../components/WalletButtonH";
import { Web3Provider } from "@ethersproject/providers";

export default function NavBar({ nextFormStep, provider, loadWeb3Modal, logoutOfWeb3Modal })
{
  const onSubmit = (values) => {
    //setFormValues(values);
    nextFormStep();
  }; 
  

  return (
    <div >
      <Image className={styles.headerLogo} src="/images/logopoh.png" alt="me" width="26" height="31"    />
      <ListItem className={styles.NavConnect} >
        <ListItemText style={{color:"#979797"}}>Already Registered?
      <WalletButtonH
      onClick={() => nextFormStep()}
      provider={provider as Web3Provider}
      loadWeb3Modal={loadWeb3Modal}
      logoutOfWeb3Modal={logoutOfWeb3Modal}
                    /> </ListItemText>
      </ListItem> 
    </div>
  );
}
