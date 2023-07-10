import Card from "@/components/card/card";
import CardHead from "@/components/card/cardhead";
import Link from "next/link";

export default function Home() {
    return (
      <main className="flex flex-row container mx-auto py-5">
        <Card>
            <CardHead className="text-center">
                HTML
            </CardHead>
            <div>
              <Link href={'/courses/html'}><button className="button">ابداء</button></Link>
            </div>
        </Card>
      </main>
    )
  }