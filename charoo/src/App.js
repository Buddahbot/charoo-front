import AppRouter from './AppRouter'
import { DonateController } from './context/DonateContext';
import {EventController} from './context/EventContext'



function App() {


  return (
    <div className="App">
      <EventController>
        <DonateController>
            <AppRouter />
        </DonateController>
      </EventController>
    </div>
  );
}

export default App;

