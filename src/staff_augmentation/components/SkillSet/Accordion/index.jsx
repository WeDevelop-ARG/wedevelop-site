import { useContext, useState } from 'react'
import AccordionContext from 'react-bootstrap/AccordionContext'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import BAccordion from 'react-bootstrap/Accordion'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'

import { ReactComponent as GradientArrow } from 'assets/staff_augmentation/arrow_gradient.svg'

import classes from './styles.module.scss'

function Toggle ({ eventKey, children, onClick, hasItems }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => onClick && onClick(eventKey)
  )

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type='button'
      disabled={!hasItems}
      className={classes.toggle}
      aria-expanded={isCurrentEventKey ? 'true' : 'false'}
      onClick={decoratedOnClick}
    >
      <span className={classes.text}>{children}</span>
      {hasItems && <GradientArrow className={classes.icon} />}
    </button>
  )
}

function Item ({ eventKey, currentActiveKey, header, items }) {
  return (
    <div className={classNames(classes.item, { [classes.active]: eventKey === currentActiveKey })}>
      <Toggle eventKey={eventKey} hasItems={!isEmpty(items)}>{header}</Toggle>
      <BAccordion.Collapse eventKey={eventKey} className={classes.body}>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </BAccordion.Collapse>
    </div>
  )
}

export default function Accordion ({ skillSet }) {
  const [activeKey, setActiveKey] = useState()

  return (
    <BAccordion activeKey={activeKey} onSelect={setActiveKey} className={classes.accordion}>
      {Object.entries(skillSet).map(([header, items]) => (
        <Item
          currentActiveKey={activeKey}
          header={header}
          items={items}
          key={header}
          eventKey={header}
        />
      ))}
    </BAccordion>
  )
}
