import { useEffect, useState } from 'react';

import './App.css'
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";
 

  const App = () => {
  
    const LOCAL_STORAGE_KEY = 'feedbackStats';

    const initialState = { good: 0, neutral: 0, bad: 0 };

    const [values, setValues] = useState(() => {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : { ...initialState };
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = (feedbackType) => {
    setValues((prevValues) => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

const resetFeedback = () => {
    setValues({ ...initialState });
  };
  
 useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
  }, [values]);

  
  return (
    <>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback} />
      {totalFeedback === 0 ? <Notification /> : <Feedback
        good={values.good}
        neutral={values.neutral}
        bad={values.bad}
        total={totalFeedback} />}
    </>
  )
}

export default App
