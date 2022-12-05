import classNames from 'classnames'
import isNil from 'lodash/isNil'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Tab as RTab, Tabs as RTabs, TabList as RTabList, TabPanel as RTabPanel } from 'react-tabs'

import { isOverflown } from 'utils/dom'

import Button from '../Button'

import BlackChevronLeft from 'assets/icons/black_chevron_left.svg'
import BlackChevronRight from 'assets/icons/black_chevron_right.svg'

import classes from './styles.module.scss'

export default function TabContainer ({
  tabs,
  headerLabel,
  startTabIndex,
  activeTabIndex,
  onTabChange,
  renderSingleTab,
  tabContainerClassName,
  tabButtonClassName,
  tabClassName,
  tabHeaderClassName,
  tabListClassName,
  tabPanelClassName,
  selectedTabClassName
}) {
  const [tabIndex, setTabIndex] = useState(startTabIndex ?? 0)
  const [displayArrows, setDisplayArrows] = useState(false)
  const tabRef = useRef(null)

  const onSelectChange = useCallback((index) => {
    if (isNil(tabs[index].onClick)) {
      setTabIndex(index)
      onTabChange?.(index)
    } else {
      Promise.resolve(tabs[index].onClick?.()).then(() => {
        setTabIndex(index)
        onTabChange?.(index)
      }).catch(() => {})
    }
  }, [onTabChange, tabs])

  const scrollToRight = useCallback(() => {
    tabRef.current?.children[1].scrollBy({ left: tabRef.current?.clientWidth ?? 0, behavior: 'smooth' })
  }, [])

  const scrollToLeft = useCallback(() => {
    tabRef.current?.children[1].scrollBy({ left: -tabRef.current?.clientWidth ?? 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    setDisplayArrows(isOverflown(tabRef.current?.children[1]))
  }, [])

  return (
    <>
      <RTabs
        defaultIndex={activeTabIndex}
        selectedIndex={activeTabIndex ?? tabIndex}
        onSelect={index => onSelectChange(index)}
        selectedTabClassName={classNames(classes.selectedTab, selectedTabClassName)}
        forceRenderTabPanel={!isNil(renderSingleTab) ? !renderSingleTab : true}
        className={tabContainerClassName}
      >
        <div className={classNames(classes.tabHeader, tabHeaderClassName)} ref={tabRef}>
          {!isNil(headerLabel) && (
            <div className={classes.headerLabel}>
              <p>{headerLabel}</p>
            </div>
          )}
          <Button
            className={classNames(classes.arrow, {
              [classes.hidden]: !displayArrows
            })}
            onClick={scrollToLeft}
            variant='icon'
          >
            <Image src={BlackChevronLeft} width='10px' height='15px' alt='' />
          </Button>
          <RTabList className={classNames(classes.tabList, tabListClassName)}>
            {tabs.map((tab, i) => {
              return (
                <RTab key={i} className={classNames(classes.tab, tabClassName)}>
                  <Button
                    variant='container'
                    className={classNames(classes.button, tabButtonClassName)}
                  >
                    {tab.label}
                  </Button>
                </RTab>
              )
            })}
          </RTabList>
          <Button
            className={classNames(classes.arrow, {
              [classes.hidden]: !displayArrows
            })}
            onClick={scrollToRight}
            variant='icon'
          >
            <Image src={BlackChevronRight} width='10px' height='15px' alt='' />
          </Button>
        </div>
        {tabs.map((tab, i) => {
          return (
            <RTabPanel key={i} className={classNames(classes.tabPanel, tabPanelClassName)}>
              {tab.children}
            </RTabPanel>
          )
        })}
      </RTabs>
    </>
  )
}
