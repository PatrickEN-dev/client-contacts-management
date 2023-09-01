import { LoadingContext } from "@/contexts/Loading";
import { useContext } from "react";
import { Loading } from "./Loading";
import { IChildrenProps } from "@/@types/context";

interface IPageLoadingProps extends IChildrenProps {}

export default function PageLoading({ children }: IPageLoadingProps) {
  const { loading } = useContext(LoadingContext);

  return loading ? <Loading /> : children;
}
