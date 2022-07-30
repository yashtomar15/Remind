import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AChangeWe from '../Affirmation/AChangeWe'
import ComplimentYou from '../Affirmation/ComplimentYou'
import Gratitude from '../Affirmation/Gratitude'
import Inspiration from '../Affirmation/Inspiration'
import PersonalGood from '../Affirmation/PersonalGood'
import Anger from '../scribing/Anger'
import Emotional from '../scribing/Emotional'
import Fear from '../scribing/Fear'
import Hapiness from '../scribing/Hapiness'
import Sadness from '../scribing/Sadness'
import Trust from '../scribing/Trust'
import "./type.css"
const Types = () => {

    // scribing //
    const [happiness, setHappiness] = useState(true)
    const [sadness, setSadness] = useState(false)
    const [trust, setTrust] = useState(false) ;
    const [anger, setAnger] = useState(false) ;
    const [fear, setFear] = useState(false) ;
    const [emotional, setEmotional] = useState(false) ;

    //Affiramtion // 

    const [inspiration, setInspiration] = useState(false)
    const [personal, setPersonal] = useState(false) 
    const [compliment, setCompliment] = useState(false) 
    const [change, setChange] = useState(false) 
    const [gratitude, setGratitude] = useState(false) ;

    // text heading //

    const [headingText, setHeadingText] = useState("")
    
    useEffect(() => {
        setHeadingText("Happiness")
    }, [])

    const handleHappiness = () => {
      
        setHeadingText("Happiness")
        setHappiness(true)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)
        setInspiration(false)
        setPersonal(false)
        setCompliment(false)
        setChange(false)
        setGratitude(false)
    }

    const handleSadness = () => {
        setHeadingText("Sadness")
        setHappiness(false)
        setSadness(true)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)
        setInspiration(false)
        setPersonal(false)
        setCompliment(false)
        setChange(false)
        setGratitude(false)
    }
    const handleTrust = () => {
        setHeadingText("Trust")
        setHappiness(false)
        setSadness(false)
        setTrust(true)
        setAnger(false)
        setFear(false)
        setEmotional(false)
        setInspiration(false)
        setPersonal(false)
        setCompliment(false)
        setChange(false)
        setGratitude(false)
    }
    const handleAnger = () => {
        setHeadingText("Anger")
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(true)
        setFear(false)
        setEmotional(false)
        setInspiration(false)
        setPersonal(false)
        setCompliment(false)
        setChange(false)
        setGratitude(false)
    }
    const handleFear = () => {
        setHeadingText("Fear")
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(true)
        setEmotional(false)
        setInspiration(false)
        setPersonal(false)
        setCompliment(false)
        setChange(false)
        setGratitude(false)
    }
    const handleEmotional = () => {
        setHeadingText("Emotional")
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(true)
        setInspiration(false)
        setPersonal(false)
        setCompliment(false)
        setChange(false)
        setGratitude(false)
    }

    const handleInspiration = () => {
        setHeadingText("Inspiration")
        setInspiration(true) ;
        setPersonal(false) ;
        setCompliment(false) ;
        setChange(false) ;
        setGratitude(false) ;
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)


    }
    const handlePersonalGood = () => {
        setHeadingText("A Personal Good")
        setInspiration(false) ;
        setPersonal(true) ;
        setCompliment(false) ;
        setChange(false) ;
        setGratitude(false) ;
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)

    }
    const handleCompliment = () => {
        setHeadingText("Compliment Yourself")
        setInspiration(false) ;
        setPersonal(false) ;
        setCompliment(true) ;
        setChange(false) ;
        setGratitude(false) ;
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)

    }
    const handleChangeWeWant = () => {
        setHeadingText("A Change we want to know")
        setInspiration(false) ;
        setPersonal(false) ;
        setCompliment(false) ;
        setChange(true) ;
        setGratitude(false) ;
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)

    }
    const handleGratitude = () => {
        setHeadingText("Gratitude")
        setInspiration(false) ;
        setPersonal(false) ;
        setCompliment(false) ;
        setChange(false) ;
        setGratitude(true) ;
        setHappiness(false)
        setSadness(false)
        setTrust(false)
        setAnger(false)
        setFear(false)
        setEmotional(false)

    }
  return (
    <div className='mainFetauredContainer'>
        <br/>
      <div className='leftFeaturedDiv'>
        <br/>
        <h3>Let's write with ....</h3>
        <div className='ScribingDiv'>
         <h4>Scribing <i className="fa fa-angle-double-down" style={{fontSize:"28px",color:"red", marginLeft:"3%"}}></i></h4>
         <br/>
         <div><button onClick={handleHappiness}> Happiness</button></div>
         <div><button onClick={handleSadness}> Sadness</button></div>
         <div><button onClick={handleTrust}> Trust</button></div>
         <div><button onClick={handleAnger}> Anger</button></div>
         <div><button onClick={handleFear}> Fear</button></div>
         <div><button onClick={handleEmotional}> Emotional</button></div>

        </div>

        <div className='ScribingDiv'>
         <h4>Affirmation <i className="fa fa-angle-double-down" style={{fontSize:"28px",color:"red", marginLeft:"3%"}}></i></h4>
          <br/>
         <div><button onClick = {handleInspiration}> Inspiration</button></div> 
         <div> <button onClick = {handlePersonalGood}>  A Personal Good</button></div>
         <div><button onClick = {handleCompliment}>  Compliment Yourself</button></div>
         <div><button onClick = {handleChangeWeWant}>  A change we want to know</button></div>
         <div><button onClick={handleGratitude}> Gratitude</button></div>


        </div>
        <div>

        </div>
        
      </div>
      
       {/* right side div */}

      <div className='RightFeaturedDiv'>
        {
          emotional ? <Emotional headingText={headingText}/> : sadness ? <Sadness headingText={headingText}/> : trust ? <Trust headingText={headingText}/> : anger ? <Anger headingText={headingText}/> : fear ?  <Fear headingText={headingText}/> : inspiration ? <Inspiration headingText={headingText}/> : personal ? <PersonalGood headingText={headingText}/> : compliment ? <ComplimentYou headingText={headingText}/>
          :  change ? <AChangeWe headingText={headingText}/> : gratitude ? <Gratitude headingText={headingText}/> : <Hapiness headingText={headingText}/>    
        }
       </div>
    </div>
  )
}

export default Types
