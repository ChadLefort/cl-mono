import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiX, SiYoutube } from '@icons-pack/react-simple-icons';
import { Link } from '@chadlefort/ui';

export const Contact: React.FC = () => {
  return (
    <div className="flex justify-center gap-8 p-16">
      <Link animate href="mailto:chadlefort@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className="size-5" />
      </Link>

      <Link animate href="https://github.com/ChadLefort" target="_blank" rel="noopener noreferrer">
        <SiGithub className="size-5" />
      </Link>

      <Link animate href="https://www.linkedin.com/in/chadlefort" target="_blank" rel="noopener noreferrer">
        <SiLinkedin className="size-5" />
      </Link>

      <Link animate href="https://x.com/ChadLefort" target="_blank" rel="noopener noreferrer">
        <SiX className="size-5" />
      </Link>

      <Link animate href="https://instagram.com/cl_skate" target="_blank" rel="noopener noreferrer">
        <SiInstagram className="size-5" />
      </Link>

      <Link animate href="https://www.youtube.com/chadlefort" target="_blank" rel="noopener noreferrer">
        <SiYoutube className="size-5" />
      </Link>
    </div>
  );
};
