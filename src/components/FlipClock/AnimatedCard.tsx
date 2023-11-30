import React from 'react';

interface IAnimatedCard {
  animation: string;
  digit: string;
}

// 애니메이션이 입혀진 카드 컴포넌트
const AnimatedCard = ({ animation, digit }: IAnimatedCard) => {
  return (
    <div>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;
