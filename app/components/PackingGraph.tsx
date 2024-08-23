'use client';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { scaleSqrt, extent } from 'd3';
import { Node } from '../util/Node';
import { drawCircles } from '../util/drawCircle';

const BUBBLE_MIN_SIZE = 30;
const BUBBLE_MAX_SIZE = 100;

type PackingGraphProps = {
  width: number;
  height: number;
  data: Node[];
};

export const PackingGraph = ({ width, height, data }: PackingGraphProps) => {
  // The force simulation mutates nodes, so create a copy first
  // Node positions are initialized by d3
  const nodes: Node[] = data.map((d) => ({ ...d }));

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [min, max] = extent(nodes.map((d) => d.value)) as [number, number];
  const sizeScale = scaleSqrt().domain([min, max]).range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);

  useEffect(() => {
    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!context) {
      return;
    }

    // run d3-force to find the position of nodes on the canvas
    d3.forceSimulation(nodes)

      // list of forces we apply to get node positions
      .force(
        'collide',
        d3.forceCollide().radius((node: any) => sizeScale(node.value) + 5)
      )
      .force('charge', d3.forceManyBody().strength(80))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('charge', d3.forceY(0).strength(0.05))

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
      />
    </div>
  );
};
