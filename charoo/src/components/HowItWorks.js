import React from 'react'
import BG from '../Img/white.jpg'
import '../stylesheets/HowItWorks.css'



export default function HowItWorks() {


    return (
        <div style={{
            width: '100%', backgroundImage: `url(${BG})`, backgroundRepeat: "no-repeat",
            backgroundPosition: "center", backgroundSize: "cover", paddingBottom: '100px'
        }}>

            <div class="CreateChallengeContainer " style={{ paddingBottom: '40px' }} >

                <div class="text-center mb-5">
                    <h2 style={{ color: '#212121', margin: '50px', fontSize: '35px' }} class="heading-section hover14">How It Works</h2>
                </div>
                <div className='whiteboard form-challenge howItWorks' >
                    <div class=" d-flex flex-column  justify-content-center  ">


                        <div className='col-9 ' style={{ fontSize: '14px', marginLeft: '10%' }}>

                            <h2 className='mb-5 text-center'>How To Create A Challenge: </h2>


                            <h4>1. Click on "Create a Challenge"  in My Account  </h4>

                            <h4>    2. Describe your challenge  </h4>

                            <p>  Answer a couple of questions to describe your challenge in detail...do  you want to run 5 km uphill, next week?</p>

                            <h4> 3. Pick a donation goal</h4>

                            <p> How much money would you like to collect for charity, as a minimum, before starting your challenge.</p>

                            <h4>4. Select a Charity </h4>

                            <p>  This will be the charity where the donations will be transferred to once the donation goal has been reached and your challenge has been completed successfully by you.</p>

                            <h4> 5. Click "Create Challenge Now"</h4>

                            <p>Congrats! You have created your first challenge. You will now see a link to your Charoo! challenge page. This page will have all the information about the challenge. </p>

                            <h4>  6. Share the Charoo! Challenge link</h4>

                            <p>   Get your friends/followers on social media to donate to the charity challenge by posting the link to your social media timeline. Your friends/followers can also share the Charoo! Challenge link with their friends/followers, to further the good cause you you created.</p>

                            <h4> 7. Start your Challenge....Go! Go! Go!</h4>

                            <p> Once the donation goal has been reached you may start your challenge. To do so, click on the green marked "start challenge now" on the challenge box in "My Account".</p>

                            <h4> 8. Finish the challenge </h4>

                            <p>   Click on "Finish Challenge". Hurray, the world is now a better place because of you!!</p>

                        </div>

                    </div>

                </div>


            </div>

            <div class=" w-100 justify-content-center  ">
                <div className='text-center m-5'>  <h2 className='faq'> FAQ's</h2></div>
                <div className=' d-flex flex-row w-100 justify-content-center'>


                    <div class="panel-group accordion-columns " id="accordion">


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse1">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10"> What if someone wants to create a very dangerous, life threatening challenge? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                                <div class="panel-body">Unethical, dangerous challenges are never allowed to take place on Charoo!</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse2">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10"> Can I donate on Challenges I created myself? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">Yes.</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">



                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse3">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10">  Can I use my donation to lower my income tax? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse3" class="panel-collapse collapse">
                                <div class="panel-body">Yes, this might be possible in your country. Please check with your tax department for further clarification.</div>
                            </div>
                        </div>



                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse4">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10">Where can I find my lottery ticket? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse4" class="panel-collapse collapse">
                                <div class="panel-body">You can find your ticket in "My Account/Lottery".</div>
                            </div>
                        </div>
                    </div>


                    <div class="panel-group accordion-columns " id="accordion">

                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse5">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10">What are the odds of me winning the Lottery as a Challenge Creator?  </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse5" class="panel-collapse collapse">
                                <div class="panel-body">0.2% winning chance.</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse6">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10">What are the odds of me winning as a Donator? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse6" class="panel-collapse collapse">
                                <div class="panel-body">This depends on the amount donated. The more you donate, the higher the winning chances.
                                    Donators can see the winning chance of their lottery ticket on the lottery ticket itself. Check out "My Account/Lottery".</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse7">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10">How do I access my lottery winnings? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse7" class="panel-collapse collapse">
                                <div class="panel-body">Your lottery winnings are stored in an Ethereum address that you can access by downloading an external wallet such as Metamask plugin or Exodus wallet. The private keys to access the winnings are stored in My Account / Lottery.</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse8">

                                    <div style={{ borderRight: "1px rgb(221, 221, 221) solid" }} className='icons col-1 '> <i class="fa fa-question fs-4 "></i></div>

                                    <h4 class="question col-10">What if I don't pick up my winnings? </h4>

                                    <div className='icons col-1 '><i class="fa fa-angle-down  fs-1"></i> </div>
                                </a>

                            </div>
                            <div id="collapse8" class="panel-collapse collapse">
                                <div class="panel-body">Our goal is to not waste any donation money that will not be picked up by a winner, for any reason. That's why we have programmed a smart contract that holds you private keys and will send those private keys to us in 1 year time (after the end of the lottery draw) if you haven't picked up your winnings.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
