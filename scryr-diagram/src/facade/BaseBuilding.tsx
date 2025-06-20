import { RoundedBox, Text } from "@react-three/drei";
import { FaceContent } from "../facade/index.tsx";
import { LinkingOrnament } from "../facade/facadeType.ts";
import { LogoOrnament } from "../facade/logo.tsx";
import { Svg } from "../utils/svg.tsx";
import { Box, Flex } from "@react-three/flex";
import { Object3DProps } from "@react-three/fiber";
import { currentTheme } from "../neighborhood/theme.ts";
import { useRef } from 'react'

export type TopFace = {
    icon: string;
    name: string;
}

export type SideFace = {
    isContainer:  boolean;
}

export type FrontFaceTopSection = {
    description: string;
    version: string;
}

export type FrontFaceMiddleSection = {
    language: LinkingOrnament;
    frameworks: LinkingOrnament[];
}

export type FrontFaceBottomSection = {
    links: LinkingOrnament[];
    docs: LinkingOrnament[];
}


function WindowOrnament({position, wd, ht, ...props}: {position: [number, number, number], wd: number, ht: number, props?: Object3DProps}) {
  return (
    <RoundedBox 
    args={[wd * 0.9, ht * 0.2, .05]} 
    radius={0.05} 
    smoothness={4}
    position={position}
  >
    <meshStandardMaterial color={currentTheme.fontColor} />
  </RoundedBox>
  )
}

export function BaseBuilding({
    topFace,
    sideFace,
    frontFaceTopSection,
    frontFaceMiddleSection,
    frontFaceBottomSection,
    ...props
}: {
    topFace: TopFace;
    sideFace: SideFace;
    frontFaceTopSection: FrontFaceTopSection;
    frontFaceMiddleSection: FrontFaceMiddleSection;
    frontFaceBottomSection: FrontFaceBottomSection;
    props: Object3DProps;
}) {
  const ht = 3;
  const wd = 2;
  const dp = 1;
  const meshRef = useRef(null)
  const windowCount = 3; // add 2 or 3
  return (
    <group {...props}>
      <Text
        position={[0, wd / 2 + 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.2}
        color={currentTheme.fontColor}
        anchorX="center"
        anchorY="middle"
      >
        {topFace.icon}{topFace.name}
      </Text>
      <RoundedBox position={[0, ht/2, 0]} args={[ wd, ht, dp]} radius={0.08} smoothness={4}>
        <meshStandardMaterial color={currentTheme.fontColor} />
      </RoundedBox>
      <WindowOrnament position={[0, ht/4 + 1.5, 0.51]} wd={wd} ht={ht} />
      <WindowOrnament position={[0, ht/4 + .75, 0.51]} wd={wd} ht={ht} />
      <WindowOrnament position={[0, ht/4, 0.51]} wd={wd} ht={ht} />
    </group>
  );
}
