import React, { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Button } from "@material-ui/core";
//import { useAccount } from "../context/AccountProvider";

export default function WalletButtonH(props: {
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
      
      style={{color: '#FF9900', textTransform: 'capitalize'}}
    >
      {rendered === "" && "Connect your Wallet"}
      {rendered !== "" && rendered}
      
    </Button>
  );
}