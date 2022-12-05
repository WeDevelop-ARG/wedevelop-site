import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function Tooltip (props) {
  const {
    children,
    trigger,
    placement,
    overlay
  } = props

  return (
    <OverlayTrigger
      trigger={trigger}
      placement={placement}
      overlay={overlay}
    >
      {children}
    </OverlayTrigger>
  )
}
