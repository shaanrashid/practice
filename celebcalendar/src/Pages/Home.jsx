import React from 'react';
import './CssFile.css';
import Joyride from 'react-joyride';

class Home extends React.Component {
    /* Target uses a CSS selector (.example) to find what bit of the page to add the joyride to. Content displays whatever you want to display in the box */
    state = {
        steps:
            [
                { target: ".CelebLogo", content: "Welcome to our page. Click next to explore." },
                { target: ".MenuButton", content: "Click the menu to explore the website." }
            ]
    };
    //This state is set for the Joyride. The target is the CSS file of which the icon will apear at and the content covers what will be in the joyride.
    render() {
        /* This allows steps to become a function that operates when you click the target */
        const { steps } = this.state;
        /* Joyride is then rendered onto the site and the steps to follow are called to let it work */
        return (
            <div className="BackGround">
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
                <div >
                    <header >
                        <img className="CelebLogo" alt="Home Logo" src="CameraLogo.png" style={{ width: "50%", tintColor: 'black' }} />
                    </header>
                </div>
                <div className="Welcome">
                    <body className="HomeText">
                        <p>Have fun searching for your favourite Celebrities!! <br></br>Use the menu to navigate to the calendar and more.</p>
                    </body>
                </div>
            </div>
        )
    }
}

export default Home;