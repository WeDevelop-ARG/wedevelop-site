import Image from 'next/image'

import TabContainer from 'main_app/components/TabContainer'
import Button from 'main_app/components/Button'
import InternalLink from 'main_app/components/InternalLink'
import WrappedImage from 'main_app/components/WrappedImage'

import GradientBackground from 'assets/about_us/nearshore_outsourcing/gradient_background.component.svg'
import StrongTalent from 'assets/about_us/nearshore_outsourcing/strong_talent.svg'
import TabButtonImage from 'assets/about_us/nearshore_outsourcing/tab_button.svg'

import classes from './styles.module.scss'

export default function NearshoreITStaffing () {
  const renderTabLabel = (label) => (
    <div className={classes.tabLabelContent}>
      <Image src={TabButtonImage} alt='' width='20px' height='20px' />
      <span className={classes.labelText}>{label}</span>
    </div>
  )

  const tabs = [
    {
      label: renderTabLabel('Dynamic Changes'),
      children: (
        <p className={classes.tabText}>
          The technology landscape has always been very dynamic
          with fast-paced development. In such a bustling scenario,
          with new technologies emerging regularly,
          <span className={classes.boldText}>
            &nbsp;companies need specialized professionals to get the best results.
          </span>
          However, the process of recruiting, qualifying, screening, and
          <span className={classes.boldText}>
            &nbsp;hiring candidates on shore can be not only
            expensive but also long and cumbersome.
          </span>
        </p>
      )
    },
    {
      label: renderTabLabel('Cost'),
      children: (
        <p className={classes.tabText}>
          Executives don't want to lose time they could use on
          focusing on their business development, assembling
          teams, and testing whether they are the right fit or not.
          <span className={classes.boldText}>
            &nbsp;No matter the size of a company, nobody can afford to lose time and money.
          </span>
          The most valuable assets for any business owner.
        </p>
      )
    },
    {
      label: renderTabLabel('Remote Approach'),
      children: (
        <p className={classes.tabText}>
          So, how can nearshore outsourcing help an organization
          thrive in today’s complex technology and economic
          landscape?
          <span className={classes.boldText}>
            &nbsp;This remote staffing approach may resemble the traditional
            offshore method utilized for decades all over the world.
          </span>
          &nbsp;However, though both terms may seem interchangeable,
          the truth is they have significant differences.
        </p>
      )
    },
    {
      label: renderTabLabel('Our Solution'),
      children: (
        <p className={classes.tabText}>
          Therefore, what's nearshore outsourcing? Simply put, it is
          the process of
          <span className={classes.boldText}>
            &nbsp;hiring tech talent in neighboring countries or within the same region of your company
          </span>
          . IT staffing abroad can be challenging and mainly when it's offshore.
          Nearshore comes as a well-blended combination of on-shore and offshore
          methodologies. While on-shore reduces the talent pool availability and can be costly,
          <span className={classes.boldText}>
            &nbsp;nearshore and offshore options encompass lower costs with access
            to a larger selection of professionals.
          </span>
        </p>
      )
    }
  ]

  return (
    <section className={classes.sectionContainer}>
      <p className={classes.title}>
        <span className={classes.boldText}>
          The Next Frontier of Remote Talent Sourcing:
        </span>
        &nbsp;Nearshore IT Staffing
      </p>
      <hr className={classes.horizontalBar} />
      <TabContainer
        tabListClassName={classes.tabsList}
        tabContainerClassName={classes.tabsContainer}
        tabPanelClassName={classes.tabContent}
        tabButtonClassName={classes.tabButton}
        tabHeaderClassName={classes.tabHeader}
        selectedTabClassName={classes.selectedTab}
        tabs={tabs}
      />
      <Button
        as={InternalLink}
        href='/services/hiring-solutions'
        className={classes.scaleYourTeamButton}
      >
        Scale your Team now
      </Button>
      <WrappedImage src={StrongTalent} alt='strong talent' layout='intrinsic' className={classes.strongTalent} />
      <GradientBackground className={classes.background} viewBox='0 0 1680 962' preserveAspectRatio='xMidYMid slice' />
    </section>
  )
}
