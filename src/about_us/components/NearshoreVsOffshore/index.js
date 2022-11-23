import useNearshoreVsOffshoreTableInfo from '../../hooks/useNearshoreVsOffshoreTableInfo'

import NearshoreVsOffshoreTable from './NearshoreVsOffshoreTable'

import classes from './styles.module.scss'

export default function NearshoreVsOffshore () {
  const { table } = useNearshoreVsOffshoreTableInfo()

  return (
    <section className={classes.nearshoreVsOffshoreSection}>
      <div className={classes.header}>
        <h2 className={classes.title}>Nearshore Vs Offshore</h2>
        <p className={classes.description}>
          Having a team of developers working within the same time zone of your company
          streamlines the communication and reduces cultural frictions with barely no language barriers
        </p>
        <hr className={classes.horizontalBar} />
      </div>
      <NearshoreVsOffshoreTable rows={table.rows} />
    </section>
  )
}
