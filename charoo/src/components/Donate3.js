import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import { DonationContext } from '../context/DonationContext';
import { donationUpload } from '../logic/UserFunctions';
import { useWeb3Transfer } from "react-moralis";


import BG from '../Img/white.jpg'
import BG3 from '../Img/pp.png'
import BG2 from '../Img/mm.png'
import '../stylesheets/Carousel.css'
import '../stylesheets/Challenge.css'



const Donate3 = () => {
    const [donation, setDonation] = useContext(DonationContext)
    const [checkedOne, setCheckedOne] = useState(false);
    const [feedback, setFeedBack] = useState(``)
    const { authenticate, isAuthenticated, user, account, web3, Moralis } = useMoralis()


    let navigate = useNavigate();

    const handleChangeOne = () => {
        setCheckedOne(true);

    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    // Web3Provider ? newDonation()
    console.log(donation)
    const createDonation = (e) => {
        //e.preventDefault()

        const newDonation = {
            eventTitle: donation.eventTitle,
            createdBy: donation.createdBy,
            eventId: donation.eventId,
            donatedBy: donation.donatedBy,
            amount: donation.amount,
            comments: checkedOne,
        }
        console.log(newDonation)

        donationUpload(newDonation)
        navigate('./donate4')
    }


    const transferEth = async () => {
        //   const { fetch, error, isFetching } = useWeb3Transfer({
        //     amount: Moralis.Units.ETH(0.5),
        //     receiver: "0x8C86a153c7dF74e95F95cC902B2b6994e4ACE6e4",
        //     type: "native",
        //   });

        let params = {
            type: "native",
            receiver: '0x8C86a153c7dF74e95F95cC902B2b6994e4ACE6e4',
            amount: Moralis.Units.ETH(0.01)
        }
        //console.log(params)
        const logged = await Moralis.enableWeb3(params)
        const tx = await Moralis.transfer(params)
        console.log(logged)
        console.log(tx.hash)
        tx.hash && createDonation();
        setFeedBack(`Success check the txHash here : ${tx.hash}`)

        //   return (
        //     // Use your custom error component to show errors
        //     <div>
        //       {error && console.log(error)}
        //       <button onClick={() => fetch()} disabled={isFetching}>
        //         Transfer
        //       </button>
        //     </div>
        //   );
    };

    if (!isAuthenticated) {
        return (
            <div>
                <div style={{
                    width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
                }}>

                    <div class="CreateChallengeContainer " style={{ paddingBottom: '40px' }} >


                        <div className='whiteboard d-flex justify-content-center form-challenge howItWorks mt-5 ' >
                            <div class=" d-flex flex-column w-100 justify-content-center  ">


                                <div className=' ' style={{ fontSize: '14px', width: '100%' }}>

                                    <h2 className='mb-5 text-center'>Please choose a payment method: </h2>

                                    <div className='d-flex flex-row justify-content-center'>

                                        <div tabIndex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG3})`, width: '300px', marginTop: '30px', marginBottom: '60px', height: '220px' }} >
                                        </div>

                                        <div onClick={authenticate} tabIndex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG2})`, width: '300px', marginTop: '30px', marginBottom: '60px', height: '220px' }} >

                                        </div>
                                    </div>
                                    <div className='d-flex  justify-content-center'>
                                        <button style={{ width: '300px' }} className="form-control btn btnSign submit fs-3 " onClick={createDonation}>DONATE NOW</button>
                                    </div>


                                </div> </div> </div> </div> </div> </div >

        )
    }
    return (
        <div>
            <div style={{
                width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
                backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
            }}>

                <div class="CreateChallengeContainer " style={{ paddingBottom: '40px' }} >


                    <div className='whiteboard d-flex justify-content-center form-challenge howItWorks mt-5 ' >
                        <div class=" d-flex flex-column w-100 justify-content-center  ">


                            <div className=' ' style={{ fontSize: '14px', width: '100%' }}>

                                <h2 className='mb-5 text-center'>Please choose a payment method: </h2>

                                <div className='d-flex flex-row justify-content-center'>

                                    <div tabindex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG3})`, width: '300px', marginTop: '30px', marginBottom: '60px', height: '220px' }} >
                                    </div>

                                    <div tabindex="-1" className='carousele-item carousele-charity-margin ' style={{ backgroundImage: `url(${BG2})`, width: '300px', marginTop: '30px', marginBottom: '60px', height: '220px' }} >

                                    </div>

                                </div>
                                {/* <form onSubmit={handleSubmit}>
                                    <button onClick={transferEth}>HEYY</button>
                                </form> */}

                                <div className='d-flex  justify-content-center'>
                                    <button style={{ width: '300px' }}
                                        className="form-control btn btnSign submit fs-3 "
                                        onClick={e => {
                                            createDonation(e);
                                            transferEth(e);
                                        }}>DONATE NOW</button>
                                </div>

                            </div> </div> </div> </div> </div> </div >
    )
}

export default Donate3