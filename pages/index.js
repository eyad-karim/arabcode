import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-5">
      <div className="bg-white p-5 rounded-lg flex flex-col gap-5 md:flex-col lg:flex-row sm:flex-col">
        <Image src={"/media/hero-image.png"} width={1024/2} height={618/2} />
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="text-3xl font-bold text-red">اهلاً بكم في موقع عرب كود</h1>
          <p className="text-2xl">عرب كود هي منصة تعليمية تقدم محتوي باللغة العربية لتعليم البرمجة في انحاء الوطن العربي</p>
          <div className="flex flex-row gap-5">
            <Link href={"/courses"}><button className="button">ابداء التعلم</button></Link>
            <button className="button outlined">نبذة</button>
          </div>
        </div>
      </div>
    </main>
  )
}
