export default function formatTime(dateString) {
  const date = new Date(dateString);
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formattedTime = new Intl.DateTimeFormat("en-GB", timeOptions).format(
    date
  );
  return formattedTime;
}
