"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	name,
}: {
	href: Route<T> | URL;
	name: string;
}) => {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<Link
			className={clsx(
				`text-gray-500 transition hover:text-gray-500/75`,
				isActive && `underline `,
			)}
			href={href as Route}
		>
			{name}
		</Link>
	);
};
