import React from "react"
import logo from "../images/white-logo.png"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="Prateek Parihar logo"></img>
      </div>
      <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div>
      <div className={styles.info}>
        © {new Date().getFullYear()} Prateek Parihar. All rights reserved. Built
        with
        <a href="https://www.gatsbyjs.org/" className={styles.link}>
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
