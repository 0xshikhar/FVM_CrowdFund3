// import {
//   useContract,
//   useOwnedNFTs,
//   useValidDirectListings,
//   useValidEnglishAuctions,
// } from "@thirdweb-dev/react";
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


const Profile = () => {
  // const router = useRouter();
  // const [tab, setTab] = useState<"nfts" | "coins" | "listings" | "auctions">("nfts");
  const [tab, setTab] = useState("nfts");
  const [data, setData] = useState([]);
  // const address = router.query.address;

  // const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);


  return (
    <div className="rounded h-screen text-white bg-black">
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
        <div className={styles.profileName}>
          <div>0xshikhar.eth</div>
          <div>Full Stack Blockchain Developer</div>
          
          {/* {router.query.address} */}
        </div>
      </div>
    </div>
  );
}

export default Profile;

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