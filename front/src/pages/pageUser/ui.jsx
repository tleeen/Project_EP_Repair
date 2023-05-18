import React from "react";
import {TopMenu} from "../../shared/ui";
import {usePageUser} from "./model";

export const PageUser = () => {

	const {indicator, exit, changePage, page} = usePageUser()

	return (
		<div>
			<TopMenu indicator = {indicator} text1 = 'Home' text2 = 'Submit an application'  text3 = 'My applications' exit = {exit} bt1 = {()=>changePage(1)} bt2 = {()=>changePage(2)} bt3 = {()=>changePage(3)}></TopMenu>
			{page}
		</div>
	);
};