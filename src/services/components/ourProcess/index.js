import React from 'react'

import Discovery from 'assets/services/web_dev_our_process/discovery.svg'
import InitialBacklog from 'assets/services/web_dev_our_process/initial_backlog.svg'
import Proposal from 'assets/services/web_dev_our_process/proposal.svg'
import ProjectStarts from 'assets/services/web_dev_our_process/project_starts.svg'
import ProcessDiagram from 'assets/services/web_dev_our_process/process_diagram.svg'
import DotsPattern from 'assets/services/dots-pattern.component.svg'

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
                Evaluate your project’s viability and feasibility
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
                Break down the initial project into clear &amp; understandable work pieces
              </li>
              <li>
                Estimate the initial backlog in joint workshops using techniques
                like Poker Planning &amp; Magic Estimation
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
                collaborative and efficient
              </li>
              <li>
                First functional delivery in the first 2 sprints, guaranteed
              </li>
            </ul>
          </div>
          <div className={classes.firstCurvedArrow} />
          <div className={classes.secondCurvedArrow} />
          <div className={classes.thirdCurvedArrow} />
        </div>
        <div className={classes.processDiagramContainer}>
          <Image src={ProcessDiagram} objectFit='cover' alt='' />
        </div>
      </div>
      <div className={classes.background} />
      <DotsPattern className={classes.dotsPatternRight} viewBox='0 0 166 327' preserveAspectRatio='xMidYMid meet' />
    </section>
  )
}

export default OurProcess
