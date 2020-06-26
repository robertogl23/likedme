import React from "react";
import styled from "styled-components";
const Content = styled.div`
	border: 1px solid blue;
    align-items: center;
    display: flex;
    justify-content: center;
	max-width: 100%;
	height: 100vh;
	box-sizing: border-box;
	margin: 0px auto;
	padding-left: 16.6667rem;
    padding-top: 60px;
    transition: transform 150ms ease-out 0s;
	@media (max-width: 967px) {
        padding-left: 0px !important;
        ${(props) =>
			props.transition && "transform: transLateX(16.6667rem) !important"};
		transform: transLateX(0px);
	}
`;
export default function LayoutContent({children, sideBarShow}) {
	return (
		<Content transition={sideBarShow}>
            {children}
		</Content>
	);
}
