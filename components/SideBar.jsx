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
`;
export default function SideBar({theme}) {
	return (
		<SideBarLayout colorBG={theme}>
			<h1>sidebar</h1>
		</SideBarLayout>
	);
}
