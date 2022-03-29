import Image from "next/image"
import styled from "styled-components"
import { Amount } from "../components/Misc"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  padding: 20px;
  white-space: nowrap;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 0;
`

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding: "10px",
  })}
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: black;
  border: 1px solid black;
  background-color: ${(p) => (p.filled ? "black" : "transparent")};
  color: ${(p) => p.filled && "white"};
`

const TopTextContainer = styled.div`
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    gap: "10px",
  })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const ImgContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`
  white-space: normal;
`

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p) => p.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    gap: "10px",
  })}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-top: 10px;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 10px 0;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  &:last-of-type {
    font-weight: 500;
    font-size: 24px;
  }
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  all: unset;
  text-align: center;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;

  ${mobile({
    width: "95%",
  })}
`

export default function cart() {
  return (
    <Container>
      <Title>我的购物车</Title>
      <Top>
        <TopButton>继续购物</TopButton>
        <TopTextContainer>
          <TopText>购物车（2）</TopText>
          <TopText>愿望清单（0）</TopText>
        </TopTextContainer>
        <TopButton filled>前往结算</TopButton>
      </Top>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <ImgContainer>
                <Image
                  src={"https://i.ibb.co/840BLmt/EAB14-A09-2-EE3-4829-8874-2-DAC3-F51-BC06.jpg"}
                  layout="fill"
                  objectFit="cover"
                />
              </ImgContainer>
              <Details>
                <ProductName>
                  <b>产品：</b>防晒衣女装棉混纺防紫外线拉链连帽开衫
                </ProductName>
                <ProductId>
                  <b>ID： </b>9834654398
                </ProductId>
                <ProductColor color="grey" />
                <ProductSize>
                  <b>尺码：</b>M
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <Amount />
              <ProductPrice>¥30</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <ImgContainer>
                <Image
                  src={"https://i.ibb.co/840BLmt/EAB14-A09-2-EE3-4829-8874-2-DAC3-F51-BC06.jpg"}
                  layout="fill"
                  objectFit="cover"
                />
              </ImgContainer>
              <Details>
                <ProductName>
                  <b>产品：</b>防晒衣女装棉混纺防紫外线拉链连帽开衫
                </ProductName>
                <ProductId>
                  <b>ID： </b>9834654398
                </ProductId>
                <ProductColor color="grey" />
                <ProductSize>
                  <b>尺码：</b>M
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <Amount />
              <ProductPrice>¥30</ProductPrice>
            </PriceDetail>
          </Product>
        </Info>
        <Summary>
          <SummaryTitle>购物车明细</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>产品合计</SummaryItemText>
            <SummaryItemPrice>¥60</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>预估运费</SummaryItemText>
            <SummaryItemPrice>¥5</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>运费减免</SummaryItemText>
            <SummaryItemPrice>¥ -2</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem total>
            <SummaryItemText>订单合计</SummaryItemText>
            <SummaryItemPrice>¥ 63</SummaryItemPrice>
          </SummaryItem>
          <Button>结算</Button>
        </Summary>
      </Bottom>
    </Container>
  )
}
