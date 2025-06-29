import { useState } from "react";
import { useCountries } from "./useCountries";
import { useCubeData } from "./useCubeData";

export function useDashboardData() {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedMeasure, setSelectedMeasure] = useState("");

    const { countries, isLoading: loadingCountries } = useCountries();
    const { data, isLoading: loadingCube } = useCubeData(
        selectedCountry,
        selectedMeasure
    );

    return {
        countries,
        selectedCountry,
        setSelectedCountry,
        selectedMeasure,
        setSelectedMeasure,
        data,
        loading: loadingCountries || loadingCube,
    };
}
