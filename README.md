[![Build Status](https://travis-ci.org/react-spring/drei.svg?branch=master)](https://travis-ci.org/react-spring/drei) [![npm version](https://badge.fury.io/js/drei.svg)](https://badge.fury.io/js/drei) ![npm](https://img.shields.io/npm/dt/drei.svg)

<p align="center">
    <img width="500" src="https://imgur.com/arDsXO6.jpg" alt="logo" />
</p>

A growing collection of useful helpers and abstractions for [react-three-fiber](https://github.com/react-spring/react-three-fiber), saving you some boilerplate.

If you find yourself repeating set-up code often and if it's generic enough, add it here, everyone benefits!

#### Requirements

- Types
- ForwardRefs if possible, so that objects can be referenced back
- Invalidate frames on any movement for those using invalidateFrameloop
- Cleanup on unmount, no left-overs, restore previous states

```
yarn add drei
```

```jsx
import { ... } from 'drei'
```

# Index

- `<PerspectiveCamera />`
- `<OrbitControls />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-contact-shadow-h5xcw)
- `<MapControls />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/react-three-fiber-map-mkq8e)
- `<TrackballControls />`
- `<TransformControls />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-transformcontrols-hc8gm)
- `<Detailed />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-detailed-dep1v)
- `<PositionalAudio />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-positionalaudio-yi1o0) ![](https://img.shields.io/badge/-suspense-brightgreen)
- `<StandardEffects />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-standardeffects-frcmm) ![](https://img.shields.io/badge/-suspense-brightgreen) ![](https://img.shields.io/badge/-useFrame-red)
- `<Sky />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-sky-3q4ev)
- `<HTML />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-suspense-zu2wo)
- `<Stats />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-stats-8p4ph) ![](https://img.shields.io/badge/-useFrame-red)
- `draco()` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-contact-shadow-h5xcw)

# Exports

## Cameras

##### ⚡️ `<PerspectiveCamera />`

A responsive, perspective camera that sets itself as the default. Can take children, which from then on move along.

```jsx
<PerspectiveCamera
  makeDefault               // Registers it as the default camera system-wide (default=true)
  {...props}                // All THREE.PerspectiveCamera props are valid
>
  <mesh />
</PerspectiveCamera>
```

## Controls

If available controls have damping enabled by default, they manage their own updates, remove themselves on unmount, are compatible with the `invalidateFrameloop` canvas-flag. They inherit all props from their underlying THREE controls.

##### ⚡️ `<OrbitControls />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-contact-shadow-h5xcw)

##### ⚡️ `<MapControls />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/react-three-fiber-map-mkq8e)

##### ⚡️ `<TrackballControls />`

##### ⚡️ `<TransformControls />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-transformcontrols-hc8gm)

## Abstractions

##### ⚡️ `<Detailed`> [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-detailed-dep1v)

A wrapper around [THREE.LOD](https://threejs.org/docs/index.html#api/en/objects/LOD) (Level of detail).

```jsx
<Detailed
  distances={[0, 10, 20]}   // Camera distances, correspends to the # of the children
  {...props}                // All THREE.LOD props are valid
>
  <mesh geometry={highDetail} />
  <mesh geometry={mediumDetail} />
  <mesh geometry={lowDetail} />
</Detailed>
```

##### ⚡️ `<PositionalAudio />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-positionalaudio-yi1o0) ![](https://img.shields.io/badge/-suspense-brightgreen)

A wrapper around THREE.PositionalAudio. Add this to groups or meshes to tie them to a sound that plays when the camera comes near.

```jsx
<mesh>
  <PositionalAudio
    url="/sound.mp3"        // Url of the sound file
    distance={1}            // Camera distance (default=1)
    loop                    // Repat play (default=true)
    {...props}              // All THREE.PositionalAudio props are valid
  />
</mesh>
```

##### ⚡️ `<StandardEffects />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-standardeffects-frcmm) ![](https://img.shields.io/badge/-suspense-brightgreen) ![](https://img.shields.io/badge/-useFrame-red)

Adds [ambient-occlusion](https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/SSAOEffect.js~SSAOEffect.html#instance-constructor-constructor), [bloom](https://vanruesc.github.io/postprocessing/public/docs/class/src/effects/BloomEffect.js~BloomEffect.html#instance-constructor-constructor) and SMAA using the [postprocessing](https://github.com/vanruesc/postprocessing) library.

```jsx
<StandardEffects
  smaa                      // Can be a boolean (default=true)
  ao                        // Can be a boolean or all valid postprocessing AO props (default=true)
  bloom                     // Can be a boolean or all valid postprocessing Bloom props (default=true)
  edgeDetection = 0.1       // Optional, SMAA precision
  bloomOpacity = 1          // Optional, Bloom blendMode opacity
  effects                   // Optional, define your own effect: ([smaa, ao, bloom]) => [...effects]
  />
```

## Shaders

##### ⚡️ `<Sky />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-sky-3q4ev)

From: https://threejs.org/examples/webgl_shaders_sky.html

```jsx
<Sky
  distance={450000}         // Camera distance (default=450000)
  sunPosition={[0, 1, 0]}   // Sun position normal (default=[0, 1, 0])
  {...props}                // All three/examples/jsm/objects/Sky props are valid
/>
```

## Misc

#### ⚡️ `<HTML />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-suspense-zu2wo)

Allows you to tie HTML content to any object of your scene. It will be projected to the objects whereabouts automatically.

```jsx
<HTML
  prepend = false           // Will be projected in front of the canvas
  center = false            // Adds a -50%/-50% css transform
  scaleFactor               // Optional, scales children if set to a number (default=undefined)
  zIndexRange               // Optional, handles z-order (default=[16777271, 0])
  portal                    // Optional reference to target container
  {...groupProps}           // All THREE.Group props are valid
  {...divProps}             // All HTMLDivElement props are valid
  >
  <h1>hello</h1>
  <p>world</p>
</HTML>
```

#### ⚡️ `<Stats />` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-drei-stats-8p4ph) ![](https://img.shields.io/badge/-useFrame-red)

Adds [stats](https://github.com/mrdoob/stats.js/) to document.body. It takes over the render-loop!

```jsx
<Stats
  showPanel={0}             // Start-up panel (default=0)
  {...props}                // All stats.js props are valid
/>
```

##### ⚡️ `draco()` [![](https://img.shields.io/badge/-codesandbox-blue)](https://codesandbox.io/s/r3f-contact-shadow-h5xcw)

Adds the Draco extension to your GLTFLoader.

```jsx
useLoader(
  GLTFLoader,
  url,
  draco(binUrl)             // default='/draco-gtltf/'
)
```