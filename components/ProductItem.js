import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import Image from "next/image"
import { useRouter } from "next/router"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0f7fa;
  position: relative;
  z-index: 1;
`

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: teal;
    color: white;
    transform: scale(1.1);
  }
`

export default function ProductItem({ img, _id }) {
  const router = useRouter()
  return (
    <Container>
      <ImgContainer>
        <Image src={img} layout="fill" objectFit="cover" />
      </ImgContainer>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon
          onClick={() => {
            router.push(`/product/${_id}`)
          }}
        >
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}
