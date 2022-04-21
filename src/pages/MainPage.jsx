import React from 'react'
import Header from '../components/Header/Header'
import styled from 'styled-components'

const MainPage = () => {
	return (
		<WrapperContent>
			<WrapperTimer>
				<Header />
			</WrapperTimer>
		</WrapperContent>
	)
}
const WrapperContent = styled.div`
	width: 100%;
	height: 680px;
	background-color: rgb(217, 85, 80);
`
const WrapperTimer = styled.div`
	background-color: rgba(255, 255, 255, 0.1);
	padding: 20px 0px 30px;
	border-radius: 6px;
	margin-bottom: 20px;
	text-align: center;
	width: 480px;
	height: 320px;
	margin: 0 auto;
	padding-bottom: 16px;
	cursor: pointer;
`
export default MainPage
