const SeatoPerLogo = ({ color }) => {
  return (
    <svg
      width="140"
      height="65"
      viewBox="0 0 140 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9375 54H25.6875V56.8125C25.6875 62.0208 21.4792 64.625 13.0625 64.625V62.5625C18.8542 62.5625 21.75 60.1875 21.75 55.4375V54H13.0625C4.4375 54 0.125 51.3958 0.125 46.1875V18.1875C0.125 13.1458 4.4375 10.625 13.0625 10.625C21.4792 10.625 25.6875 13.1458 25.6875 18.1875V52.0625H29.9375V54ZM21.75 52.0625V19.6875C21.75 14.8958 18.8542 12.5 13.0625 12.5C7.0625 12.5 4.0625 14.8958 4.0625 19.6875V44.9375C4.0625 49.6875 7.0625 52.0625 13.0625 52.0625H21.75ZM46.3125 3.5625C46.3125 5.6875 45.25 6.75 43.125 6.75C40.9583 6.75 39.875 5.6875 39.875 3.5625C39.875 1.52083 40.9583 0.5 43.125 0.5C45.25 0.5 46.3125 1.52083 46.3125 3.5625ZM39 3.5625C39 5.6875 37.9375 6.75 35.8125 6.75C33.7708 6.75 32.75 5.6875 32.75 3.5625C32.75 1.52083 33.7708 0.5 35.8125 0.5C37.9375 0.5 39 1.52083 39 3.5625ZM45.6875 54H27V52.0625L29.8125 51.9375C35.4375 51.6875 38.25 49.3542 38.25 44.9375V10.625H42.0625V46.3125C42.0625 48.8958 41.0833 50.7708 39.125 51.9375H45.6875V54ZM105.812 54H103.25C95.3333 53.9167 91.375 51.3542 91.375 46.3125V17.375L90.5625 16.5C89.0208 14.7083 87.3125 13.8125 85.4375 13.8125C83.4792 13.8125 81.3542 14.7917 79.0625 16.75L66.125 27.75H71.875C80.5 27.75 84.8125 30.2708 84.8125 35.3125V46.1875C84.8125 51.3958 80.5833 54 72.125 54H59.25C51.2917 53.75 47.3125 51.1875 47.3125 46.3125V10.5H51.3125V44.9375C51.3125 49.3542 54 51.6875 59.375 51.9375C59.375 51.9375 63.625 51.9375 72.125 51.9375C77.9583 51.9375 80.875 49.6042 80.875 44.9375V36.875C80.875 32 77.875 29.5625 71.875 29.5625H61L77.9375 15.375C81.8542 12.125 85.1667 10.5 87.875 10.5C89.75 10.5 91.3333 11.2708 92.625 12.8125L95.3125 16.125V44.9375C95.3125 49.3542 98 51.6875 103.375 51.9375C103.375 51.9375 104.188 51.9375 105.812 51.9375V54ZM139.062 46.1875C139.062 51.3958 134.792 54 126.25 54H109.25V51.9375C109.167 51.9375 110.271 51.9375 112.562 51.9375C118.104 51.8542 120.875 49.5208 120.875 44.9375V10.375H125.125V46.1875C125.125 48.7708 124.146 50.6875 122.188 51.9375H127.562C132.604 51.9375 135.125 49.6458 135.125 45.0625V10.375H139.062V46.1875ZM114.625 54H102.625V52.0625H106.812V10.625H110.812V52.0625H114.625V54Z"
        fill={color || "#EAE7DC"}
      />
    </svg>
  );
};

export default SeatoPerLogo;