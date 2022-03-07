import React from 'react'
import BG from '../Img/white.jpg'
import '../stylesheets/HowItWorks.css'
import $ from 'jquery'


export default function HowItWorks() {


    return (
        <div style={{ height: '500px', width: '100%' }}>

            <div class=" w-100 justify-content-center">
                <h2 className='w-100'> FAQ's</h2>
                <div className=' d-flex flex-row w-100 justify-content-center'>


                    <div class="panel-group accordion-columns " id="accordion">


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex  ' data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                    <div className='icons-question col-1 '> <i class="fa fa-question fs-4 "></i></div>
                                    <h4 class="question col-10"> What if someone wants to create a very dangerous, life threatening challenge? </h4>
                                    <div className='col-1 align-items-center text-center justify-content-center '><i class="fa fa-angle-down  fs-2"></i> </div>
                                </a>

                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                                <div class="panel-body">Unethical, dangerous challenges are never allowed to take place on Charoo!</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse2"> <h4 class="question">Can I donate on Challenges I created myself?</h4> <i class="fa fa-angle-down fs-2"></i></a>

                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">Yes.</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse3"><h4 class="question">Can I use my donation to lower my income tax? </h4> <i class="fa fa-angle-down fs-2"></i></a>

                            </div>
                            <div id="collapse3" class="panel-collapse collapse">
                                <div class="panel-body">Yes, this might be possible in your country. Please check with your tax department for further clarification.</div>
                            </div>
                        </div>



                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse4"> <h4 class="question">Where can I find my lottery ticket?  </h4> <i class="fa fa-angle-down fs-2"></i></a>

                            </div>
                            <div id="collapse4" class="panel-collapse collapse">
                                <div class="panel-body">You can find your ticket in "My Account/Lottery".</div>
                            </div>
                        </div>
                    </div>


                    <div class="panel-group accordion-columns " id="accordion">

                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse5"><h4 class="question">What are the odds of me winning the Lottery as a Challenge Creator?  </h4> <i class="fa fa-angle-down fs-2"></i></a>

                            </div>
                            <div id="collapse5" class="panel-collapse collapse">
                                <div class="panel-body">0.2% winning chance.</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse6"> <h4 class="question">What are the odds of me winning the Lottery as a Donator?</h4> <i class="fa fa-angle-down fs-2"></i></a>

                            </div>
                            <div id="collapse6" class="panel-collapse collapse">
                                <div class="panel-body">This depends on the amount donated. The more you donate, the higher the winning chances.
                                    Donators can see the winning chance of their lottery ticket on the lottery ticket itself. Check out "My Account/Lottery".</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse7">  <h4 class="question">
                                    How do I access my lottery winnings?</h4> <i class="fa fa-angle-down fs-2"></i></a>

                            </div>
                            <div id="collapse7" class="panel-collapse collapse">
                                <div class="panel-body">Your lottery winnings are stored in an Ethereum address that you can access by downloading an external wallet such as Metamask plugin or Exodus wallet. The private keys to access the winnings that are on an Ethereum address and that you can access through the waller are stored in My Account/Lottery.</div>
                            </div>
                        </div>


                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <a className='d-flex' data-toggle="collapse" data-parent="#accordion" href="#collapse8"><h4 class="question">
                                    What if I don't pick up my winnings?  </h4> <i class="fa fa-angle-down fs-2"></i></a>

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
