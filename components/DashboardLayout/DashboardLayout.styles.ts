import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content:center;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textDark};
`;

export const Content = styled.div`
  display: flex;
  flex: 2;
`;

export const PageContainer = styled.div`
  display:flex;
  padding: 20px;
  width: 80vw;
`;
