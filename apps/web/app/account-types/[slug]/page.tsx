import { AccountDetailClient } from "./client-page";

export function generateStaticParams() {
    return [
        { slug: "raw" },
        { slug: "ecn-standard-default" },
        { slug: "powerup" },
    ];
}

export default function AccountDetailPage({ params }: { params: { slug: string } }) {
    return <AccountDetailClient slug={params.slug} />;
}
