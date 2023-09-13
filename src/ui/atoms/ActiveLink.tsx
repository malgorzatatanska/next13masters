"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact,
}: {
	href: Route<T>;
	children?: React.ReactNode;
	className: string;
	activeClassName: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const paths = pathname.split("/");

	const hrefWithoutSlashes = href.replace(/\//g, "");

	const isActive = exact
		? pathname === href
		: paths.includes(hrefWithoutSlashes);

	return (
		<Link
			className={clsx(className, isActive && activeClassName)}
			href={href as Route}
		>
			{children}
		</Link>
	);
};
