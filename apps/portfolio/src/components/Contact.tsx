import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiX, SiYoutube } from '@icons-pack/react-simple-icons';
import { Link } from '@chadlefort/ui';

export const Contact: React.FC = () => {
  return (
    <div className="flex justify-center p-6">
      <Link animated href="mailto:chadlefort@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail className="mx-4 size-5" />
      </Link>

      <Link animated href="https://github.com/ChadLefort" target="_blank" rel="noopener noreferrer">
        <SiGithub className="mx-4 size-5" />
      </Link>

      <Link animated href="https://www.linkedin.com/in/chadlefort" target="_blank" rel="noopener noreferrer">
        <SiLinkedin className="mx-4 size-5" />
      </Link>

      <Link animated href="https://x.com/ChadLefort" target="_blank" rel="noopener noreferrer">
        <SiX className="mx-4 size-5" />
      </Link>

      <Link animated href="https://instagram.com/cl_skate" target="_blank" rel="noopener noreferrer">
        <SiInstagram className="mx-4 size-5" />
      </Link>

      <Link animated href="https://www.youtube.com/chadlefort" target="_blank" rel="noopener noreferrer">
        <SiYoutube className="mx-4 size-5" />
      </Link>
    </div>
  );
};
