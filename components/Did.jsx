import React from 'react'
import styles from './Did.module.css'

export default function Did( { did } ) {

    const handleButtonClick = ( link ) => {
        window.open(link, '_blank');
    };

    let bnbURL = did.links[0]
    let ethURL = did.links[1]
    let arbURL = did.links[2]

  return (
    <div className={styles['container']}>
    <h1 className={styles['name']}>{did.name}</h1>
    <button className={styles['button']} onClick={() => handleButtonClick(bnbURL)}>.bnb ${did.prices[0]}</button>
    <button className={styles['button']} onClick={() => handleButtonClick(ethURL)}>.eth ${did.prices[1]}</button>
    <button className={styles['button']} onClick={() => handleButtonClick(arbURL)}>.arb ${did.prices[2]}</button>
    </div>
  )
}
