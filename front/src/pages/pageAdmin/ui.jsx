import {TopMenu} from "../../shared/ui";
import {usePageAdmin} from "./model";

export const PageAdmin = () => {

	const {indicator, exit, changePage, page} = usePageAdmin()

	return (
		<div>
			<TopMenu indicator = {indicator} text1 = 'Home' text2 = 'User Management'  text3 = 'Application Management' exit = {exit} bt1 = {()=>changePage(1)} bt2 = {()=>changePage(2)} bt3 = {()=>changePage(3)}></TopMenu>
			{page}
		</div>
	);
};