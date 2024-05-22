/** @format */

// src/Partition.tsx
import React, {useRef, useState} from "react"
import styled from "styled-components"

interface PartitionProps {
  color: string
  onRemove?: () => void
}

interface ChildPartition {
  id: number
  color: string
}

const PartitionContainer = styled.div<{color: string}>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ResizeButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #f5f5f5;
  color: black;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    background-color: #f8f8f8;
  }
`
const ResizeButtonContainer = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
`

const SplitContainer = styled.div<{isVertical: boolean}>`
  display: flex;
  flex-direction: ${(props) => (props.isVertical ? "row" : "column")};
  width: 100%;
  height: 100%;
`

const Child = styled.div<{size: number; isVertical: boolean}>`
  position: relative;
  ${(props) =>
    props.isVertical
      ? `width: ${props.size}%; height: 100%;`
      : `width: 100%; height: ${props.size}%;`}
`

const Resizer = styled.div<{isVertical: boolean}>`
  background: #000;
  ${(props) =>
    props.isVertical
      ? `width: 5px; cursor: ew-resize;`
      : `height: 5px; cursor: ns-resize;`}
  z-index: 10;
`

const Partition: React.FC<PartitionProps> = ({color, onRemove}) => {
  const [isVertical, setIsVertical] = useState<boolean | null>(null)
  const [children, setChildren] = useState<ChildPartition[]>([])
  const [size, setSize] = useState<number>(50) // Default to 50% size for resizing
  const resizerRef = useRef<HTMLDivElement>(null)

  const splitVertical = () => {
    setIsVertical(true)
    setChildren([
      {id: 1, color},
      {id: 2, color: getRandomColor()},
    ])
  }

  const splitHorizontal = () => {
    setIsVertical(false)
    setChildren([
      {id: 1, color},
      {id: 2, color: getRandomColor()},
    ])
  }

  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isVertical) {
      const newWidth = (e.clientX / window.innerWidth) * 100
      setSize(newWidth)
    } else {
      const newHeight = (e.clientY / window.innerHeight) * 100
      setSize(newHeight)
    }
  }

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseup", handleMouseUp)
  }

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <PartitionContainer color={color}>
      {children.length === 0 ? (
        <Buttons>
          <ResizeButtonContainer>
            <ResizeButton onClick={splitVertical}>V</ResizeButton>
            <ResizeButton onClick={splitHorizontal}>H</ResizeButton>
          </ResizeButtonContainer>
          {onRemove && <button onClick={onRemove}>-</button>}
        </Buttons>
      ) : (
        <SplitContainer isVertical={!!isVertical}>
          <Child size={size} isVertical={!!isVertical}>
            <Partition
              color={children[0].color}
              onRemove={() => setChildren([])}
            />
          </Child>
          <Resizer
            isVertical={!!isVertical}
            onMouseDown={handleMouseDown}
            ref={resizerRef}
          />
          <Child size={100 - size} isVertical={!!isVertical}>
            <Partition
              color={children[1].color}
              onRemove={() => setChildren([])}
            />
          </Child>
        </SplitContainer>
      )}
    </PartitionContainer>
  )
}

export default Partition
