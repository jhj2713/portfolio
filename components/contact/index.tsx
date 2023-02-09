import { ISwipeMode } from '@/constant/swipe-mode';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './index.style';

export default function Contact({ isUnmount }: { isUnmount: ISwipeMode }) {
  return (
    <Container isUnmount={isUnmount}>
      <div className="contact">
        <div className="method">
          <Image alt="contact email" priority src="/image/contact/email.svg" width={30} height={30} />
          <p>Email</p>
        </div>
        <div className="value">2713jhj@ewhain.net</div>
      </div>
      <div className="contact">
        <div className="method">
          <Image alt="contact telephone" priority src="/image/contact/telephone.svg" width={30} height={30} />
          <p>Telephone</p>
        </div>
        <div className="value">010-3843-6999</div>
      </div>
      <div className="contact">
        <div className="method">
          <Image alt="contact blog" priority src="/image/contact/blog.svg" width={30} height={30} />
          <p>Blog</p>
        </div>
        <Link className="value" href="https://velog.io/@krkorklo58" target="_blank">
          https://velog.io/@krkorklo58
        </Link>
      </div>
      <div className="contact">
        <div className="method">
          <Image alt="contact github" priority src="/image/contact/github.svg" width={26} height={26} />
          <p>Github</p>
        </div>
        <Link className="value" href="https://github.com/jhj2713" target="_blank">
          https://github.com/jhj2713
        </Link>
      </div>
    </Container>
  );
}
