import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"
import { CircularProgress } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { Amount } from "../components/Misc"
import { addToCart } from "../redux/cartSlice"
import { mobile } from "../styled/responsive"
import { Trigger } from "../utils/miscs"
import { userRequest } from "../utils/requestMethod"

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
    marginRight: "10px",
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
  ${mobile({
    margin: "10px",
  })}
`

const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;

  ${mobile({
    padding: "10px",
    width: "50%",
  })}
`

const ProductName = styled.span`
  white-space: normal;
`

const ProductId = styled.span`
  white-space: normal;
  word-break: break-all;
`

const ProductColor = styled.div`
  display: inline-block;
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
  position: relative;
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
  position: sticky;
  top: 80px;
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

const Blank = styled.div`
  min-height: 100vh;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
`

const Num = styled.div`
  font-size: large;
  font-weight: 600;
  width: 30px;
  height: 30px;
  margin: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
`

const Loading = styled.div`
  position: absolute;
  left: -50%;
  top: -10%;
`

export default function () {
  const [targetProduct, setTargetProduct] = useState()
  const cartRedux = useSelector((s) => s.cart)
  const userRedux = useSelector((s) => s.user)
  const deliverCost = cartRedux.totalPrice ? 5 : 0
  const discount = cartRedux.totalPrice > 50 ? 5 : 0
  const loading = useSelector((s) => s.cart.loading)
  const router = useRouter()
  const dispatch = useDispatch()

  const handlePayment = async () => {
    try {
      const res = await userRequest(userRedux.currentUser.accessToken).get("/payment/" + userRedux.currentUser._id)
      if (res.data === "支付成功") router.push("/order")
    } catch (error) {
      console.log(error.message)
      alert("支付失败")
    }
  }

  useEffect(() => {
    if (!userRedux.currentUser) router.push("/login")
  }, [userRedux])

  const trigger = new Trigger()
  const handleAdd = (i) => {
    trigger.throttle(1000, () => {
      if (loading) return
      console.log("ds")
      const newItem = structuredClone(cartRedux.cartItems[i])
      newItem.amount = 1
      dispatch(addToCart(newItem))
    })
  }
  const handleRemove = (i) => {
    trigger.throttle(1000, () => {
      if (loading) return
      const newItem = structuredClone(cartRedux.cartItems[i])
      newItem.amount = -1
      dispatch(addToCart(newItem))
    })
  }

  if (!userRedux.currentUser) return <Blank />
  else
    return (
      <Container>
        <Title>我的购物车</Title>
        <Top>
          <TopButton>继续购物</TopButton>
          <TopTextContainer>
            <TopText>购物车（{cartRedux.quantity}）</TopText>
            <TopText>愿望清单（0）</TopText>
          </TopTextContainer>
          <TopButton filled>前往订单</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartRedux.cartItems.map((p, i) => (
              <div key={i}>
                {i === 0 ? null : <Hr />}
                <Product>
                  <ProductDetail>
                    <ImgContainer>
                      <Image src={p.img} layout="fill" objectFit="cover" />
                    </ImgContainer>
                    <Details>
                      <ProductName>
                        <b>产品：</b>
                        {p.title}
                      </ProductName>
                      <ProductId>
                        <b>ID： </b>
                        {p._id}
                      </ProductId>
                      <ProductId>
                        <b>颜色： </b>
                        <ProductColor color={p.color} />
                      </ProductId>
                      <ProductSize>
                        <b>尺码：</b>
                        {p.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <Quantity>
                      <Remove
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setTargetProduct(i)
                          handleRemove(i)
                        }}
                      />
                      <Num> {p.amount}</Num>
                      <Add
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setTargetProduct(i)
                          handleAdd(i)
                        }}
                      />
                    </Quantity>
                    <ProductPrice>
                      ¥{p.price * p.amount}
                      <Loading hidden={!(loading && targetProduct === i)}>
                        <CircularProgress size={20} />
                      </Loading>
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              </div>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>购物车明细</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>产品合计</SummaryItemText>
              <SummaryItemPrice>¥{cartRedux.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>预估运费</SummaryItemText>
              <SummaryItemPrice>¥ {deliverCost}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>运费减免</SummaryItemText>
              <SummaryItemPrice>¥ {discount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem total>
              <SummaryItemText>订单合计</SummaryItemText>
              <SummaryItemPrice>¥ {cartRedux.totalPrice + deliverCost - discount}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handlePayment}>结算</Button>
          </Summary>
        </Bottom>
      </Container>
    )
}
