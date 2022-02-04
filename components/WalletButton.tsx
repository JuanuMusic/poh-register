import React, { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Button } from "@material-ui/core";
//import { useAccount } from "../context/AccountProvider";

export default function WalletButton(props: {
  loadWeb3Modal?: any;
  logoutOfWeb3Modal?: any;
  provider?: Web3Provider;
  onClick?: any;
}) {
  // const { account, web3Provider } = useAccount();
  const [rendered, setRendered] = useState("");

  // useEffect(() => {
  //   // async function fetchAccount() {
  //   //     if (!props.provider) {
  //   //       return;
  //   //     }

  //   //     // Resolve the ENS name for the first account.
  //   //     const name = await props.lookupAddress(account);

  //   //     // Render either the ENS name or the shortened account address.
  //   //     if (name) {
  //   //       setRendered(name);
  //   //     } else {
  //   //       setRendered(account.substring(0, 6) + "..." + account.substring(36));
  //   //     }
  //   // }
  //   // fetchAccount();
  // }, [web3Provider, account]);

  return (
    <Button 
      onClick={() => {
        console.log("TODO");
        //props.onClick && props.onClick();
          if (!props.provider) {
            props.loadWeb3Modal();
          } else {
            props.logoutOfWeb3Modal();
          }
      }}
      style={{
        position: 'relative' ,
        color: 'black',
        textTransform: 'none',
        margin: 'auto',
        left: '12px',
        width: '-webkit-fill-available',
        top: '-14px',
        padding: 0,
      }}>
      {rendered === "" && "I already have a wallet"}
      {rendered !== "" && rendered}
      
    </Button>
  );
}
