/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Summary } from './Summary';

export type WeatherForecast = {
    date?: string;
    temperatureC?: number;
    readonly temperatureF?: number;
    summary?: Summary;
}
