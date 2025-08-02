import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total }) => {
  
  const positiveFeedbackPercentage = total ? Math.round((good / total) * 100) : 0;

    return (
      <div className="container">
        <ul className={styles.list}>
          <li className={styles.item}>Good: {good}</li>
          <li className={styles.item}>Neutral: {neutral}</li>
          <li className={styles.item}>Bad: {bad}</li>
          <li className={styles.item}>Total: {total}</li>
          <li className={styles.item}>Positive: {positiveFeedbackPercentage}%</li>

        </ul>
      </div>
    );
  };

  
export default Feedback;
