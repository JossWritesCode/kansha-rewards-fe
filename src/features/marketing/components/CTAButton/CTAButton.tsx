import { useNavigate } from 'react-router-dom';

interface CTAButtonProps {
  text: string;
  to?: string;
}

function CTAButton({ text, to = '/' }: CTAButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-11 w-48 items-center justify-center rounded-lg bg-brand-busyBerry px-6 py-3 text-xl tracking-wider text-brand-white transition hover:bg-brand-busyBerryDark hover:shadow-md lg:px-8 lg:py-4"
    >
      {text}
    </button>
  );
}

export default CTAButton;
