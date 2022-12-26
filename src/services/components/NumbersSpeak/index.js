import TabContainer from 'main_app/components/TabContainer'
import BackgroundContainer from 'staff_augmentation/components/BackgroundContainer'
import Image from 'main_app/components/Image'

import TabButtonImage from 'assets/about_us/nearshore_outsourcing/tab_button.svg'
import NumbersSpeakBackground from 'assets/services/background-numbers-speak.png'
import DecoHalfCircle from 'assets/services/every-steps-half-circle-right.component.svg'

import classes from './styles.module.scss'

export default function NumbersSpeak () {
  const renderTabLabel = (label) => (
    <div className={classes.tabLabelContent}>
      <Image src={TabButtonImage} alt='' width='20px' height='20px' />
      <span className={classes.labelText}>{label}</span>
    </div>
  )

  const tabs = [
    {
      label: renderTabLabel('75% of our clients hire the first match'),
      children: (
        <>
          <h3 className={classes.tabTitle}>
            <span className={classes.percentage}>75% </span>
            of our clients hire the first match
          </h3>
          <p className={classes.tabText}>
            And this is possible only because we love what we
            do and strive for excellence in everything we do.
          </p>
          <br />
          <p className={classes.tabText}>
            Our staff works as a dream team where everyone is
            a crucial player in the hiring journey.
          </p>
        </>
      )
    },
    {
      label: renderTabLabel('Top 3% Latin American Talent'),
      children: (
        <>
          <h3 className={classes.tabTitle}>
            Top
            <span className={classes.percentage}> 3% </span>
            Latin American Talent
          </h3>
          <p className={classes.tabText}>
            We have skilled developers are from top 5 locations:
            Argentina, Brazil, Colombia, Uruguay, and Costa
            Rica with matching timezone between
            <span className={classes.boldText}>
            &nbsp;GMT-6 to GMT-3
            </span>
            . Experts in top technologies we work with:
            <ul className={classes.list}>
              <li>
                <b>Backend: </b>
                <span>Node.js, Ruby on Rails, Python, Java, Golang.</span>
              </li>
              <li>
                <b>Frontend: </b>
                <span>React, Vue.js, Angular.</span>
              </li>
              <li>
                <b>Mobile: </b>
                <span>React Native, iOS.</span>
              </li>
              <li>
                <b>QA Automation: </b>
                <span>Selenium, Jenkins, Jest.</span>
              </li>
            </ul>
          </p>
        </>

      )
    },
    {
      label: renderTabLabel('15-day Money-back Trial Period'),
      children: (
        <>
          <h3 className={classes.tabTitle}>
            15-day Money-back Trial Period
          </h3>
          <p className={classes.tabText}>
            The Client may terminate our Agreement with
            immediate effect by written notice to the other
            Party during this trial period, and the services
            rendered during such period shall not be invoiced.
            If this provision is not exercised all services
            shall be invoiced.
          </p>
        </>
      )
    }
  ]

  return (
    <>
      <section className={classes.numbersSpeak}>
        <DecoHalfCircle className={classes.decoHalfCircle} viewBox='0 0 211 270' preserveAspectRatio='xMidYMid meet' />
        <TabContainer
          tabListClassName={classes.tabsList}
          tabContainerClassName={classes.tabsContainer}
          tabPanelClassName={classes.tabContent}
          tabButtonClassName={classes.tabButton}
          tabHeaderClassName={classes.tabHeader}
          selectedTabClassName={classes.selectedTab}
          tabs={tabs}
        />
      </section>
      <BackgroundContainer backgroundURL={NumbersSpeakBackground} />
    </>
  )
}
