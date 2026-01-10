import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@crimsonfx/ui";
import { Button } from "@crimsonfx/ui";
import Link from "next/link";
import type { AccountType } from "@crimsonfx/types";

const accountTypes: AccountType[] = [
  {
    id: "bonus",
    name: "Bonus Account",
    spread: "From 1.2 pips",
    commission: "No commission",
    leverage: "Up to 1:500",
    executionType: "Market",
    minimumDeposit: "$100",
  },
  {
    id: "ecn-raw",
    name: "ECN Raw",
    spread: "From 0.0 pips",
    commission: "$3.5 per lot",
    leverage: "Up to 1:500",
    executionType: "ECN",
    minimumDeposit: "$500",
    popular: true,
  },
  {
    id: "standard",
    name: "Standard Account",
    spread: "From 1.5 pips",
    commission: "No commission",
    leverage: "Up to 1:500",
    executionType: "Market",
    minimumDeposit: "$100",
  },
];

export default function AccountTypesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-foreground mb-6">
                Account Types
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select the account type that best fits your trading style and
                experience level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {accountTypes.map((account) => (
                <Card
                  key={account.id}
                  className={account.popular ? "border-primary border-2 relative" : ""}
                >
                  {account.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{account.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Spread:</span>
                        <span className="font-medium">{account.spread}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Commission:</span>
                        <span className="font-medium">{account.commission}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Leverage:</span>
                        <span className="font-medium">{account.leverage}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-muted-foreground">Execution:</span>
                        <span className="font-medium">{account.executionType}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground">Min. Deposit:</span>
                        <span className="font-medium">{account.minimumDeposit}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/register?account=${account.id}`}>
                        Open Account
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>Account Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Feature</th>
                        {accountTypes.map((account) => (
                          <th key={account.id} className="text-center py-3 px-4 font-semibold">
                            {account.name}
                            {account.popular && (
                              <span className="ml-2 text-primary text-xs">(Popular)</span>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Minimum Deposit</td>
                        {accountTypes.map((account) => (
                          <td key={account.id} className="text-center py-3 px-4">
                            {account.minimumDeposit}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Spreads</td>
                        {accountTypes.map((account) => (
                          <td key={account.id} className="text-center py-3 px-4">
                            {account.spread}
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Commission</td>
                        {accountTypes.map((account) => (
                          <td key={account.id} className="text-center py-3 px-4">
                            {account.commission}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Leverage</td>
                        {accountTypes.map((account) => (
                          <td key={account.id} className="text-center py-3 px-4">
                            {account.leverage}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

