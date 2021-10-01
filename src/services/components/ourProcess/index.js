import React from 'react'

import Discovery from 'assets/services/web_dev_our_process/discovery.svg'
import InitialBacklog from 'assets/services/web_dev_our_process/initial_backlog.svg'
import Proposal from 'assets/services/web_dev_our_process/proposal.svg'
import ProjectStarts from 'assets/services/web_dev_our_process/project_starts.svg'
import ProcessDiagram from 'assets/services/web_dev_our_process/process_diagram.svg'
import DotsPattern from 'assets/services/dots-pattern.svg'

import classes from './styles.module.scss'
import Image from 'main_app/components/Image'

function OurProcess () {
  return (
    <section id='our-process' className={classes.ourProcess}>
      <div className={classes.sectionHeader}>
        <p className={classes.subheadingText}>Agile Methodologies</p>
        <h2 className={classes.titleText}>Our Process</h2>
        <p className={classes.descriptionText}>
          At WeDevelop we use the Agile methodology to deliver working software every Sprint.
        </p>
        <hr className={classes.horizontalBar} />
      </div>
      <div className={classes.sectionContent}>
        <div className={classes.bulletsList}>
          <div className={classes.phaseContainer}>
            <div className={classes.phaseIdentifier}>
              <Image src={Discovery} alt='' />
              <p>Discovery</p>
            </div>
            <ul className={classes.phaseSteps}>
              <li>
                Get to know your needs
              </li>
              <li>
                Evalute project’s viability and feasibility
              </li>
              <li>
                Learn about our process in detail
              </li>
            </ul>
          </div>
          <div className={classes.phaseContainer}>
            <div className={classes.phaseIdentifier}>
              <Image src={InitialBacklog} alt='' />
              <p>Initial Backlog Definition &amp; Estimation</p>
            </div>
            <ul className={classes.phaseSteps}>
              <li>
                Breakdown the initial project into clear &amp; estimable work pieces
              </li>
              <li>
                In joint workshops estimate the initial backlog using techniques
                such us Poker Planning &amp; Magic Estimation
              </li>
            </ul>
          </div>
          <div className={classes.phaseContainer}>
            <div className={classes.phaseIdentifier}>
              <Image src={Proposal} alt='' />
              <p>Proposal</p>
            </div>
            <ul className={classes.phaseSteps}>
              <li>
                We’ll prepare and send an Agile fixed price proposal according to
                the Backlog created in collaboration with you and your team
              </li>
            </ul>
          </div>
          <div className={classes.phaseContainer}>
            <div className={classes.phaseIdentifier}>
              <Image src={ProjectStarts} alt='' />
              <p>Project Starts!</p>
            </div>
            <ul className={classes.phaseSteps}>
              <li>
                We specialize in Agile Software Development, which is highly
                collaborative and eficient
              </li>
              <li>
                First functional delivery in the first 2 sprints. Guaranteeded
              </li>
            </ul>
          </div>
          <div className={classes.firstCurvedArrow} />
          <div className={classes.secondCurvedArrow} />
          <div className={classes.thirdCurvedArrow} />
        </div>
        <div className={classes.processDiagramContainer}>
          <Image src={ProcessDiagram} alt='' className={classes.processDiagram} />
        </div>
      </div>
      <div className={classes.background} />
      <Image src={DotsPattern} className={classes.dotsPatternRight} alt='' />
    </section>
  )
}

export default OurProcess
