import { SecondaryNavItem } from '@/types/nav.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SecondaryNavProps {
	items: SecondaryNavItem[];
}

export default function SecondaryNav({ items }: SecondaryNavProps) {
	const pathname = usePathname();

	return (
		<nav className='hidden lg:flex gap-6 mt-10 w-full px-10 min-h-9'>
			{items.map(
				(item, i) =>
					item.href && (
						<Link href={item.href} key={i}>
							<span
								className={`text-sm font-medium pb-3 capitalize ${
									pathname.includes(item.href)
										? 'border-[#4F00A3] dark:border-[#d5baf0] text-[#4F00A3] dark:text-[#d5baf0] border-b-4'
										: ''
								} `}
							>
								{item.title}
							</span>
						</Link>
					)
			)}
		</nav>
	);
}
