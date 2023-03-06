import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'], weight: ['300'] })
const listClasses = [nunito.className, styles.projectTitle].join(" ")

export default function page() {

  return (
    <section className={styles.container}>
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image src="/week1.png" width={300} height={300} alt="" />
          <a href="https://assignment1-javascript-frameworks.vercel.app">
          <h3 className={listClasses} >Form an idea</h3>
          <a className={styles.githubLink} href="https://github.com/Theresececilia/Assignment1-javascript-frameworks">Github repo</a>
          </a>
          <hr />
          <p className={styles.subtext}>An article page with notes and formation of an future idea.</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image src="/week2.png" width={300} height={300} alt="https://github.com/Theresececilia/Assignment2-node-npm" />
          <a href="https://assignment2-node-npm.vercel.app">
          <h3 className={listClasses}>Node & npm</h3>
          <a className={styles.githubLink} href="">Github repo</a>
          </a>
          <hr />
          <p className={styles.subtext}>Using date-fns and node to show dates in the terminal as well as in the browser.</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image src="/week3.png" alt="" width={300} height={300} />
          <a href="https://theresececilia.github.io/random-ramen/">
          <h3 className={listClasses}>Styling / Design Version 1</h3>
          <a className={styles.githubLink} href="https://github.com/Theresececilia/random-ramen/tree/main/random-ramen-recipe">Github repo</a>
          </a>
          <hr />
          <p className={styles.subtext}>Form an idea took a dark turn from an idea of a light and bubbly deisgn to a dark-design ramen page. </p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image src="/week3lightversion.png" alt="" width={300} height={300} />
          <a href="https://theresececilia.github.io/React-small-stories/">
          <h3 className={listClasses}>Version 2 - Light and bubbly</h3>
          <a className={styles.githubLink} href="https://github.com/Theresececilia/React-small-stories">Github repo</a>
          </a>
          <hr />
          <p className={styles.subtext}>Tho i also created the design I was imagining from the start, light & bubbly. Especially bubbly.</p>
        </div>
    </div>
    <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image src="/week4.png" alt="" width={300} height={300} />
          <a href="https://pokenames-react.vercel.app">
          <h3 className={listClasses}>API creation</h3>
          <a className={styles.githubLink} href="https://github.com/Theresececilia/pokemonReact">Github repo</a>
          </a>
          <hr />
          <p className={styles.subtext}>Here i struggled. At first i worked on a youtube replica, with no luck hiding the API-key. So here we go making an simple pokemon list instead. Small screen design.</p>
        </div>
    </div>
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <Image src="/week4yt.png" alt="" width={300} height={300} />
        <h3 className={listClasses}>Youtube Clone</h3>
        <p className={styles.githubLink} href="">Github repo is private</p>
        <hr />
        <p className={styles.subtext}>Using Rapid-api and react i created this genre-based youtube replica. Dont want to publicly deploy the page, but at least here is a screenshot.😜</p>
      </div>
    </div>
  </div>
  </section>
  )
}
