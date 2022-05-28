import './Assets/main.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import MeetTheTeam from './components/MeetTheTeam';
import SpecialPlaces from './components/SpecialPlaces'
import SectionReviews from './components/SectionReviews';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

function App() {
  return (
    <div className="App">

      <Header />
      <SectionOne />
      <SectionTwo />
      <MeetTheTeam />
      <SpecialPlaces />
      <SectionReviews />
      <Footer />
    </div>
  );
}

export default App;
