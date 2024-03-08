interface ButtonProps {
  icon: JSX.Element; // New prop for SVG icon
  color: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={"ml-2 p-2 text-black bg-white border border-[#F4F4F4] " + color + " rounded-md"}
    >
      {icon} 
    </button>
  );
};

export default Button;
