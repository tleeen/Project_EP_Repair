import {Button} from "../../shared/ui";
import React from "react";
import {useUpdateRole} from "./model";
import {useDispatch} from "react-redux";

export const UpdateRole = () => {

	const dispatch = useDispatch();
	const {update} = useUpdateRole();

	return (
		<Button func = {() => dispatch(update()) } name = " delete" text = {"Update"}></Button>
	);
};