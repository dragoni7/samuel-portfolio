'use client';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { scaleSqrt, extent } from 'd3';
import { Node } from './Node';
import { drawCircles } from './drawCircle';

type PackingGraphProps = {
  width: number;
  height: number;
  data: Node[];
};

export const PackingGraph = ({ width, height, data }: PackingGraphProps) => {
  // The force simulation mutates nodes, so create a copy first
  // Node positions are initialized by d3
  const nodes: Node[] = [...data];

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [min, max] = extent(nodes.map((d) => d.value)) as [number, number];
  const sizeScale = scaleSqrt()
    .domain([min, max])
    .range([width * 0.03, width * 0.115]);

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!context) {
      return;
    }

    // run d3-force to find the position of nodes on the canvas
    d3.forceSimulation(nodes)

      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('charge', d3.forceY(Math.random()).strength(Math.random() * 0.07 + 0.01))
      .force(
        'collide',
        d3.forceCollide().radius((node: any) => sizeScale(node.value) + 4)
      )
      .alphaDecay(0.04)
      .velocityDecay(0.4)

      // list of forces we apply to get node positions

      // at each iteration of the simulation, draw the network diagram with the new node positions
      .on('tick', () => {
        drawCircles(context, width, height, nodes, sizeScale);
      });
  }, [width, height, nodes, sizeScale]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width,
          height,
        }}
        width={width}
        height={height}
        className="bg-[#04050e] rounded-full"
      />
    </div>
  );
};
