import Card from "@/components/card/card";
import CardHead from "@/components/card/cardhead";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <main className="flex flex-row container mx-auto py-5">
        <Card>
            <CardHead>
              <Image src={'/media/courses/html-image.png'} width={312} height={600} />
              <ol className="py-3">
                <li>5 ساعات, 11 دقيقة</li>
                <li>10 دروس</li>
              </ol>
            </CardHead>
            <div>
              <Link className="w-full" href={'/courses/html'}><button className="button w-full">ابداء</button></Link>
            </div>
        </Card>

        <Card>
            <CardHead>
              <Image src={'/media/courses/css-image.png'} width={312} height={600} />
              <ol className="py-3">
                <li>5 ساعات, 5 دقيقة</li>
                <li>12 دروس</li>
              </ol>
            </CardHead>
            <div>
              <Link className="w-full" href={'/courses/css'}><button className="button w-full">ابداء</button></Link>
            </div>
        </Card>

        <Card>
            <CardHead>
              <Image src={'/media/courses/javascript-image.png'} width={312} height={600} />
              <ol className="py-3">
                <li>30 ساعات, 10 دقيقة</li>
                <li>35 دروس</li>
              </ol>
            </CardHead>
            <div>
              <Link className="w-full" href={'/courses/javascript'}><button className="button w-full">ابداء</button></Link>
            </div>
        </Card>
      </main>
    )
  }