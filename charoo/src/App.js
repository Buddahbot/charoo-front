import AppRouter from './AppRouter'
import { DonateController } from './context/DonateContext';
import {EventController} from './context/EventContext'
import {DonationToPaymentController} from './context/DonationToPaymentContext'
// import react moralis

function App() {


  return (
    <div className="App">

    {/* <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      initializeOnMount={false}> */}

      <EventController>
        <DonateController>
          <DonationToPaymentController>
            <AppRouter />
          </DonationToPaymentController>
        </DonateController>
      </EventController>

      {/* </MoralisProvider> */}

    </div>
  );
}

export default App;

