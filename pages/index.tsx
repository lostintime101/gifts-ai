import React, { useRef, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { BsFillPeopleFill } from "react-icons/bs";
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  const inputtedName = React.useRef<HTMLInputElement>(null);
  const inputtedHobbies = React.useRef<HTMLInputElement>(null);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const [name, setName] = useState<string>('');
  const [hobbies, setHobbies] = useState<string>('');

  async function handleName(){

    if (!inputtedName.current || !inputtedName.current.value || String(inputtedName.current.value) === "") return;
    
    let newName = inputtedName.current.value
    setName(newName)
    console.log("Name is now: ", newName)
    inputtedName.current.value = "";

    if (section2.current) {
      section2.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async function handleHobbies(){

    if (!inputtedHobbies.current || !inputtedHobbies.current.value || String(inputtedHobbies.current.value) === "") return;
    
    let newHobbies = inputtedHobbies.current.value
    setName(newHobbies)
    console.log("Hobbies is now: ", newHobbies)
    inputtedHobbies.current.value = "";

    if (section3.current) {
      section3.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // function handleInputChange(field, value) {
  //   if (field === "amount") {
  //     value = parseFloat(value);
  //   } 
  //   else if (field === "time" || field === "recipients") {
  //     value = parseInt(value);
  //   }
  
  //   const newAirdropValues = { ...airdropValues, [field]: value };
  //   setAirdropValues(newAirdropValues);
  //   console.log(`New ${field}: ${newAirdropValues[field]}`);
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="SPACE ID GIFTS AI"
          name="make gifting the perfect digital identity easy"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <header className={styles.header}>
          <ConnectButton />
        </header>
        

        <div className={styles.main} id="section1">
          <h1 className={styles.title}>Who <span>are you gifting to?</span></h1>
          <div className={styles['search-container']}>
            <BsFillPeopleFill id="FaPeople1" className={styles['search-icon']}/>
            <input 
              type="text"
              ref={inputtedName}
              placeholder="type a name or alias"
              onKeyDown={(e) => { if (e.key === 'Enter') { handleName(); }}}
            />
          </div>
        </div>

        <div className={styles.main} id="section2" ref={section2}>
          <h1 className={styles.title}>What are their <span>hobbies & interests?</span></h1>
          <div className={styles['search-container']}>
            <BsFillPeopleFill id="FaPeople2" className={styles['search-icon']}/>
            <input 
              type="text"
              ref={inputtedHobbies}
              placeholder="e.g. playing poker, coding in Python, Taylor Swift"
              onKeyDown={(e) => { if (e.key === 'Enter') { handleHobbies(); }}}
            />
          </div>
        </div>

        <div className={styles.main} id="section3" ref={section3}>
          results
        </div>

      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by Lostin
        </a>
      </footer>
    </div>
  );
};

export default Home;
