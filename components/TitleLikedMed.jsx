import React from "react";
import Link from "next/link";
import styled from "styled-components";
const TitleLikedme = styled.a`
color:#fff;
font-size:26px;
`;
const TitleLayout = styled.div`
	display: flex;
	align-items: center;
	padding-left: 60px;
	@media (max-width: 967px) {
		padding: 0px;
	}
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
