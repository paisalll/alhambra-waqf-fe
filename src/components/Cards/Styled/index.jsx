import { Card as CardAntd } from "antd";
import styled from "styled-components";

export const CardSimples = styled(CardAntd)`
  width: ${({ width }) => (width ? width : `0px`)};
  height: ${({ height }) => (height ? height : `0px`)};
  background-color: ${({ bg }) => (bg ? bg : "white")};
  border-radius: ${({ br }) => (br ? br : `0px`)};
  padding: ${({ padding }) => (padding ? padding : "default")};
`;
