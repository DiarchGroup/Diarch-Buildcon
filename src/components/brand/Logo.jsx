import { Link } from 'react-router-dom';
import logoWebp from './diarch-group.webp';

export const Logo = ({ variant = 'light' }) => {
  return (
    <Link to="/" className="flex items-center group">
      <img
        src={logoWebp}
        alt="Diarch Group"
        className="h-7 w-auto object-contain"
        draggable={false}
      />
    </Link>
  );
};
