import { useSelector } from "react-redux";

export default function useClases() {
  const clases = useSelector((state) => state.data?.value?.clases);
  return clases || [];
}
