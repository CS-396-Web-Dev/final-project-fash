'use client';
import { useEffect, useState } from 'react';
import { useHealthContext } from '@/app/contexts/HealthContext';
import { useHungerContext } from '@/app/contexts/HungerContext';
import { useIQContext } from '@/app/contexts/IqContext';
import { useMotivationContext } from '@/app/contexts/MotivationContext';
import MotivationBar from '@/app/components/MotivationBar';
import HungerBar from './components/HungerBar';
import HealthBar from '@/app/components/HealthBar';
import UpdateMotivation from '@/app/components/updateMotivation';
import UpdateHunger from './components/updateHunger';
import UpdateHealth from '@/app/components/updateHealth';

import DisplayCharacter from '@/app/components/DisplayCharacter';
import './style.css';

export default function Home() {
  // // add states
  const { health, setHealth } = useHealthContext();
  const { hunger, setHunger } = useHungerContext();
  const { IQ, setIQ } = useIQContext();
  const { motivation, setMotivation } = useMotivationContext();



  //
  // // LOCAL STORAGE: STATES
  // 

  // // HEALTH

  // load health state from localStorage when home page mounts
  useEffect(() => {
    const savedHealth = localStorage.getItem('health');
    if (savedHealth) {
      setHealth(JSON.parse(savedHealth)); // set health state to stored health
    }
  }, []);

  // save health state to localStorage, whenever health state changes
  useEffect(() => {
    localStorage.setItem('health', JSON.stringify(health)); // save the health state locally
  }, [health]);

  // // HUNGER
  
  // // load hunger state from localStorage when home page mounts
  // useEffect(() => {
  //   const savedHunger = localStorage.getItem('hunger');
  //   if (savedHunger) {
  //     setHunger(JSON.parse(savedHunger)); // set hunger state to stored hunger
  //   }
  // }, []);

  // save hunger state to localStorage, whenever hunger state changes
  useEffect(() => {
    localStorage.setItem('hunger', JSON.stringify(hunger)); // save the hunger state locally
  }, [hunger]);

  // // IQ
  
  // load IQ state from localStorage when home page mounts
  useEffect(() => {
    const savedIQ = localStorage.getItem('IQ');
    if (savedIQ) {
      setIQ(JSON.parse(savedIQ)); // set IQ state to stored IQ
    }
  }, []);

  // save IQ state to localStorage, whenever IQ state changes
  useEffect(() => {
    localStorage.setItem('IQ', JSON.stringify(IQ)); // save the IQ state locally
  }, [IQ]);


  // // MOTIVATION
  
  // load motivation state from localStorage when home page mounts
  useEffect(() => {
    const savedMotivation = localStorage.getItem('motivation');
    if (savedMotivation) {
      setMotivation(JSON.parse(savedMotivation)); // set motivation state to stored motivation
    }
  }, []);

  // save motivation state to localStorage, whenever motivation state changes
  useEffect(() => {
    localStorage.setItem('motivation', JSON.stringify(motivation)); // save the motivation state locally
  }, [motivation]);

  // return HTML
  return (
    <html>
      <head>
        <title>Tamagotchi Stats</title>
      </head>
      <body>
        <h1>My FASH Tamagotchi Stats</h1>
        <p>Health: {health}</p>
        <HealthBar/>
        <div>
          <UpdateHealth buttonName={"Eat Dining Hall Food"} updateValue={-5}/>
          <UpdateHealth buttonName={"Exercise"} updateValue={5}/>
        </div>

        <p>Satiety: {hunger}</p>
        <HungerBar />
        <div>
          <UpdateHunger buttonName={"Starve"} updateValue={-5} />
          <UpdateHunger buttonName={"Feed"} updateValue={5} />
        </div>

        <p>IQ: {IQ}</p>

        <p>Motivation: {motivation}</p>
        <MotivationBar/>
        <div>
          <UpdateMotivation buttonName={"Scold"} updateValue={-5}/>
          <UpdateMotivation buttonName={"Praise"} updateValue={5}/>
        </div>

        <DisplayCharacter/>
      </body>
    </html>
  );
}
