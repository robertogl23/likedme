import React from "react";
import styled from "styled-components";
const SideBarLayout = styled.div`
	position: fixed;
	transform: translateZ(0px);
	display: block;
    z-index: 1;
    left: 0px;
    top: 2.77778rem;
    bottom: 0px;
    right: auto;
    width: 16.6667rem;
    box-sizing: border-box;
    background:${props => props.colorBG};
    ${(props) =>
		props.transition && "transform: translateZ(-16.6667rem) !important"};
    transform: translateZ(0px);
    transition: transform 150ms ease-out 0s;
    @media (max-width: 967px) {
		transform: translateX(-16.6667rem);
	}
`;
export default function SideBar({theme,sideBarShow}) {
	return (
		<SideBarLayout colorBG={theme} transition={sideBarShow}>
			<h1>sidebar</h1>
		</SideBarLayout>
	);
}
