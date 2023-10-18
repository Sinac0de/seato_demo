const HamMenuIcon = ({ className }) => {
  return (
    <svg id="hamburger" className={className} viewBox="0 0 60 40">
      <g
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path id="top-line" d="M10,10 L50,10 Z"></path>
        <path id="middle-line" d="M10,20 L50,20 Z"></path>
        <path id="bottom-line" d="M10,30 L50,30 Z"></path>
      </g>
    </svg>
  );
};

export default HamMenuIcon;
