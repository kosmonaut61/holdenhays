declare module '@audiohays/tonewedge-ui/visualizer' {
  export class BildpunktVisualizer {
    constructor(canvas: HTMLCanvasElement, options?: {scene?: string;fps?: number;minPixel?: number;reducedMotion?: boolean;pauseWhenHidden?: boolean;palette?: Record<string, number[]>})
    setEnergy(value: number, options?: {immediate?: boolean}): void
    start(): void
    stop(): void
    render(time: number): void
    destroy(): void
  }
}
