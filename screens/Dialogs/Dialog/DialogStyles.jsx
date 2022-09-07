import styled from "styled-components/native";

export const DialogView = styled.View`
  flex-direction: row;
  padding: 15px;
  height: 100px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border_bottom-style: solid;
`;

export const DialogTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

export const DialogDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export const DialogImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

export const DialogDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`
