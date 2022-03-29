import styled from "styled-components"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;

  ${mobile({
    height: "20px",
    fontSize: "11px",
  })}
`

export default function Annoucement() {
  return <Container>配送优惠！满50元免运费。</Container>
}
