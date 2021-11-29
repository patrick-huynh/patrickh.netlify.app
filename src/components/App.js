import React from 'react';
import { MainPage } from './pages/MainPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { Navbar } from './Navbar';

class App extends React.Component {
    render() {
        return (
            <div id="App">
                <Navbar />
            </div>
        );
    }
}

export default App;
