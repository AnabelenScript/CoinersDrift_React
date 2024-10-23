import React, { useState, useEffect, useRef } from 'react';
import Image from '../Atoms/Image';
import GameInfo from '../Molecules/GameInfo';
import carCenter from '../../assets/img/carCenter.png';
import carLeft from '../../assets/img/carLeft.png';
import carRight from '../../assets/img/carRight.png';
import treeImg from '../../assets/img/tree.png';
import car from '../../assets/img/1.png'
import cloudImg from '../../assets/img/cloud.jpg';
import finishImg from '../../assets/img/finish.png';
import themeMusic from '../../assets/music/Gypsy Woman (slowed) _ haraguchi _ TikTok Edit.mp3';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';

const ASSETS = {
  COLOR: {
    TAR: ["#000000", "#000000"],
    RUMBLE: ["#000000", "#FFFF00"],
    GRASS: ["#eedccd", "#e6d4c5"],
  },
  IMAGE: {
    TREE: { src: treeImg, width: 132, height: 192 },
    HERO: { src: carCenter, width: 160, height: 86 },
    SKY: { src: cloudImg },
    FINISH: { src: finishImg, width: 339, height: 180, offset: -0.5 },
    CAR: { src: car, width: 50, height: 36 },
  },
  AUDIO: {
    theme: new Audio(themeMusic),
    engine: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/155629/engine.wav"),
    honk: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/155629/honk.wav"),
    beep: new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/155629/beep.wav"),
  },
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState('0:00');
  const [lap, setLap] = useState('0');
  const [tacho, setTacho] = useState('0 km/h');
  const [inGame, setInGame] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [playerX, setPlayerX] = useState(0);
  const [carImage, setCarImage] = useState(carCenter);
  const [cloudOffset, setCloudOffset] = useState(0);
  const [isVeloVisible, setIsVeloVisible] = useState(true);
  const [countdown, setCountdown] = useState(null);
  const [lines, setLines] = useState([]); // Líneas de la carretera
  const [cars, setCars] = useState([]); // Coches enemigos

  const roadRef = useRef(null);
  const heroRef = useRef(null);
  const cloudRef = useRef(null);

  const maxSpeed = 200;
  const acceleration = 38;
  const braking = -80;
  const segL = 200; // Longitud de cada segmento de la carretera
  const N = 70; // Número de segmentos visibles

  // Genera un camino con curvas aleatorias y subidas/bajadas
  const generateRoad = () => {
    const newLines = [];
    for (let i = 0; i < 150; i++) {
      const curve = Math.random() * 2 - 1; // Curvas aleatorias
      const y = Math.random() * 10; // Subidas y bajadas aleatorias
      newLines.push({ curve, y, special: null });
    }
    return newLines;
  };

  // Genera coches enemigos en carriles aleatorios
  const generateCars = () => [
    { pos: 0, type: "CAR", lane: -2.3, speed: 0.02 },
    { pos: 10, type: "CAR", lane: -0.5, speed: 0.025 },
    { pos: 20, type: "CAR", lane: 1.2, speed: 0.03 },
  ];

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCountdown("Go!");
      setTimeout(() => {
        setCountdown(null);
        setInGame(true);
      }, 1000);
    }
  }, [countdown]);

  useEffect(() => {
    const initGame = () => {
      setInGame(false);
      setScore(0);
      setSpeed(0);
      setPlayerX(0);
      setCarImage(carCenter);
      setLines(generateRoad()); // Genera la carretera
      setCars(generateCars()); // Genera los coches enemigos
    };

    let then = Date.now();
    const gameLoop = () => {
      const now = Date.now();
      const delta = now - then;
      then = now;

      if (inGame) {
        const step = delta / 1000;

        // Actualiza el desplazamiento de la carretera y coches enemigos
        setLines((prevLines) =>
          prevLines.map((line, index) => ({
            ...line,
            z: (line.z + speed * step) % (N * segL),
          }))
        );

        setCars((prevCars) =>
          prevCars.map((car) => ({
            ...car,
            pos: (car.pos + car.speed * step * 200) % N,
          }))
        );

        setCloudOffset((prevOffset) => prevOffset - 0.5 * step * speed); // Desplaza las nubes
      }

      requestAnimationFrame(gameLoop);
    };

    initGame();
    gameLoop();

    return () => {};
  }, [inGame]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setPlayerX((prevX) => prevX + 10);
      setCarImage(carRight);
    } else if (e.key === "ArrowLeft") {
      setPlayerX((prevX) => prevX - 10);
      setCarImage(carLeft);
    } else if (e.key === "ArrowUp") {
      setSpeed((prevSpeed) => Math.min(maxSpeed, prevSpeed + acceleration));
    } else if (e.key === "ArrowDown") {
      setSpeed((prevSpeed) => Math.max(0, prevSpeed + braking));
    } else if (e.key === "c" || e.key === "C") {
      setIsVeloVisible(false);
      ASSETS.AUDIO.theme.play();
      setCountdown(3);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      setCarImage(carCenter);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [inGame]);

  return (
    <div id="game" className="game-container">
      {isVeloVisible && <div className="velo-negro"></div>}
      <div id="road" ref={roadRef}>
        <Image
          src={ASSETS.IMAGE.SKY.src}
          alt="Cloud"
          id="cloud"
          style={{ transform: `translateX(${cloudOffset}px)` }}
          ref={cloudRef}
        />
        <Image
          src={carImage}
          alt="Car"
          id="hero"
          ref={heroRef}
          style={{
            width: `${ASSETS.IMAGE.HERO.width}px`,
            height: `${ASSETS.IMAGE.HERO.height}px`,
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)', // Mantener el coche en el centro de la pantalla
          }}
        />
      </div>
      {cars.map((car, index) => (
        <Image
          key={index}
          src={ASSETS.IMAGE.CAR.src}
          alt="Enemy Car"
          style={{
            width: `${ASSETS.IMAGE.CAR.width}px`,
            height: `${ASSETS.IMAGE.CAR.height}px`,
            position: 'absolute',
            top: `${car.pos * 10}px`, // Movimiento de los coches
            left: `${(car.lane + 2.3) * 100}px`, // Posicionamiento en carriles
            transition: 'top 0.1s linear',
          }}
        />
      ))}
      <GameInfo score={score} time={time} lap={lap} tacho={tacho} />
      <div id="home">
        <h1 className="titulo2">Coiners Drift</h1>
        {countdown === null ? (
          <p className="blink">Insert Coin</p>
        ) : (
          <p className="blink">{countdown}</p>
        )}
        <div id="highscore"></div>
      </div>
    </div>
  );
};

export default Game;
