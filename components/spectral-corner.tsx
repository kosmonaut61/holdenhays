"use client"
import {useEffect,useRef} from 'react'
export function SpectralCorner(){
 const ref=useRef<HTMLDivElement>(null)
 useEffect(()=>{let disposed=false;let material:{destroy:()=>void}|undefined
 import('@audiohays/tonewedge-ui/glass').then(({createFrostedSurface})=>{if(disposed||!ref.current)return;material=createFrostedSurface(ref.current,{state:{palette:'spectral',mode:'dark',grain:72,panes:false},pixelSize:3,time:7})}).catch(()=>{material?.destroy()})
 return()=>{disposed=true;material?.destroy()}
 },[])
 return <div ref={ref} className="spectral-corner" aria-hidden="true" />
}
