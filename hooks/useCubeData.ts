import useSWR from "swr";
import { message } from "antd";
import { gqlClient } from "../graphql/client";
import { GET_CUBE_DATA } from "../graphql/queries/cubeData";
import {
    GetCubeDataQuery,
    GetCubeDataQueryVariables,
} from "../graphql/generated/graphql";

const fetcher = <TData, TVariables>(query: string, variables: TVariables) =>
    gqlClient.request<TData, TVariables>(query, variables);

export function useCubeData(country: string, measure: string) {
    const variables: GetCubeDataQueryVariables | null =
        country && measure
            ? {
                  country: country.toLowerCase(),
                  measure,
              }
            : null;

    const { data, error, isLoading } = useSWR<GetCubeDataQuery>(
        variables ? ["GET_CUBE_DATA", variables] : null,
        ([_, vars]) =>
            fetcher<GetCubeDataQuery, GetCubeDataQueryVariables>(
                GET_CUBE_DATA,
                vars
            )
    );

    if (error)
        message.error("Failed to load data for the selected combination.");

    return {
        data: data?.cube_cube_M6Lh5is0FtqUhZ ?? [],
        isLoading,
    };
}
