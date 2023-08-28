import { LoadingContext } from "@/contexts/Loading";
import { useContext } from "react";
import { Loading } from "./Loading";
import { iChildrenProps } from "@/@types/context";

interface IPageLoadingProps extends iChildrenProps {}

export default function PageLoading({ children }: IPageLoadingProps) {
  const { loading } = useContext(LoadingContext);

  return loading ? <Loading /> : children;
}
