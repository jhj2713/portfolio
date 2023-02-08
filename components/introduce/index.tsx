import { ISwipeMode } from '@/constant/swipe-mode';
import MenuTitle from '../menu-title';
import { Container, ProfileImage } from './index.style';

export default function Introduce({ isUnmount }: { isUnmount: ISwipeMode }) {
  return (
    <Container isUnmount={isUnmount}>
      <ProfileImage alt="profile image" src="/image/profile.jpeg" />
      <div className="contents">
        <MenuTitle title="Growth" />
        <div className="description">
          <p className="highlight">지속 가능한 성장</p> 및 개발에 관심이 많은 프론트엔드 개발자입니다. 반복되는 패턴을
          추상화하고 로직 및 UI를 재사용할 수 있도록 설계하는 작업을 좋아합니다.
          <br />
          <br />
          계속해서 배우고, 성장해나가는 사람이 되겠습니다.
        </div>
      </div>
    </Container>
  );
}
