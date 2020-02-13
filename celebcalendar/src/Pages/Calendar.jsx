import React, { Component } from 'react';
import '../App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import Events from "../JSON-Files/CelebList.json";
import '..'
import swal from '@sweetalert/with-react';
import Actors from "../JSON-Files/Actors.json";
import Athletes from "../JSON-Files/Athletes.json";
import Entrepreneurs from "../JSON-Files/Entrepreneurs.json";
import Youtubers from "../JSON-Files/Youtubers.json";
import './CssFile.css';
import Joyride from 'react-joyride';
import StarIcon from '@material-ui/icons/Star';



const localizer = momentLocalizer(moment);

class theCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredEvents: [],
      events: props.events
    };
  }

  componentDidMount() {
    this.setState({ filteredEvents: Events });
  }

  onResetArray = () => {
    this.setState({ filteredEvents: Events });
  };

  filterActors = () => {
    this.setState({ filteredEvents: Actors });
  };

  filterAthletes = () => {
    this.setState({ filteredEvents: Athletes });
  };

  filterEntrepreneurs = () => {
    this.setState({ filteredEvents: Entrepreneurs });
  };

  filterYoutubers = () => {
    this.setState({ filteredEvents: Youtubers });
  };
  //Setting of States so that the calendar may read events. Followed by filtering of Celbs by Cat.

  state2 = {
    steps:
      [
        { target: ".rbc-btn-group", content: "Use these buttons to navigate to different months"},
        { target: ".dropbtn", content: "Hover over the categories button to refine your celebrity birthday search.", placement: "right" },
        { target: ".rbc-active", content: "Click here to change the date range of the calendar, and click 'Agenda' to show a two week view of the calendar"},
        { target: ".rbc-event-content", content: "Click a celebrity's name to see a photo and a brief description of them", placement: "right" }
      ]
  };
  //This state is set for the Joyride. The target is the CSS file of which the icon will apear at and the content covers what will be in the joyride.

  render() {
    const { filteredEvents } = this.state;
    //rendering events
    const { steps } = this.state2;
    //rendering the joyrides
 
    return (
      <div className="theCalendar">
        <Joyride
          steps={steps}
          continuous={true}
          locale={{ back: 'Back', close: 'Close', last: 'Close', next: 'Next', skip: 'Close' }}
          styles={{
            options: {
              textColor: 'white',
              arrowColor: 'white',
              primaryColor: ' gray',
              backgroundColor: 'red',
              beaconSize: 40,
            }
          }}
        />
        
        {/* The Joyride is displayed by this and has the styles set. */}
        <div class="dropdown">
          <button class="dropbtn">Categories</button>
          <div class="dropdown-content">
            <button onClick={this.onResetArray}>All Celebs  </button>
            <button onClick={this.filterActors}>Actors</button>
            <button onClick={this.filterAthletes}>Athletes</button>
            <button onClick={this.filterEntrepreneurs}>Entrepreneurs</button>
            <button onClick={this.filterYoutubers}>Youtubers</button>
          </div>
        </div>
        <button class="favebtn">*</button>

        
        {/* Filter buttons */}
        <Calendar
          className="rbc-calendar"
          localizer={localizer}
          defaultDate={new Date()}
          events={filteredEvents}
          onSelectEvent={  
            Events => swal(Events.title, Events.briefBio, Events.imageLink)}
          startAccessor="start"
          endAccessor="end"
        />
        {/* Calendar */}
        

      </div>
    );
  }
}

export default theCalendar;