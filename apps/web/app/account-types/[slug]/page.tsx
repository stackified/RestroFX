import { AccountDetailClient } from "./client-page";

export function generateStaticParams() {
    return [
        { slug: "powerup" },
        { slug: "ecn-raw" },
        { slug: "standard" },
    ];
}

export default function AccountDetailPage({ params }: { params: { slug: string } }) {
    return <AccountDetailClient slug={params.slug} />;
}
