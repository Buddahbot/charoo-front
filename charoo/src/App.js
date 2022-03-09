import AppRouter from './AppRouter'
import { DonateController } from './context/DonateContext';
import {EventController} from './context/EventContext'
import {DonationController} from './context/DonationContext'
import {SingleEvController} from './context/SingleEvContext'
import { ProfileController } from './context/ProfileContext';
// import react moralis

require('dotenv').config()

function App() {


  return (
    <div className="App">

    {/* <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      initializeOnMount={false}> */}
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
      {/* </MoralisProvider> */}

    </div>
  );
}

export default App;

