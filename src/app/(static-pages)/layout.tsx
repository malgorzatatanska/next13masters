export default function StaticLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="mx-auto max-w-lg pt-20">{children}</div>;
}
