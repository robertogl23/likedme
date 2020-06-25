import React from "react";
import Link from "next/link";
import styled from "styled-components";
const TitleLikedme = styled.a`
	color: darkBlue;
	font-size:21px;
`;
const TitleLayout = styled.div`
	display: flex;
    align-items: center;
	margin-left: 60px;
`;
export default function TitleLikedMed() {
	return (
		<TitleLayout>
			<Link href='/'>
				<TitleLikedme>LikedMe</TitleLikedme>
			</Link>
		</TitleLayout>
	);
}
