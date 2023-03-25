import Heading from "@/components/ui/heading";
import Section from "@/components/layouts/section";
import Image from "next/image";

export default function Hero() {
    return (
        <Section className="text-center bg-gradient-to-b from-primary-dark to-[#2F2A30]  text-light-text">
            <Image
                src="/images/site/hitesh.png"
                width={280}
                height={280}
                alt="Hitesh Modi"
                className="rounded-full"
            />
            <Heading text="Hi, I&apos;m Hitesh"/>
            <h2 className="max-w-lg font-xl">
                I blog about web development - especially about React framework
                , the Next JS Library, TypeScript and Tailwind CSS
            </h2>
        </Section>
    );
}
