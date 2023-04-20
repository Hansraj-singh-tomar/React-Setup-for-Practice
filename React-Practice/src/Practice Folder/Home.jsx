import React from 'react'
import HocCmp from './HocCmp';

const Home = (props) => {
    console.log(props.status);
    console.log(props);
  return (
    <div>
        <h1>It's a Home Component</h1>
    </div>
  )
}

export default HocCmp(Home);