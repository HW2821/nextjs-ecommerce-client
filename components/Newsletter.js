import Send from "@mui/icons-material/Send"
import styled from "styled-components"
import { mobile } from "../styled/responsive"

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mobile({ height: "50vh" })}
`
const Title = styled.h1`
  font-size: 70px;
  margin: 20px;

  ${mobile({ fontSize: "40px" })}
`
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ fontSize: "20px" })}
`

const InputContainer = styled.div`
  width: 45%;
  display: flex;
  height: 40px;
  background-color: white;

  ${mobile({ height: "30px", width: "80vw" })}
`

const Input = styled.input`
  all: unset;
  flex: 9;
  margin-left: 10px;

  ${mobile({ flex: "5" })}
`

const Button = styled.button`
  all: unset;
  flex: 1;
  cursor: pointer;
  background-color: teal;
  text-align: center;
  color: white;

  .icon {
    transition: all 0.2s ease;
  }

  &:hover {
    .icon {
      transform: scale(1.2);
    }
  }
`

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>订阅即可获取上新提醒</Desc>
      <InputContainer>
        <Input placeholder="输入您的 Email" />
        <Button>
          <Send className="icon" />
        </Button>
      </InputContainer>
    </Container>
  )
}
