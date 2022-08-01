import { useState } from 'react';
import classes from './App.module.css';
import Form from './components/Form/Form';
import ActivityCard from './components/UI/ActivityCard';
import TextCard from './components/UI/TextCard';

function App() {
  const [activities, setActivities] = useState([])



  const getActivity = (data) => {

    let url = "https://boredapi.com/api/activity";

    url += data.type ? '?type=' + data.type : '';

    console.log(url)

    const corsOptions = {
      origin: 'http://localhost:3000'
    }

    fetch(url).then(res => {
      if (!res.ok) {
        throw new Error('Uh oh')
      }
      return res.json()
    }).then(activity => {
      setActivities(prevState => {
        return [...prevState, activity]
      })
    }).catch()
  }


  return <div className={classes.container}>
    <div className={classes.card}>
      <TextCard>
        <h1>Creativity</h1>

        <p>Adjust the filters to find an activity to cure your boredom!</p>
        <p>If you have no preference just click <strong>Get Activity!</strong></p>

        <p><strong>Type:</strong> Choose from <em>recreational</em>, <em>education</em>, <em>relaxation</em>, <em>social</em>, <em>cooking</em>, <em>busywork</em>, <em>diy</em>, <em>music</em> or <em>charity</em></p>

        <p><strong>Accessibility:</strong> A number from 0-1, with 0 being accessible to anyone and 1 being not very accessible</p>

        <p><strong>Participants:</strong> How many people this activity is for?</p>

        <p><strong>Price:</strong> A number from 0-1, with 0 being free and 1 being relatively expensive</p>
      </TextCard>
    </div>
    <div className={classes.form}>
      <Form submitForm={getActivity}/>
    </div>
    <div className={classes.activities}>
      {activities.map(activity => <ActivityCard key={activity.key} activity={activity}/>)}
    </div>

  </div>
}

export default App;
