import { useSelector } from "react-redux";

export default function useAcrocartas() {
  const cards = useSelector((state) => state.data?.value?.cards);
  return cards || [];
}
