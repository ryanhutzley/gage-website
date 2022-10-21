// import useDynamicSVGImport from "../hooks/useDynamicSVGImport";

// export default function Icon({ name, onCompleted, onError, ...rest }) {
// 	const { error, loading, SvgIcon } = useDynamicSVGImport(name, { onCompleted, onError });
// 	if (error) {
// 		return error.message;
// 	}
// 	if (loading) {
// 		return "Loading...";
// 	}
// 	if (SvgIcon) {
// 		return <SvgIcon {...rest} />;
// 	}
// 	return null;
// }

import React, { useEffect, useState } from "react";

function Icon(props) {
	const { name, ...otherProps } = props;

	/* Use state hook to store icon module value */
	const [iconModule, setIconModule] = useState(null);

	useEffect(() => {
		/* Use dynamic import to get corresponding icon as a module */
		import(`../assets/icons/${name}.svg`)
			.then((module) => {
				/* Persist data in state */
				// console.log(module);
				setIconModule(module);
			})
			.catch((error) => {
				/* Do not forget to handle errors */
				console.error(`Icon with name: ${name} not found!`);
			});
	}, [name /* update on name change */]);

	const renderIcon = () => {
		if (!iconModule) return null;

		/* Equal to: import { ReactComponent as Icon } from "./path/to/icon.svg" */
		const Component = iconModule.ReactComponent;
		// console.log(Component);
		return <Component {...otherProps} />;
	};

	return <>{renderIcon()}</>;
}
export default Icon;
