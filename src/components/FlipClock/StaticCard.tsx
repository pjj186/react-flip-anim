import React from 'react';

interface IStaticCard {
  position: string;
  digit: string;
}

// 정적인 카드
const StaticCard = ({ position, digit }: IStaticCard) => {
  return (
    <div>
      <span>{digit}</span>
    </div>
  );
};
