import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface ConhecimentoProps {
  title: string;
  icon: ReactNode;
}
export default function ConhecimentoItem({ title, icon }: ConhecimentoProps) {
  return (
    <ConhecimentoContainer data-aos="zoom-in-down">
      <p>
        {title}
        {icon}
      </p>
    </ConhecimentoContainer>
  );
}
