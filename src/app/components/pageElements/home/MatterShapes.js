'use client';

import React, { useEffect, useRef } from 'react';
import * as Matter from 'matter-js';
import decomp from 'poly-decomp';
import Title from '../../ui/textual/Title';
import Section from '../../ui/wrapper/Section';

const MatterShapes = () => {
  const sceneRef = useRef(null);
  // Tableau d'images
  const imageSources = [
    '/svg/aws.png',
    '/svg/bubble.png',
    '/svg/cpanel.png',
    '/svg/dato.png',
    '/svg/divi.png',
    '/svg/docker.png',
    '/svg/elementor.png',
    '/svg/express.png',
    '/svg/figma.png',
    '/svg/firebase.png',
    '/svg/graphql.png',
    '/svg/html.png',
    '/svg/javascript.png',
    '/svg/laravel.png',
    '/svg/mui.png',
    '/svg/mysql.png',
    '/svg/next.png',
    '/svg/node.png',
    '/svg/nuxt.png',
    '/svg/php.png',
    '/svg/python.png',
    '/svg/react.png',
    '/svg/sequelize.png',
    '/svg/symfony.png',
    '/svg/vue.png',
    '/svg/vuetify.png',
    '/svg/wordpress.png',
  ];

  useEffect(() => {
    if (!sceneRef.current) return;

    Matter.Common.setDecomp(decomp);

    const { Engine, Render, Runner, MouseConstraint, Mouse, Composite, Bodies } = Matter;

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
        background: '#121016',
      },
    });
    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Composite.add(world, [
      Bodies.rectangle(width / 2, 0, width, 50, { 
        isStatic: true,
        render: { 
          visible: false 
        }
      }),
      Bodies.rectangle(width / 2, height, width, 50, { 
        isStatic: true,
        render: { 
          visible: true,
          fillStyle: '#1A1821'
        }
      }),
      Bodies.rectangle(width, height / 2, 50, height, { 
        isStatic: true,
        render: { 
          visible: false,
        }
      }),
      Bodies.rectangle(0, height / 2, 50, height, {
        isStatic: true,
        render: { 
          visible: false,
        }
      })
    ]);

    const radius = 50;

    imageSources.forEach((imageSrc, index) => {
      const x = 100 + (index % 6) * 120;
      const y = 100 + Math.floor(index / 6) * 120;

      Composite.add(world, Bodies.circle(x, y, radius, {
        restitution: 0.4,
        render: {
          sprite: {
            texture: imageSrc,
            xScale: radius / 200,
            yScale: radius / 200,
          },
        },
      }));
    });

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
    <Section fullWidth>
      <Title level={2}>Which technologies?</Title>
      <div ref={sceneRef} style={{ width: '100%', height: '80vh', overflow: 'hidden' }} />
    </Section>
  );
};

export default MatterShapes;
