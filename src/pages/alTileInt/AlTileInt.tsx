/** @format */

import {useState} from "react"
import styled from "styled-components"
import Tile from "../../components/private/Tile"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  margin: 20px auto;
`

const Output = styled.div`
  margin: 20px;
  font-size: 24px;
  text-align: center;
  min-height: 40px; 
  border: 1px solid gray;
  max-width: 600px;
  margin: 7px auto 0px auto
`

const AlTileInt = () => {
  const [outputString, setOutputString] = useState<string>("")
  const [lastLetter, setLastLetter] = useState<string>("")
  const [consecutiveCount, setConsecutiveCount] = useState<number>(0)

  const handleTileClick = (letter: string) => {
    let newOutputString = outputString

    if (letter === lastLetter) {
      if (consecutiveCount < 2) {
        newOutputString += letter
        setConsecutiveCount(consecutiveCount + 1)
      } else {
        newOutputString = newOutputString.slice(0, -2) + "_"
        setConsecutiveCount(0) 
      }
    } else {
      newOutputString += letter
      setConsecutiveCount(1) 
    }

    setLastLetter(letter)
    setOutputString(newOutputString)
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  return (
    <>
      <div>
        <Container>
          {alphabet.map((letter) => (
            <Tile key={letter} letter={letter} onClick={handleTileClick} />
          ))}
        </Container>
        <Output id="outputString">{outputString}</Output>
      </div>
    </>
  )
}

export default AlTileInt
