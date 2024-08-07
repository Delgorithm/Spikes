import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center h-screen">
			<h1>Les challenges</h1>
			<nav>
				<ul>
					<li>
						<Link href="/dashboard">Dashboard</Link>
					</li>
				</ul>
			</nav>
		</main>
	);
}
