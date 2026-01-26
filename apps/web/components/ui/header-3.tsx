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
	Layers,
	Users,
	FileText,
	BarChart,
	CreditCard,
	Headphones,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

const platformLinks: LinkItem[] = [
	{
		title: 'Lock It Trade',
		href: '/platforms/lock-it-trade',
		description: 'Premier trading platform for precision',
		icon: Layers,
	},
	{
		title: 'TradeLocker',
		href: '/platforms/tradelocker',
		description: 'Modern, intuitive trading platform',
		icon: Layers,
	},
	{
		title: 'AI Trading Journal',
		href: '/ai-trading-journal',
		description: 'Analyze your performance with AI',
		icon: BarChart,
	},
];

const tradingLinks: LinkItem[] = [
	{
		title: 'Account Types',
		href: '/account-types',
		description: 'Tailored accounts for every trader',
		icon: CreditCard,
	},
	{
		title: 'Instruments',
		href: '/markets',
		description: 'Forex, Indices, Crypto & more',
		icon: BarChart,
	},
];

const companyLinks: LinkItem[] = [
	{
		title: 'About Us',
		href: '/about',
		description: 'Learn more about our story',
		icon: Users,
	},
	{
		title: 'Legal Documents',
		href: '/legal',
		description: 'Regulatory information',
		icon: FileText,
	},
	{
		title: 'Contact Us',
		href: '/contact',
		description: 'Get in touch support',
		icon: Headphones,
	},
];

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
				'sticky z-50 mx-auto w-full max-w-5xl transition-all duration-300',
				scrolled
					? 'bg-background/80 border border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:rounded-full md:shadow-lg top-0'
					: 'bg-transparent border-transparent top-0'
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
					<Link
						href="/"
						className={cn(
							"flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0 transition-all duration-300",
							scrolled ? "mr-8" : "mr-14"
						)}
					>
						<div className="relative overflow-hidden group">
							<img src="/logo.png" alt="Restro FX" className="h-8 w-auto object-contain relative z-10" />
							{/* Mirror Glow Effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer z-20 pointer-events-none" />
						</div>
						<span className="text-xl font-bold tracking-tight text-foreground font-heading whitespace-nowrap">Restro FX</span>
					</Link>
					<NavigationMenu className="hidden lg:flex min-w-0 flex-1 pl-4">
						<NavigationMenuList className={cn("transition-all duration-300", scrolled ? "gap-2" : "gap-4")}>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent whitespace-nowrap px-2">Platforms</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-full md:w-[700px] grid-cols-1 md:grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{platformLinks.map((item, i) => (
											<ListItem key={i} {...item} />
										))}
									</ul>
									<div className="p-2">
										<p className="text-muted-foreground text-sm">
											Interested?{' '}
											<a href="/register" className="text-red-500 font-medium hover:underline">
												Start Trading
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent whitespace-nowrap px-2">Trading</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-full md:w-[700px] grid-cols-1 md:grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{tradingLinks.map((item, i) => (
											<ListItem key={i} {...item} />
										))}
									</ul>
									<div className="p-2 border-t mt-1">
										<p className="text-muted-foreground text-sm">
											Interested?{' '}
											<a href="/register" className="text-red-500 font-medium hover:underline">
												Start Trading
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent whitespace-nowrap px-2">Company</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-full md:w-[700px] grid-cols-1 md:grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{companyLinks.map((item, i) => (
											<ListItem key={i} {...item} />
										))}
									</ul>
									<div className="p-2 border-t mt-1">
										<p className="text-muted-foreground text-sm">
											Interested?{' '}
											<a href="/register" className="text-red-500 font-medium hover:underline">
												Start Trading
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink asChild>
									<Link href="/affiliate-program" className="hover:bg-accent rounded-md p-2 px-2 whitespace-nowrap text-sm font-medium">
										Affiliate Program
									</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className={cn(
					"hidden items-center lg:flex shrink-0 transition-all duration-300",
					scrolled ? "gap-2 pl-12" : "gap-4"
				)}>
					<Button variant="outline" className="rounded-xl h-9 px-4" asChild>
						<Link href="/login">Sign In</Link>
					</Button>
					<Button className="rounded-xl h-9 px-4" asChild>
						<Link href="/register">Get Started</Link>
					</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				<div className="flex w-full flex-col gap-y-4">
					<div className="flex flex-col gap-y-2">
						<span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 px-2">Platforms</span>
						<ul className="flex flex-col gap-1 list-none p-0 m-0">
							{platformLinks.map((link) => (
								<ListItem key={link.title} {...link} />
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-y-2">
						<span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 px-2">Trading</span>
						<ul className="flex flex-col gap-1 list-none p-0 m-0">
							{tradingLinks.map((link) => (
								<ListItem key={link.title} {...link} />
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-y-2">
						<span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 px-2">Company</span>
						<ul className="flex flex-col gap-1 list-none p-0 m-0">
							{companyLinks.map((link) => (
								<ListItem key={link.title} {...link} />
							))}
						</ul>
					</div>

					<Link href="/affiliate-program" className={cn(buttonVariants({ variant: 'ghost', className: 'justify-start w-full px-2 font-semibold' }))}>
						Affiliate Program
					</Link>
				</div>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent rounded-xl" asChild>
						<Link href="/login">Sign In</Link>
					</Button>
					<Button className="w-full rounded-xl" asChild>
						<Link href="/register">Get Started</Link>
					</Button>
				</div>
			</MobileMenu>
		</header >
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
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y lg:hidden',
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
		<li className="list-none">
			<Link
				href={href}
				className={cn('w-full flex flex-row gap-x-3 hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-xl p-2 transition-colors', className)}
			>
				<div className="bg-muted/50 flex aspect-square size-10 items-center justify-center rounded-lg border shadow-sm shrink-0">
					<Icon className="text-primary size-5" />
				</div>
				<div className="flex flex-col items-start justify-center min-w-0">
					<span className="font-semibold text-sm leading-none mb-1">{title}</span>
					{description && <span className="text-muted-foreground text-[11px] leading-tight line-clamp-1">{description}</span>}
				</div>
			</Link>
		</li>
	);
}




