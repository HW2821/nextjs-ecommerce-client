import Image from "next/image"
import { useRouter } from "next/router"
import styled from "styled-components"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 40vh;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;

  @media only screen and (min-width: 600px) {
    &:hover {
      transform: scale(1.015);

      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      z-index: 2;
    }
  }

  ${mobile({
    flex: "auto",
    width: "100vw",
    margin: "5px 0px",
    height: "30vh",
  })}
`
const Info = styled.div`
  position: absolute;
  bottom: 0;
  padding: 15px;
`

const Title = styled.h2`
  color: whitesmoke;
  margin: 10px;
`

const Card = styled.div`
  color: #757575;
  font-weight: 700;
  padding: 1rem 2.5rem;
  background-color: white;
`

export default function CategoryItem({ img, title, category }) {
  const router = useRouter()

  return (
    <Container onClick={() => router.push(`/productlist/${category}`)}>
      <Image src={img} layout="fill" objectFit="cover" />
      <Info>
        <Title>{title}</Title>
        <Card>查看更多商品</Card>
      </Info>
    </Container>
  )
}
