import React from "react";

type Props = {
	elements: any;
	currentPage: number;
	onPageChange: (e: number) => void;
};

const Pagination = (props: Props) => {
	const { elements, currentPage, onPageChange } = props;
	const handlePageClick = (pageNumber: number) => {
		onPageChange(pageNumber);
	};

	return (
		<div className="pagination">
			{elements.map(
				(
					element:
						| string
						| number
						| boolean
						| React.ReactElement<any, string | React.JSXElementConstructor<any>>
						| Iterable<React.ReactNode>
						| React.ReactPortal
						| React.PromiseLikeOfReactNode
						| null
						| undefined,
					index: number
				) => (
					<div
						key={index}
						className={
							currentPage === index + 1
								? "bg-gray-600 h-3 w-3 rounded-full"
								: "bg-gray-300 h-3 w-3 rounded-full"
						}
						onClick={() => handlePageClick(index + 1)}>
						{element}
					</div>
				)
			)}
		</div>
	);
};

export default Pagination;
