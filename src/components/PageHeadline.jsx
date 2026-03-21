import React from "react";

const PageHeadline = ({heading, paragraph}) => {
	return (
		<div className={"text-center"}>
			<h2 className={"text-5xl font-semibold "}>{heading}</h2>
			<p className={"mt-3 text-slate-600 text-lg"}>{paragraph}</p>
		</div>
	);
};

export default PageHeadline;