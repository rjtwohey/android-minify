import logo from './logo.svg';
import './App.css';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { useState } from 'react';

// import {SplashScreen} from "@capacitor/splash-screen";


function App() {
    const [response,setResponse] = useState(null)
    const doGet = async () => {
        const options = {
          url: 'https://api.agify.io/',
          params: { name: 'ryan' },
        };
      
        const response = await CapacitorHttp.get(options);
        setResponse(response)
      
        // or...
        // const response = await CapacitorHttp.request({ ...options, method: 'GET' })
      };


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <button onClick={() => SplashScreen.show()}>Show splash screen</button>
                <button onClick={() => doGet()}>Make http request</button>
                {response}
            </header>
        </div>
    );
}

export default App;
