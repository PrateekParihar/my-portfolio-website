import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
import contactStyles from "../css/contact.module.css"
const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>Hello, I am Prateek and I suck at intros.</p>
          <p>I wear many hats and I crave a challenge.</p>
          <p> My geeky interests lie mostly in <b>cloud computing</b>, <b>serverless computing</b>, <b>devops</b>, and <b>automation</b> .</p>
          <p>My non geeky interests consist of running, reading random blogs and watching youtube vlogs.</p>
        </article>

        <section className={contactStyles.text}>
          <article className={contactStyles.text}>
          <p>
            If you are looking to get ahold of me, you can send me an email at{" "}
            <a href="mailto:prateekparihar@outlook.com">prateekparihar@outlook.com</a>.
          </p>
          </article>
        </section>
        
      </section>
    </Layout>
  )
}

export default about
