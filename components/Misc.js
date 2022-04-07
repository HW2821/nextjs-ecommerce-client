import Remove from "@mui/icons-material/Remove"
import Add from "@mui/icons-material/Add"
import styled from "styled-components"

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Count = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`

export function Amount({ amount, setAmount }) {
  return (
    <AmountContainer>
      <Remove
        onClick={() => {
          setAmount && amount > 1 && setAmount(amount - 1)
        }}
        style={{ cursor: "pointer" }}
      />
      <Count>{amount}</Count>
      <Add
        onClick={() => {
          setAmount && setAmount(amount + 1)
        }}
        style={{ cursor: "pointer" }}
      />
    </AmountContainer>
  )
}
