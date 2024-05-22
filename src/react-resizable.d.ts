// src/react-resizable.d.ts
declare module 'react-resizable' {
   import * as React from 'react';
 
   export interface ResizableBoxProps {
     width?: number;
     height?: number;
     minConstraints?: [number, number];
     maxConstraints?: [number, number];
     resizeHandles?: Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'>;
     onResizeStop?: (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
     onResizeStart?: (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
     onResize?: (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
     lockAspectRatio?: boolean;
     axis?: 'both' | 'x' | 'y' | 'none';
     style?: React.CSSProperties;
     className?: string;
     handle?: React.ReactNode;
     handleSize?: [number, number];
   }
 
   export interface ResizeCallbackData {
     node: HTMLElement;
     size: { width: number; height: number };
     handle: 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';
   }
 
   export class ResizableBox extends React.Component<ResizableBoxProps> {}
 
   export class Resizable extends React.Component<any> {}
 }
 