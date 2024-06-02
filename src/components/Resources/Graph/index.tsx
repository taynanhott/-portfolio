"use client"

import React from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
    components: {
        options: {
            chart: {
                id: "area" | "line" | "donut" | "bar" | "pie" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined,
                foreColor?: string
            },
            xaxis?: {
                categories: string[]
            },
            labels?: string[],
            colors?: string[],
            legend?: {
                position: "bottom" | "left" | "right" | "top" | undefined
            },
            dataLabels?: {
                enabled?: boolean,
                style?: {
                    colors: string[]
                }
            },
            stroke?: {
                colors: string[]
            },
            fill?: {
                opacity?: number,
                colors?: string[]
            },
            plotOptions?: {
                polarArea: {
                    rings: {
                        strokeWidth: number,
                        strokeColor: string,
                    },
                    spokes: {
                        strokeWidth: number,
                    },
                },
            },
        },
        series: number[] | {
            name: string,
            data: number[]
        }[],
        height?: number
    }[],
}

function Graph({ components }: Props) {
    return (
        <>
            {components.map(component => (
                <Chart
                    key={component.options.chart.id}
                    className={``}
                    options={component.options}
                    series={component.series}
                    type={component.options.chart.id}
                    height={component.height}
                />
            ))}
        </>
    )
}

export default Graph;