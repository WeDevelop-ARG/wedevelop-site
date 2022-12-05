import WrappedImage from 'main_app/components/WrappedImage'

import FullLogoColor from 'assets/logo/full_logo_color.svg'

import classes from './styles.module.scss'

export default function NearshoreVsOffshoreTable ({ rows }) {
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className={classes.colHeader} />
            <th className={classes.colHeader}>
              <WrappedImage
                src={FullLogoColor}
                alt='WeDevelop Logo'
                layout='fixed'
                width='223'
                height='42'
              />
            </th>
            <th className={classes.colHeader}>
              <p>Local Hire</p>
            </th>
            <th className={classes.colHeader}>
              <p>Offshore Agencies</p>
              <p>(India, Eastern Europe, Asia, etc)</p>
            </th>
            <th className={classes.colHeader}>
              <p>Freelance Developers</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ id, cells }) => (
            <tr key={id} className={classes.row}>
              {cells.map((content, i) => (
                <td key={i} className={classes.cell}>{content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
