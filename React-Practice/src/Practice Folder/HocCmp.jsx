import React from 'react'

const HocCmp = (Wcomponent) => {
  const newComp = (props) => {
    console.log(props);  // {status: 'single}
    return(
        <div style={{backgroundColor:"red"}}>
            <Wcomponent name="hansraj singh tomar" {...props}/>
        </div>
    )
  } 

  return newComp
}

export default HocCmp