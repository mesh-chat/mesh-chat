import styled from "styled-components/native";

export const Overlay = styled.View`
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
`

export const DialogView = styled.View`
  height: 100%;
  width: 100%;
`;

export const DialogTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  //font-family: 'e-Ukraine-Bold';
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
  //font-family: 'e-Ukraine-Bold';
`;

export const PhoneNumber = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
  //font-family: 'e-Ukraine-Bold';
`
