import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import State from './State';
import Props from './Props';
import InputBoxValue from './InputBoxValue';
import HideShow from './hideShow';
import Form from './Form';
import Profile from './ConditionalRendering';
import AppNew from './App2';
import Constructor from './ConstructorLCM';
import Render from './RenderLCM';
import ComponentDidMount from './componentDidMount';
import ComponentDidUpdate from './componentDidUpdate';
import ShouldComponentUpdate from './shouldComponentUpdate';
import ComponentUnMount from './componentWillUnMount';
import HooksMethod from './hooks';
import Array from './Array';
import ArrayComponent from './ArrayComponent';
import PureComponent from './PureComponent';
import UsePropsInPureComponent from './UsePropsPureComponent';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <App />
    {/* <AppNew /> */}
    {/* <State /> */}
    {/* <Props name={"niks"} email={"nikita@weaddo.com"}/> */}
    {/* <Props name={"nakoda"} email={"nakoda@weaddo.com"}/> */}
    {/* <Props /> */}
    {/* <InputBoxValue /> */}
    {/* <HideShow /> */}
    {/* <Form /> */}
    {/* <Profile /> */}
    {/* <Constructor /> */}
    {/* <Render /> */}
    {/* <ComponentDidMount /> */}
    {/* <ComponentDidUpdate /> */}
    {/* <ShouldComponentUpdate /> */}
    {/* <ComponentUnMount /> */}
    {/* <HooksMethod /> */}
    {/* <Array /> */}
    {/* <ArrayComponent /> */}
    {/* <PureComponent /> */}
    <UsePropsInPureComponent/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
