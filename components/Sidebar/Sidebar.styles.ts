import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: ${(props) => props.theme.colors.greyBg};
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:1px 0px 10px 1px #333;
`;
