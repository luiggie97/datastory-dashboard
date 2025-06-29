import useSWR from "swr";
import { message } from "antd";
import { gqlClient } from "../graphql/client";
import { GET_COUNTRIES } from "../graphql/queries/countries";
import { GetCountriesQuery } from "../graphql/generated/graphql";

const fetcher = <T>(query: string) => gqlClient.request<T>(query);

export function useCountries() {
    const { data, error, isLoading } = useSWR<GetCountriesQuery>(
        "GET_COUNTRIES",
        () => fetcher<GetCountriesQuery>(GET_COUNTRIES)
    );

    if (error) message.error("Failed to load countries.");

    return {
        countries: data?.item ?? [],
        isLoading,
    };
}
