import { CircularProgress } from "@mui/material"
import { display } from "@mui/system"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { Amount } from "../../components/Misc"
import { addToCart } from "../../redux/cartSlice"
import { mobile } from "../../styled/responsive"
import { debounce, Trigger } from "../../utils/miscs"

import { publicRequest, userRequest } from "../../utils/requestMethod"

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

  border: ${(p) => p.select && "3px solid lightblue"};
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

const Button = styled.button`
  all: unset;
  padding: 10px 25px;
  border: 2px solid teal;
  cursor: pointer;
  color: teal;
  font-weight: 500;
  user-select: none;
  transition: all 0.2s ease;
  display: flex;
  &:hover {
    background-color: teal;
    color: white;
  }
`

const Warning = styled.span`
  color: red;
  display: fixed;
`

const Icon = styled.div`
  display: none;
  margin-left: 10px;

  display: ${(p) => p.loading && "block"};
`

export default function Product() {
  const [product, setProduct] = useState({})
  const [amount, setAmount] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const error = useSelector((s) => s.cart.error)
  const loading = useSelector((s) => s.cart.loading)
  const { query, isReady } = useRouter()
  const dispatch = useDispatch()

  const getProduct = async () => {
    try {
      const res = await publicRequest.get(`/products/find/${query.id}`)
      return res.data
    } catch (error) {
      console.log(error.message)
    }
  }

  const trigger = new Trigger()
  const handleAddToCart = () =>
    trigger.throttle(2000, () => {
      if (loading) return
      dispatch(
        addToCart({
          ...product,
          amount,
          color,
          size,
        })
      )
    })

  useEffect(async () => {
    if (!isReady) return
    const data = await getProduct()
    setProduct(data)
    setColor(data.color[0])
    setSize(data.size[0])
  }, [isReady])

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image
            src={product?.img || "https://i.ibb.co/LNrXvYT/Show-Loader-During-Image-Loading-vue-load-image.png"}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title || "。。。"}</Title>
          <Desc>
            有助于从颈部包裹至手心的防紫外线※单品。质感自然，适合在多种场合穿着AIRism棉混纺面料具有舒爽的肌肤触感。
            具有防紫外线※功能 内侧附带调节器。 衣长稍短，呈现出具有宽松感的剪裁。
            可通过调节器调节松紧度，打造多样风格的造型。 高领的设计，有助于包裹至颈部。
            袖口加入了可穿过大拇指的拇指孔设计。 适合在运动、休闲等场合穿搭。
          </Desc>
          <Price>¥{product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>颜色</FilterTitle>
              {product?.color?.map((c, i) => (
                <FilterColor
                  onClick={() => {
                    setColor(c)
                  }}
                  select={c === color}
                  color={c}
                  key={"color_" + i}
                />
              )) || "..."}
            </Filter>
            <Filter>
              <FilterTitle>尺码</FilterTitle>
              <FilterSize
                onChange={(e) => {
                  setSize(e.target.value)
                }}
              >
                {product?.size?.map((s, i) => <FilterSizeOption key={"size_" + i}>{s}</FilterSizeOption>) || "..."}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Amount amount={amount} setAmount={setAmount} />
            <Button loading={loading} onClick={handleAddToCart}>
              <span>加入购物车</span>
              <Icon loading={loading}>
                <CircularProgress size={20} color="inherit" />
              </Icon>
            </Button>
            <Warning hidden={!error}>{error}</Warning>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}
