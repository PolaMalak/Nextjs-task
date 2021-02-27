import Navbar from './Navbar'
import Footer from './Footer'
import Side from './Side'
import styles from '../styles/Layout.module.css'
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <Side side="leftSide"/>
        <Side side="rightSide"/>

        <div className={styles.container}>  
            <main className={styles.main}>

                {children}
            </main>
        </div>

        <Footer />

        </>
    )
}

export default Layout