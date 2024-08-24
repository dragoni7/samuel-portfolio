import { ScalePower } from 'd3';
import { Node } from './Node';
import { languages } from './languages';

export const drawCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  sizeScale: ScalePower<number, number, never>
) => {
  context.clearRect(0, 0, width, height);

  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }

    const radius = sizeScale(node.value);

    context.moveTo(node.x + 12, node.y);

    context.beginPath();
    context.arc(node.x, node.y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = languages[node.group];
    context.globalCompositeOperation = 'destination-over';
    var img = new Image();
    img.src = `/assets/images/${node.group === 'C#' ? 'CSharp' : node.group}.svg`;
    context.drawImage(img, node.x - (radius * 1.4) / 2, node.y - (radius * 1.4) / 2, radius * 1.4, radius * 1.4);
    context.fill();
  });
};
