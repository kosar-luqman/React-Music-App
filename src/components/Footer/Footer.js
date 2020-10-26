import React from 'react'
import classes from './Footer.module.css'

function Footer() {
    return (
        <footer className={classes.footer}>
            <p className={classes.footer__power}>
                Powered By <a href="https://multicode.codes" target="_blank" rel="noopener noreferrer">MultiCode</a>
            </p>
        </footer>
    )
}

export default Footer
