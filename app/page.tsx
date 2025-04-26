import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Heading1 } from '@/components/ui/Heading1';
import hero from '@/public/hero.jpg';

export default function Home() {
  return (
    <Container className="flex md:flex-row flex-col-reverse">
      <div className="md:w-7/12 w-full lg:mt-20">
        <Heading1>Want to Turn Social Media Into a Profitable Career?</Heading1>
        <Heading1 className="text-secondary text-shadow">
          Discover your way to success with Fametonic:
        </Heading1>
        <ul className=" list-none font-semibold mt-4">
          <li className="mb-3">
            ✨ Start growing your influence right away—no waiting required!
          </li>
          <li className="mb-3">
            ✨ Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </li>
          <li className="mb-3">
            ✨ Use a Personal AI Worker to boost your content{' '}
          </li>
          <li className="mb-3">
            ✨ Learn from expert-led courses designed for aspiring influencers
          </li>
        </ul>
        <Button className="mt-6" variant="default">
          Get Started
        </Button>
      </div>
      <div className="w-6/12">
        <img src={hero.src} className="" alt="hero" />
      </div>
    </Container>
  );
}
