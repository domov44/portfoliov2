'use client';

import React, { useEffect, useRef } from 'react';
import * as Matter from 'matter-js';
import decomp from 'poly-decomp';
import Title from '../../ui/textual/Title';
import Section from '../../ui/wrapper/Section';

const MatterShapes = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    Matter.Common.setDecomp(decomp);

    const { Engine, Render, Runner, Composites, Common, MouseConstraint, Mouse, Composite, Vertices, Bodies } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    const width = sceneRef.current.offsetWidth;
    const height = sceneRef.current.offsetHeight;
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: '#121016', // Fond conforme
      },
    });
    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Composite.add(world, [
      Bodies.rectangle(width / 2, 0, width, 50, {  // Mur du haut, hauteur de 10px
        isStatic: true,
        render: { visible: false }
      }),
      Bodies.rectangle(width / 2, height, width, 50, {  // Mur du bas, hauteur de 10px
        isStatic: true,
        render: { visible: false }
      }),
      Bodies.rectangle(width, height / 2, 50, height, {  // Mur de droite, largeur de 10px
        isStatic: true,
        render: { visible: false }
      }),
      Bodies.rectangle(0, height / 2, 50, height, {  // Mur de gauche, largeur de 10px
        isStatic: true,
        render: { visible: false }
      })
    ]);


    const arrow = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');
    const chevron = Vertices.fromPath('100 0 75 50 100 100 25 100 0 50 25 0');
    const star = Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38');
    const horseShoe = Vertices.fromPath('35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7');

    const stack = Composites.stack(50, 50, 6, 4, 10, 10, (x, y) => {
      const color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);
      return Bodies.fromVertices(x, y, Common.choose([arrow, chevron, star, horseShoe]), {
        render: {
          fillStyle: color,
          strokeStyle: color,
          lineWidth: 1,
        },
      }, true);
    });
    Composite.add(world, stack);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <Section highlight>
    <Title>Test colision</Title>
      <div ref={sceneRef} style={{ width: '100%', height: '100vh', overflow: 'hidden' }} />
    </Section>
  )
};

export default MatterShapes;
