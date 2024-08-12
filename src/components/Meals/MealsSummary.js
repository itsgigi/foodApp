import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Ordina comodamente, Al resto ci pensiamo noi!</h2>
      <p>
        Scegli tra cibi e bevende disponibili per il servizio in piscina,
        appena disponibili te le porteremo noi e potrai scegliere se pagare
        o addebbitare in stanza.
      </p>
    </section>
  );
};

export default MealsSummary;
