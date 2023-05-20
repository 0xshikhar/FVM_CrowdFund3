import {
  useContract,
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
// import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";


import styles from "../styles/Profile.module.css";
import randomColor from "../utils/randomColor";
// import Header from "../../components/Header";


const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];



export default function Profile() {
  // const router = useRouter();
  // const [tab, setTab] = useState<"nfts" | "coins" | "listings" | "auctions">("nfts");
  const [tab, setTab] = useState("nfts");
  const [data, setData] = useState([]);
  // const address = router.query.address;

  // console.log("address", address)


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`https://explorer.testnet.mantle.xyz/api?module=account&action=tokenlist&address=${router.query.address}`);
  //     const jsonData = await response.json();
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     console.log("JSON DATA", jsonData)
  //     setData(jsonData);
  //   };
  //   fetchData();
  // }, [address]);




  // const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);


  return (
    <div className="pt-4 h-full text-white bg-black">
      {/* <Header /> */}
      <div className="px-6 pt-4">
        <div
          className={styles.coverImage}
          style={{
            background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
          }}
        />
        <div
          className={styles.profilePicture}
          style={{
            background: `linear-gradient(90deg, ${randomColor3}, ${randomColor4})`,
          }}
        />
        <h1 className={styles.profileName}>
          <div>0xshikhar.eth</div>
          {/* {router.query.address} */}
          {/* {router.query.address ? (
            router.query.address.toString().substring(0, 4) +
            "..." +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320" />
          )} */}
        </h1>
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react'

// import { DisplayCampaigns } from '../components';
// import { useStateContext } from '../context'

// const Profile = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [campaigns, setCampaigns] = useState([]);

//   const { address, contract, getUserCampaigns } = useStateContext();

//   const fetchCampaigns = async () => {
//     setIsLoading(true);
//     const data = await getUserCampaigns();
//     setCampaigns(data);
//     setIsLoading(false);
//   }

//   useEffect(() => {
//     if(contract) fetchCampaigns();
//   }, [address, contract]);

//   return (
//     <DisplayCampaigns 
//       title="All Campaigns"
//       isLoading={isLoading}
//       campaigns={campaigns}
//     />
//   )
// }

// export default Profile