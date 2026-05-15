import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Listing from './Pages/Listing';
import Packageitinerary from './Pages/Packageitinerary';
import HotelDetails from './Pages/HotelDetails';
import Hotel from './Components/Itinerarytabs/Hotel';
import Activities from './Components/Itinerarytabs/Activities';
import ActivityDetails from './Pages/ActivityDetails';
import ActivityListing from './Pages/ActivityListing';
import AllActivities from './Components/Activity/AllActivities';
import ItineraryTabs from './Components/Itinerarytabs/Itinerarytabs';
import HotelListing from './Components/Hotel/HotelListing';
import ItineraryTimeSlotsComponent from './Components/Itinerarytabs/ItineraryTimeSlots';
import HotelListingMain from './Pages/HotelListingMain';
import PrintItinerary from './Components/Itinerarytabs/ItineraryPrice/PrintItineraryPDF';
import PrintDownloadEmail from './Components/Itinerarytabs/ItineraryPrice/PrintDownloadEmail';
import ExploreDestinations from './Components/ExploreDestinations/ExploreDestinations';
import ActivityModal from './Components/Activity/ActivityModal';
import { ViewActivity } from './Components/Itinerarytabs/View Activity/ViewActivity';
import Activity from './Components/Itinerarytabs/Activity';
import CreateItinerary from './Components/Banner/CreateItinerary';
import Hotelviewdetails from './Components/Hotel/Hotelviewdetails';
import ViewHotel from './Components/Banner/ViewHotel.jsx';
import HotelModal from './Components/Banner/HotelModal.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/explore' element={<ExploreDestinations />} />
          <Route path='/Listing' element={<Listing />} />
          <Route path='/ActivityModal' element={<ActivityModal />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/view-activity/:id' element={<ViewActivity />} />
          <Route path='/Packageitinerary/:id' element={<Packageitinerary />} />
          <Route path="/allactivities/:id" element={<AllActivities />} />
          <Route path="/Activities/:id" element={<Activities />} />
          <Route path="/ActivityDetails/:activityId" element={<ActivityDetails />} />
          <Route path="/Hotel/:id" element={<Hotel />} />
          <Route path="/HotelDetails/:hotelId" element={<HotelDetails />} />
          <Route path="/ActivityListing/:activityId" element={<ActivityListing />} />
          <Route path='/allactivities/:packageId' element={<AllActivities />} />
          <Route path="/itinerary/:id" element={<ItineraryTabs />} />
          <Route path="/HotelListing" element={<HotelListing />} />
          <Route path="/AllHotelsListing" element={<HotelListingMain />} />
          <Route path="/itinerarytimeslot/:id" element={<ItineraryTimeSlotsComponent />} />
          <Route path="/PrintDownload" element={<PrintDownloadEmail />} />
          <Route path="/print-itinerary" element={<PrintItinerary />} />
          <Route path="/CreateItinerary" element={<CreateItinerary />} />
          <Route path='/ViewHotel/:id' element={<ViewHotel />} />
          <Route path='/HotelModal' element={<HotelModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
