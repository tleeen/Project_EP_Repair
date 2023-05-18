import React from "react";
import {Button} from "../../shared/ui";
import {useDeleteUser} from "./model";

export const DeleteUser = () => {

	const {deleteUsers} = useDeleteUser();

	return (
		<Button func = {()=>deleteUsers()} name = " delete" text = {"Delete"}></Button>
	);
};