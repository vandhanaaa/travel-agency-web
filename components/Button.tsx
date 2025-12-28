import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${variant} ${full ? 'btn-full' : ''}`}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <span className="btn-text">{title}</span>
    </button>
  );
};

export default Button;
