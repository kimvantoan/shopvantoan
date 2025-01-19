
export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("vi-VN", options).format(date);
  
  return formattedDate; 
}