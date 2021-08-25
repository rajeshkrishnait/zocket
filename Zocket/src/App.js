import React from 'react';
import TextWithEmail from './components/textWithEmail'
import Navbar from './components/navbar';
import FirstPage from './components/firstPage';
class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <FirstPage></FirstPage>
            </div>
        );
    }
}

export default App;