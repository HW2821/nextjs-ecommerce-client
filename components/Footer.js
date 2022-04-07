import Email from "@mui/icons-material/Email"
import Facebook from "@mui/icons-material/Facebook"
import Instagram from "@mui/icons-material/Instagram"
import Twitter from "@mui/icons-material/Twitter"
import YouTube from "@mui/icons-material/YouTube"
import Image from "next/image"
import styled from "styled-components"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(p) => p.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const WechatIcon = styled.div`
  display: inline-flex;
  position: relative;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>HW's demo</Logo>
        <Desc>
          前端 React(Next.js) + redux + Styled Components <br />
          后端 express.js + MongoDB
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>主页</ListItem>
          <ListItem>购物车</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>我的账号</ListItem>
          <ListItem>查看订单</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Email style={{ marginRight: "5px" }} /> 邮箱：282145681@qq.com
        </ContactItem>
        <ContactItem>
          <WechatIcon>
            <Image src="/icon/wechat.png" layout="fill" />
          </WechatIcon>
          微信：18558712837
        </ContactItem>
      </Right>
    </Container>
  )
}
