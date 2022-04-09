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
import { clearCart } from "../redux/cartSlice"
import HomeOutlined from "@mui/icons-material/HomeOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import PersonIcon from "@mui/icons-material/Person"

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
  color: white;
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
  position: relative;
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
  display: flex;
  &:last-of-type {
    margin-right: 15px;
  }
  ${mobile({ marginRight: "10px" })}
`

const UserName = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  &:hover {
    background-color: #e4e4e4;
  }
`

const LogOut = styled.div`
  background-color: white;
  padding: 5px 10px;
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

const PersonIconContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ededed;
  }
`

const DropDown = styled.div`
  position: relative;
  height: 25px;
`

const DropItem = styled.div`
  border: 1px solid lightgray;
  display: none;
  position: absolute;
  right: 0;
  text-align: right;
  display: ${(p) => p.clicked && "block"};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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

  useEffect(() => {
    setClicked(false)
  }, [currentUser])

  const handleLogOut = () => {
    dispatch(loggout())
    dispatch(clearCart())
  }

  const userMenu = (
    <MenuItem>
      <DropDown className="dropdown">
        <PersonIconContainer
          className="usericon"
          onClick={() => {
            setClicked(!clicked)
          }}
        >
          {clicked ? <PersonIcon /> : <PersonOutlineOutlinedIcon />}
        </PersonIconContainer>

        <DropItem clicked={clicked}>
          <UserName>{currentUser?.username}</UserName>
          <LogOut onClick={handleLogOut}>退出</LogOut>
        </DropItem>
      </DropDown>
    </MenuItem>
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
          <Logo onClick={() => router.push("/")}>HW's</Logo>
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
