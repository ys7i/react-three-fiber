export * from '../index'
export * from '../canvas'

import * as THREE from 'three'
import React from 'react'
// @ts-ignore
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { ResizeContainer } from './shared/web/ResizeContainer'
import { CanvasProps } from '../canvas'

export const Canvas = React.memo(({ children, ...props }: CanvasProps) => (
  <ResizeContainer
    {...props}
    renderer={() => new CSS3DRenderer()}
    effects={(gl, el) => (el.appendChild(gl.domElement), () => el.removeChild(gl.domElement))}>
    {children}
  </ResizeContainer>
))