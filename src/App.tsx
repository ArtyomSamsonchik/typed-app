import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <>
      <AppTitle title="This is APP Component"/>
      <AppTitle title="My fiends"/>
      Article 1
      <Accordion titleValue="Menu"  collapsed={true}/>
      <Accordion titleValue="Users" collapsed={false}/>
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
    </>
  );
}

export default App;
