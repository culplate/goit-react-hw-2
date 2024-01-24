import css from './Options.module.css';

export const Options = () => {
  return (
    <div className={css.wrap}>
      <button className={css.btn} type="button">
        Good
      </button>
      <button className={css.btn} type="button">
        Neutral
      </button>
      <button className={css.btn} type="button">
        Bad
      </button>
      <button className={css.btn} type="button">
        Reset
      </button>
    </div>
  );
};
