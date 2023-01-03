import useNearshoreVsOffshoreTableInfo from '../../hooks/useNearshoreVsOffshoreTableInfo'

import NearshoreVsOffshoreTable from './NearshoreVsOffshoreTable'

import DecoCircles from 'assets/about_us/nearshore_outsourcing/complete_deco_circle.component.svg'

import classes from './styles.module.scss'

export default function NearshoreVsOffshore () {
  const { table } = useNearshoreVsOffshoreTableInfo()

  return (
    <section className={classes.nearshoreVsOffshoreSection}>
      <DecoCircles
        alt=''
        viewBox='0 0 319 280'
        preserveAspectRatio='xMidYMid meet'
        className={classes.decoCircles}
      />
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
