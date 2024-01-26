import { useState, useEffect } from 'react';
import './App.css';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = JSON.parse(window.localStorage.getItem('saved-rating'));

    if (savedValues !== null) {
      return savedValues;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-rating', JSON.stringify(values));
  }, [values]);

  const updateValues = {
    updateGood() {
      setValues({
        ...values,
        good: values.good + 1,
      });
    },
    updateNeutral() {
      setValues({
        ...values,
        neutral: values.neutral + 1,
      });
    },
    updateBad() {
      setValues({
        ...values,
        bad: values.bad + 1,
      });
    },
    resetVal() {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    },
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  const ratingFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Description />
      <Options updateHandlers={updateValues} total={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackVal={values}
          total={totalFeedback}
          rating={ratingFeedback}
        />
      )}
    </>
  );
}

export default App;
