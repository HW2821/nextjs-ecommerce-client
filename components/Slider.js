import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined"
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined"
import styled from "styled-components"
import Image from "next/image"
import { useEffect, useState } from "react"
import { slideData } from "../mock/data"
import { mobile } from "../styled/responsive"
import { useRouter } from "next/router"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
  overflow: hidden;
  ${mobile({
    height: "50vh",
    color: "white",
  })}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e0f2f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  transition: all 0.2s ease;
  &:hover {
    background-color: #80cbc4;
  }

  left: ${(props) => props.left && "10"}px;
  right: ${(props) => props.right && "10"}px;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => (props.index || 0) * -100}vw);
  transition: all 1.5s ease-in-out;
`

const Slide = styled.div`
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const InfoContainer = styled.div`
  padding: 50px;
  width: 40%;
  position: absolute;
  right: 5%;
  bottom: 10%;
  z-index: 1;
  text-align: right;

  ${mobile({
    bottom: "50%",
  })}
`

const Title = styled.h1`
  font-size: 70px;
  margin: 0;

  ${mobile({
    fontSize: "30px",
  })}
`
const Desc = styled.p`
  margin: 30px 0px;
  font-size: 30px;
  font-weight: 500px;
  letter-spacing: 3px;

  ${mobile({
    fontSize: "20px",
  })}
`
const Button = styled.button`
  all: unset;

  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  background-color: teal;
  color: white;
  cursor: pointer;

  ${mobile({
    fontSize: "15px",
  })}
`

export default function Slider() {
  const [index, setIndex] = useState(0)
  const router = useRouter()
  const handleArrow = (dr) => {
    let next
    if (dr === "l") {
      next = index === 0 ? 2 : index - 1
    } else {
      next = index === 2 ? 0 : index + 1
    }
    setIndex(next)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleArrow("r")
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Container>
      <Arrow left onClick={() => handleArrow("l")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow right onClick={() => handleArrow("r")}>
        <ArrowRightOutlined />
      </Arrow>

      <Wrapper index={index}>
        {slideData.map((d) => (
          <Slide
            key={d.id}
            onClick={() => {
              router.push("/product/62453ca37e40b049594c42d4")
            }}
          >
            <Image draggable={false} priority src={d.img} layout="fill" objectFit="cover" />
            <InfoContainer>
              <Title>{d.title}</Title>
              <Desc>{d.desc}</Desc>
              <Button>现在购买</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  )
}
