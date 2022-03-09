import AppRouter from './AppRouter'
import { DonateController } from './context/DonateContext';
import {EventController} from './context/EventContext'
import {DonationController} from './context/DonationContext'
import {SingleEvController} from './context/SingleEvContext'
import { ProfileController } from './context/ProfileContext';

function App() {


  return (
    <div className="App">

  
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
 

    </div>
  );
}

export default App;

