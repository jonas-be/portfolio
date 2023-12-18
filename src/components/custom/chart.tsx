"use client"
import {useTheme} from "next-themes"
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import {useEffect, useState} from "react";
import {customFormatterForChart} from "@/util/humanFormat";
import {ContentType} from "recharts/types/component/Tooltip";
import {ValueType} from "recharts/types/component/DefaultTooltipContent";
import {CurveType} from "recharts/types/shape/Curve";
import ChartTooltip from "@/components/custom/chart-tooltip";

type ChartAreaProps = {
    data: any[]
    index: string
    dataKeys: string[]
    colors?: string[]
    opacities?: number[]
    hideGradients?: boolean[]
    customFormatter?: (value: any) => string
    curveType?: CurveType
    strokeDashArrays?: string[]
    lineWidth?: number
    yAxisWidth?: number
    yAxisDisabled?: boolean
    xAxisDisabled?: boolean
    gridDisabled?: boolean
    startEndOnly?: boolean
    tooltipDisabled?: boolean
    tooltipContent?: ContentType<ValueType, any>;
    className?: string
}

export function Chart(
    {
        data,
        index,
        dataKeys,
        colors,
        opacities,
        hideGradients,
        customFormatter = customFormatterForChart,
        curveType = "monotone",
        strokeDashArrays,
        lineWidth = 3,
        yAxisWidth = 40,
        yAxisDisabled,
        xAxisDisabled,
        gridDisabled,
        startEndOnly,
        tooltipDisabled,
        tooltipContent,
        className
    }: ChartAreaProps) {
    const root = document.documentElement;
    const {resolvedTheme} = useTheme()
    const [primaryColor, setPrimaryColor] = useState("")

    useEffect(() => {
        setTimeout(() => { // timeout is needed for theme change
            const styles = getComputedStyle(root)
            setPrimaryColor(styles.getPropertyValue('--primary'))
        }, 0)
    }, [resolvedTheme]);

    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 6,
                        bottom: 0,
                    }}>

                    {gridDisabled ? '' :
                        <CartesianGrid
                            className="stroke-border stroke-1"
                            horizontal={true}
                            vertical={false}
                        />
                    }
                    {xAxisDisabled ? '' :
                        <XAxis
                            dataKey={index}
                            tick={{transform: "translate(0, 6)"}}
                            ticks={startEndOnly ? [data[0][index], data[data.length - 1][index]] : undefined}
                            fill=""
                            stroke=""
                            className="text-xs font-light fill-muted-foreground"
                            interval="preserveStartEnd"
                            padding={{left: 10, right: 10}}
                            minTickGap={8}
                        />
                    }
                    {yAxisDisabled ? '' :
                        <YAxis
                            width={yAxisWidth}
                            type="number"
                            tick={{transform: "translate(-3, 0)"}}
                            fill=""
                            stroke=""
                            className="text-xs font-light fill-muted-foreground"
                            tickFormatter={customFormatter}
                        />
                    }
                    {tooltipDisabled ? '' :
                        <Tooltip
                            content={tooltipContent ? tooltipContent :
                                ({active, payload}) =>
                                    <ChartTooltip active={active} payload={payload} index={index} dataKeys={dataKeys}
                                                  colors={colors} customFormatter={customFormatter}/>
                            }
                        />
                    }

                    <defs>
                        {dataKeys.map((key, i) =>
                            <linearGradient
                                key={i}
                                id={`color${key}`}
                                className={
                                    (!(hideGradients) || !hideGradients[i] ? "" : "hidden ") +
                                    (!colors || colors[i] === "" ? "text-primary" : "")
                                }
                                color={colors && colors[i] !== "" ? colors[i] : ""}
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="currentColor"
                                    stopOpacity={
                                        0.4
                                    }
                                />
                                <stop offset="95%" stopColor="currentColor" stopOpacity={0}/>
                            </linearGradient>
                        )}
                    </defs>

                    {dataKeys.map((key, i) =>
                        <Area
                            key={i}
                            type={curveType}
                            dataKey={key}
                            fill={`url(#color${key})`}
                            opacity={opacities && opacities[i] ? opacities[i] : 1}
                            strokeWidth={lineWidth}
                            strokeDasharray={!strokeDashArrays || !strokeDashArrays[i] ? "" : strokeDashArrays[i]}
                            dot={false}
                            activeDot={{
                                r: 8,
                                className: "fill-background " + (!(colors) || colors[i] === "" ? "stroke-primary" : ""),
                                stroke: colors && colors[i] !== "" ? colors[i] : ""
                            }}
                            stroke={colors && colors[i] !== "" ? colors[i] : `var(--theme-primary)`}
                            style={{
                                "--theme-primary": `hsl(${primaryColor})`,
                            } as React.CSSProperties}
                        />
                    )}

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
