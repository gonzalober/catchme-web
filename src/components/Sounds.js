import React, { Component } from "react";
import GameOver from '../assets/SoundEffects/gameover.mp3'
import UIfx from "uifx";



export default function Game() {
  const beep = new UIfx(
      GameOver,
      {
        volume: 0.8,
        throttleMs: 100
      }
    )
}