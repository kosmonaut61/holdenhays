declare module '@audiohays/tonewedge-ui/visualizer' {
  export function visualizerPaletteForMaterial(options:{palette:string;mode:string}):Record<string,number[]>
  export class BildpunktVisualizer {
    constructor(canvas: HTMLCanvasElement, options?: {scene?: string;fps?: number;minPixel?: number;reducedMotion?: boolean;pauseWhenHidden?: boolean;palette?: Record<string, number[]>})
    setEnergy(value: number, options?: {immediate?: boolean}): void
    start(): void
    stop(): void
    render(time: number): void
    destroy(): void
  }
}
declare module '@audiohays/tonewedge-ui/glass' {
 export function createFrostedSurface(host:HTMLElement,options:Record<string,unknown>):{destroy:()=>void}
}

declare module '@audiohays/tonewedge-ui/section-cards' {
  type Card = {element: HTMLButtonElement; update(options: Record<string, unknown>): void; destroy(): void}
  export function createSectionCard(options: Record<string, unknown>): Card
  export function createSectionStack(options: {element: HTMLElement}): {transition(change: () => void): void; reveal(sheet: HTMLElement): void; destroy(): void}
}
