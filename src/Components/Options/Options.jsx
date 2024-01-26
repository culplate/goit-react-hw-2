import css from './Options.module.css';

export const Options = ({ updateHandlers, total }) => {
  return (
    <div className={css.wrap}>
      <button
        className={css.btn}
        onClick={updateHandlers.updateGood}
        type="button">
        Good
      </button>
      <button
        className={css.btn}
        onClick={updateHandlers.updateNeutral}
        type="button">
        Neutral
      </button>
      <button
        className={css.btn}
        onClick={updateHandlers.updateBad}
        type="button">
        Bad
      </button>
      {total > 0 && (
        <button
          className={css.btn}
          onClick={updateHandlers.resetVal}
          type="button">
          Reset
        </button>
      )}
    </div>
  );
};
