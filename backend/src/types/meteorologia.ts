export type DadosMeteorologicos = {
    timezone: string,
    current: {
        time: string,
        temperature_2m: number,
        relative_humidity_2m: number,
        apparent_temperature: number
    }
    daily: {
        time: string[],
        temperature_2m_max: number[],
        temperature_2m_min: number[],
        precipitation_probability_max: number[]

    }
}