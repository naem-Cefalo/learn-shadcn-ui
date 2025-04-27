import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Heading1 } from '@/components/ui/Heading1';
import hero from '@/public/hero.jpg';
import Image from 'next/image';

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="mb-3 flex">
    <span className="inline-block mr-2.5">✨</span>
    <span className=" inline-block">{children}</span>
  </li>
);

export default function Home() {
  return (
    <Container className="flex lg:flex-row flex-col-reverse items-center lg:h-[calc(100vh-12rem)]">
      <div className="lg:w-6/12 w-full">
        <Heading1 className="text-center lg:text-left">
          Want to Turn Social Media Into a Profitable Career?
        </Heading1>
        <Heading1 className="text-secondary text-shadow-primary text-center lg:text-left">
          Discover your way to success with Fametonic:
        </Heading1>
        <ul className="list-none font-semibold mt-4 lg:mb-8">
          <ListItem>
            Start growing your influence right away—no waiting required!
          </ListItem>
          <ListItem>
            Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </ListItem>
          <ListItem>Use a Personal AI Worker to boost your content </ListItem>
          <ListItem>
            Learn from expert-led courses designed for aspiring influencers
          </ListItem>
        </ul>
        <div className="flex lg:flex-col flex-col-reverse justify-center items-center lg:items-start">
          <div className="md:w-5/8 w-full lg:m-0 my-5">
            <Button size="lg" className="w-full" variant="default">
              GET STARTED <span className="text-xs">{'⮀'}</span>
            </Button>
            <p className="text-xs text-center">
              1-minute quiz for personalized Insights
            </p>
          </div>
          <div className="text-center lg:text-left lg:w-full w-10/12 my-3.5">
            <p className="text-xs lg:mt-8">
              By clicking &quot;Get Started&quot;, you agree with Terms and
              Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="text-[10px] mt-2.5">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-7/12 w-full">
        <Image src={hero} className=" object-fill" alt="hero" />
      </div>
    </Container>
  );
}
