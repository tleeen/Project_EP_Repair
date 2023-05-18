import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {adminRoutes, defaultRoutes, userRoutes} from "./config";
import {PageStart} from "../../pages/pageStart";
import {useRouter} from "./model";

export const AppRouter = () => {

	const {isAuth} = useRouter()

	return (
		<BrowserRouter>
			{(isAuth === '')
				?
				<Routes>
					{defaultRoutes.map(route =>
						<Route
							element= {route.element}
							path={route.path}
						/>
					)}
					<Route path={"/*"} element={<PageStart/>}/>
				</Routes>
				: isAuth === 'user' ?
					<Routes>
						{userRoutes.map(route =>
							<Route
								element= {route.element}
								path={route.path}
							/>
						)}
						<Route path={"/*"} element={<PageStart/>}/>
					</Routes>
					:
					<Routes>
						{adminRoutes.map(route =>
							<Route
								element= {route.element}
								path={route.path}
							/>
						)}
						<Route path={"/*"} element={<PageStart/>}/>
					</Routes>
			}
		</BrowserRouter>
	);
};