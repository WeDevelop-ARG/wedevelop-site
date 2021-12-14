import classNames from 'classnames'
import Loader from 'react-loader-spinner'
import classes from './styles.module.scss'

function LoaderSpinner ({
  className,
  visible
}) {
  const containerClassName = classNames(classes.container, className)
  if(!visible) return null

  return (
    <div className={containerClassName}>
      <Loader 
        type="TailSpin"
        color="#377dff"
      />
    </div>
  )
}

export default LoaderSpinner
