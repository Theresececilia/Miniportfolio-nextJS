import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], weight: ['300'] })
const titleClasses = [nunito.className, styles.title].join(" ")
const listClasses = [nunito.className, styles.languages].join(" ")

export default function about() {
  return (
    <>
      <div className={styles.aboutContainer}>
      <div className={styles.infoContainer}>
        <h1 className={titleClasses}>About Me</h1>
        <p>Hi, i'm Therese! I am a Frontend Developer under the name of Luna Grace.
          Currently located in Stockholm, Sweden. 
          <br/>
          In January 2022 I found codecademy. Outside of my full-time job I studied <span
          className={listClasses}>Math</span> along with frontend developer essentials.
          Since Mars 2022 i've created art with a javascript libary called <span
          className={listClasses}>p5.js</span>.
          <br/>
          In September 2022 I joined the Frontend developer program on <a href="https://cmeducations.se"
          className="page-link" target="_blank">Changemaker educations.</a>
           They have provided me knowledge about &#8594;
        </p>
      </div>
      <Image className={styles.headshot} src="/meBW.png" alt="Picture of me." width={260} height={280} />
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li className={listClasses}>HTML</li>
          <li className={listClasses}>CSS</li>
          <li className={listClasses}>Javascript</li> 
          <li className={listClasses}>Webdesign</li>
          <li className={listClasses}>Git & Github</li>
          <li className={listClasses}>Node & npm</li> 
          <li className={listClasses}>jQuery</li>
          <li className={listClasses}>API</li>
          <li className={listClasses}>Figma</li>
          <li className={listClasses}>React</li>
          <li className={listClasses}>Next.js</li>
        </ul>
      </div>
        
    </div>
   </> 
  )
}
