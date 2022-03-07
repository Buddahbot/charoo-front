import AppRouter from './AppRouter'

import { ProfileController } from './context/ProfileContext';
import { DonateController } from './context/DonateContext';
import {EventController} from './context/EventContext'
import {DonationController} from './context/DonationContext'
import {SingleEvController} from './context/SingleEvContext'
// import react moralis

import { MoralisProvider } from "react-moralis";

function App() {


  return (
    <div className="App">

    {/* <MoralisProvider
      appId={'o8C4ooSXYjnwMwoCmEHYbwzFZI4btzdZuwIHrSZM'}
      serverUrl={'https://lyzcfadfbrj6.usemoralis.com:2053/server'}
        initializeOnMount={false}>  */}
        
      <ProfileController>
        <EventController>
          <DonateController>
            <DonationController>
              <SingleEvController>
                <AppRouter />
              </SingleEvController>
            </DonationController>
          </DonateController>
        </EventController>
      </ProfileController>
        
    {/* </MoralisProvider>  */}

    </div>
  );
}

export default App;

