'use client';
import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
	Code,
	Globe,
	Layers,
	UserPlus,
	Users,
	FileText,
	Shield,
	RotateCcw,
	Leaf,
	HelpCircle,
	BarChart,
	Plug,
	TrendingUp,
	CreditCard,
	Building2,
	Headphones,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-full md:border md:transition-all md:ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:px-6 md:transition-all md:ease-out',
					{
						'md:px-4': scrolled,
					},
				)}
			>
				<div className="flex items-center gap-2 md:gap-5 min-w-0 flex-1">
					<Link href="/" className="hover:bg-accent rounded-md p-2 shrink-0">
						<span className="text-xl font-semibold font-heading text-foreground">CrimsonFX</span>
					</Link>
					<NavigationMenu className="hidden md:flex min-w-0 flex-1">
						<NavigationMenuList className="gap-1">
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Platforms</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-full md:w-[600px] grid-cols-1 md:grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{platformLinks.map((item, i) => (
											<ListItem key={i} {...item} />
										))}
									</ul>
									<div className="p-2">
										<p className="text-muted-foreground text-sm">
											Interested?{' '}
											<a href="/register" className="text-foreground font-medium hover:underline">
												Start Trading
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Markets</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-full md:w-[600px] grid-cols-1 md:grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{marketLinks.map((item, i) => (
											<ListItem key={i} {...item} />
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Company</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
									<div className="grid w-full md:w-[600px] grid-cols-1 md:grid-cols-2 gap-2">
										<ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
											{companyLinks.map((item, i) => (
												<ListItem key={i} {...item} />
											))}
										</ul>
										<ul className="space-y-2 p-3">
											{companyLinks2.map((item, i) => (
												<li key={i} className="w-full">
													<Link
														href={item.href}
														className="flex p-2 hover:bg-accent flex-row rounded-md items-center gap-x-2 w-full"
													>
														<item.icon className="text-foreground size-4 shrink-0" />
														<span className="font-medium">{item.title}</span>
													</Link>
												</li>
											))}
										</ul>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="/account-types" className="hover:bg-accent rounded-md p-2 px-4">
										Account Types
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="hidden items-center gap-2 md:flex shrink-0">
					<Button variant="outline" className="rounded-full" asChild>
						<Link href="/login">Sign In</Link>
					</Button>
					<Button className="rounded-full" asChild>
						<Link href="/register">Get Started</Link>
					</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				<div className="flex w-full flex-col gap-y-2">
					<span className="text-sm font-medium px-2">Platforms</span>
					{platformLinks.map((link) => (
						<ListItem key={link.title} {...link} />
					))}
					<span className="text-sm font-medium mt-4 px-2">Markets</span>
					{marketLinks.map((link) => (
						<ListItem key={link.title} {...link} />
					))}
					<span className="text-sm font-medium mt-4 px-2">Company</span>
					{companyLinks.map((link) => (
						<ListItem key={link.title} {...link} />
					))}
					{companyLinks2.map((link) => (
						<ListItem key={link.title} {...link} />
					))}
					<Link href="/account-types" className={cn(buttonVariants({ variant: 'ghost', className: 'justify-start w-full' }))}>
						Account Types
					</Link>
				</div>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent rounded-full" asChild>
						<Link href="/login">Sign In</Link>
					</Button>
					<Button className="w-full rounded-full" asChild>
						<Link href="/register">Get Started</Link>
					</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
}: LinkItem & { className?: string }) {
	if (!Icon) {
		console.error('Icon is undefined for:', title);
		return null;
	}

	return (
		<li>
			<Link
				href={href}
				className={cn('w-full flex flex-row gap-x-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2', className)}
			>
				<div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm shrink-0">
					<Icon className="text-foreground size-5" />
				</div>
				<div className="flex flex-col items-start justify-center min-w-0">
					<span className="font-medium">{title}</span>
					{description && <span className="text-muted-foreground text-xs">{description}</span>}
				</div>
			</Link>
		</li>
	);
}

const platformLinks: LinkItem[] = [
	{
		title: 'Trading Platforms',
		href: '/platforms',
		description: 'MT4, MT5, and WebTrader platforms',
		icon: Layers,
	},
	{
		title: 'Account Types',
		href: '/account-types',
		description: 'Choose the account that fits your needs',
		icon: CreditCard,
	},
	{
		title: 'Market Analysis',
		href: '/markets',
		description: 'Real-time market insights and tools',
		icon: BarChart,
	},
	{
		title: 'API Trading',
		href: '#',
		description: 'Build custom trading integrations',
		icon: Code,
	},
	{
		title: 'Mobile Trading',
		href: '#',
		description: 'Trade on the go with our mobile apps',
		icon: Plug,
	},
	{
		title: 'Copy Trading',
		href: '#',
		description: 'Follow successful traders automatically',
		icon: UserPlus,
	},
];

const marketLinks: LinkItem[] = [
	{
		title: 'Forex',
		href: '/markets',
		description: 'Trade major and exotic currency pairs',
		icon: Globe,
	},
	{
		title: 'Indices',
		href: '/markets',
		description: 'Trade global stock market indices',
		icon: TrendingUp,
	},
	{
		title: 'Commodities',
		href: '/markets',
		description: 'Gold, oil, and other commodities',
		icon: Leaf,
	},
	{
		title: 'Cryptocurrencies',
		href: '/markets',
		description: 'Bitcoin, Ethereum, and more',
		icon: Layers,
	},
	{
		title: 'Stocks',
		href: '/markets',
		description: 'Trade shares of major companies',
		icon: Building2,
	},
	{
		title: 'Market Research',
		href: '/markets',
		description: 'Daily analysis and market updates',
		icon: BarChart,
	},
];

const companyLinks: LinkItem[] = [
	{
		title: 'About Us',
		href: '/about',
		description: 'Learn more about our story and team',
		icon: Users,
	},
	{
		title: 'Partners',
		href: '/partners',
		description: 'Join our partnership program',
		icon: Users,
	},
	{
		title: 'Help Center',
		href: '/help',
		description: 'Get support and find answers',
		icon: Headphones,
	},
];

const companyLinks2: LinkItem[] = [
	{
		title: 'Terms of Service',
		href: '/legal/terms',
		icon: FileText,
	},
	{
		title: 'Privacy Policy',
		href: '/legal/privacy',
		icon: Shield,
	},
	{
		title: 'AML Policy',
		href: '/legal/aml',
		icon: RotateCcw,
	},
	{
		title: 'Risk Disclosure',
		href: '/legal/risk-disclosure',
		icon: HelpCircle,
	},
];

