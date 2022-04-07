import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import { mobile } from "../styled/responsive"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { loggout } from "../redux/userSlice"
import { clearCart, resetCart } from "../redux/cartSlice"
import HomeOutlined from "@mui/icons-material/HomeOutlined"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchInput = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ padding: "0px 5px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;

  &:last-of-type {
    margin-right: 0;
    ${mobile({ marginRight: "15px" })}
  }
`

const DropDown = styled.div`
  position: relative;
  margin-right: 20px;
  height: 25px;
`

const UserName = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid black;

  &:hover {
    background-color: #e4e4e4;
  }
`

const LogOut = styled.div`
  position: absolute;
  display: none;
  display: ${(p) => p.clicked && "block"};
  background-color: white;
  text-align: center;
  padding: 5px 10px;
  border: 1px solid black;

  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: #e4e4e4;
  }
`

const HomeIcon = styled.div`
  margin-left: 10px;
  cursor: pointer;
`

export default function Navbar() {
  const [client, setClient] = useState(false)
  const [clicked, setClicked] = useState(false)
  const quantity = useSelector((s) => s.cart.quantity)
  const currentUser = useSelector((s) => s.user.currentUser)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClient(true)
    }
  }, [])

  if (client) {
    window.onclick = (e) => {
      if (!e.target.matches(".username") && clicked) setClicked(false)
    }
  }

  const handleLogOut = () => {
    dispatch(loggout())
    dispatch(clearCart())
  }

  const userMenu = (
    <DropDown>
      <UserName
        className="username"
        onClick={() => {
          setClicked(!clicked)
        }}
      >
        {currentUser?.username}
      </UserName>
      <LogOut onClick={handleLogOut} clicked={clicked}>
        退出
      </LogOut>
    </DropDown>
  )
  const defaultMenu = (
    <>
      <MenuItem>
        <Link href={"/register"}>注册</Link>
      </MenuItem>
      <MenuItem>
        <Link href={"/login"}>登陆</Link>
      </MenuItem>
    </>
  )

  return (
    <Container>
      <Wrapper>
        <Left>
          <HomeIcon
            onClick={() => {
              router.push("/")
            }}
          >
            <HomeOutlined />
          </HomeIcon>
          <SearchContainer>
            <SearchInput placeholder="搜索" />
            <SearchIcon style={{ color: "grey", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => router.push("/")}>HW's demo</Logo>
        </Center>
        <Right>
          {currentUser ? userMenu : defaultMenu}
          <MenuItem onClick={() => router.push("/cart")}>
            <Badge badgeContent={client ? quantity : 0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
