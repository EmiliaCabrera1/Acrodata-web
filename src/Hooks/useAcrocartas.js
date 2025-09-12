import { useSelector } from "react-redux";

export default function useAcrocartas() {
    const data = useSelector((state) => state.data.value);
    return data || [];
} 