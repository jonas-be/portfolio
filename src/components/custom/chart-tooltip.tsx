import {customFormatterForChart} from "@/util/humanFormat";

type ChartTooltipProps = {
    active: any
    payload: any
    index: string
    dataKeys: string[]
    colors?: string[]
    customFormatter?: (value: any) => string
}
export default function ChartTooltip(
    {
        active,
        payload,
        index,
        dataKeys,
        colors,
        customFormatter = customFormatterForChart
    }: ChartTooltipProps) {

    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <p className="text-xs text-center font-semibold text-foreground">
                    {payload[0].payload[index]}
                </p>

                <ul className="mt-1" style={{columnCount: 2}}>
                    {dataKeys.map((key, i) =>
                        <li key={i}
                            className="h-8 flex items-center text-xs text-muted-foreground flex items-center">
                            <div
                                className={(!colors || !colors[i] ? "bg-primary" : "") + " rounded-full w-2 h-2 mr-1"}
                                style={{backgroundColor: (!colors || !colors[i] ? "" : colors[i])}}/>
                            {key}
                        </li>
                    )}

                    {payload.map((item: any, i: number) =>
                        <li key={i} className="h-8 flex items-center text-sm font-bold text-foreground">
                            {typeof item.value !== 'number' || !customFormatter ? // @ts-ignore
                                item.value : customFormatter(item.value, 2)}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
    return null
}