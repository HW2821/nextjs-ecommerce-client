import Image from "next/image"
import styled from "styled-components"
import { Amount } from "../../components/Misc"
import { mobile } from "../../styled/responsive"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "5px",
    height: "100vh",
  })}
`
const ImgContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 90vh;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({
    padding: "10px",
    alignItems: "flex-end",
    textAlign: "end",
  })}
`
const Title = styled.h1`
  font-weight: 200;
  margin: 0;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({
    textAlign: "left",
    display: "inline-block",
  })}
`

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  width: 50%;
  justify-content: space-between;

  ${mobile({
    width: "75vw",
    justifyContent: "flex-end",
    gap: "20px",
    display: "inline-flex",
  })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(p) => p.color};
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;
`

const FilterSize = styled.select`
  all: unset;
  padding: 2px 10px;
  cursor: pointer;
  border: 1px solid black;
  margin-left: 10px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  white-space: nowrap;
  ${mobile({
    width: "92vw",
    justifyContent: "flex-end",
    gap: "20px",
  })}
`

// const AmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   font-weight: 700;
// `

// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0 5px;
// `

const Button = styled.button`
  all: unset;
  padding: 10px 15px;
  border: 2px solid teal;
  cursor: pointer;
  color: teal;
  font-weight: 500;

  transition: all 0.2s ease;

  &:hover {
    background-color: teal;
    color: white;
  }
`

export default function Product() {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image
            src={"https://i.ibb.co/840BLmt/EAB14-A09-2-EE3-4829-8874-2-DAC3-F51-BC06.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>防晒衣女装棉混纺防紫外线拉链连帽开衫</Title>
          <Desc>
            有助于从颈部包裹至手心的防紫外线※单品。质感自然，适合在多种场合穿着AIRism棉混纺面料具有舒爽的肌肤触感。
            具有防紫外线※功能 内侧附带调节器。 衣长稍短，呈现出具有宽松感的剪裁。
            可通过调节器调节松紧度，打造多样风格的造型。 高领的设计，有助于包裹至颈部。
            袖口加入了可穿过大拇指的拇指孔设计。 适合在运动、休闲等场合穿搭。
          </Desc>
          <Price>¥20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>颜色</FilterTitle>
              <FilterColor color="lightgrey"></FilterColor>
              <FilterColor color="teal"></FilterColor>
              <FilterColor color="coral"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>尺码</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            {/* <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer> */}
            <Amount />
            <Button>加入购物车</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}
