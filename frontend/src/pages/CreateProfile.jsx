import React, { useState, useEffect } from 'react';
import { Polybase } from "@polybase/client";

const db = new Polybase({
    defaultNamespace: "pk/0xf2ff336f962b090be810291cdf85bc8350713470aa69d3f23c215e89a33339cf72250db8fdf9a86bba65d17b66bcedb27eecffdf10ac8d04c3517ac254050b0f/crowdfund3",
});



// import { DisplayCampaigns } from '../components';
// import { useStateContext } from '../context'

const CreateProfile = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    // create state for username, profileImage, social, bio
    const [username, setUsername] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [social, setSocial] = useState('');
    const [bio, setBio] = useState('');

    const userHandler = (event) => {
        setUsername(event.target.value);
    };

    const profileImageHandler = (event) => {
        setProfileImage(event.target.value);
    };

    const socialHandler = (event) => {
        setSocial(event.target.value);
    };

    const bioHandler = (event) => {
        setBio(event.target.value);
    };


    async function createRecord() {
        // .create(args) args array is defined by the constructor fn
        const recordData = await collectionReference.create([
            "new-york",
            "New York",
            db.collection("Person").record("johnbmahone")
        ]);
    }

    return (
        <div className='h-full'>
            <div className="h-[600px]">

                <div className='pt-8 px-4'>

                    <div className="relative flex row">
                        {/* <Image className="mask mask-squircle w-6 h-6 rounded-full ring-4 ring-gray-900 dark:ring-gray-900" src={profile} alt="profile image" /> */}
                        <div className="w-10 h-10 p-1 rounded-full border-2 border-indigo-500/100">
                            {/* <Image src={profile} alt="profile image"
                            style={{ objectFit: "cover" }} /> */}
                            {/* <Image className="w-10 h-10 rounded-full" src={profile} alt="" /> */}
                        </div>
                        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        <div className='px-4 items-center'>
                            <h1 className='font-bold text-lg'>Welcome</h1>
                            {/* <h1 className='text-[9px]'>{scwAddress}</h1> */}
                        </div>

                    </div>

                    <div className="relative my-5 w-full">
                        <h1 className="text-2xl pb- text-white font-bold font-sans">Create User Profile</h1>

                        <form className='p-5'>
                            {/* <div className="mb-6">
                                <label htmlFor="text"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipient Address</label>
                                <input type="text" id="input-recepient" onChange={recepientHandler} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0xdeaa150597535Eed8c95Ad090757815F1B9Da15d" required />
                            </div> */}

                            <div className="mb-6">
                                <label htmlFor="text"
                                    className="block mb-2 text-sm font-medium text-white dark:text-white">Set Your Username</label>
                                <input type="text" id="input-recepient" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0xShikhar" required />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="text"
                                    className="block mb-2 text-sm font-medium text-white dark:text-white">Desciption</label>
                                <input type="text" id="input-recepient" className="shadow-sm py-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Tell something about yourself" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="text"
                                    className="block mb-2 text-sm font-medium text-white dark:text-white">Profile Image</label>
                                <input type="text" id="input-recepient" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="https://imageurl.com/profile" />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="text"
                                    className="block mb-2 text-sm font-medium text-white dark:text-white">Social Link</label>
                                <input type="text" id="input-recepient" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="https://twitter.com/0xshikhar" />
                            </div>

                            {/* <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verifying <a className="text-blue-600 hover:underline dark:text-blue-500">Transaction</a></label>
                        </div> */}
                            <button type="submit" onClick={createRecord}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Your Profile</button>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateProfile;