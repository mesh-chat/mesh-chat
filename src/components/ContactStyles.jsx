import styled from "styled-components/native";

export const ContactView = styled.View`
  flex-direction: row;
  padding: 15px;
  height: 100px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border_bottom-style: solid;
`;

export const ContactDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export const ContactTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  //font-family: 'e-Ukraine-Bold';
`;
