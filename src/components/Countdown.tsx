import { differenceInDays, differenceInMinutes, differenceInHours } from "date-fns";

interface CountdownProps {
    date: Date;
}

export function Countdown(props: CountdownProps) {
    function timeLastInHours(date: Date) {
        return differenceInHours(new Date(date), new Date()) - (24 * differenceInDays(new Date(date), new Date()))
    }
      
    function timeLastInMinutes(date: Date) {
        return differenceInMinutes(new Date(date), new Date()) - (1440 * differenceInDays(new Date(date), new Date())) - (timeLastInHours(date) * 60)
    }

    return (
        <>
            <p>{ differenceInDays(new Date(props.date), new Date()) } dias</p>
            <p>{ timeLastInHours(new Date(props.date)) } horas</p>
            <p>{ timeLastInMinutes(new Date(props.date)) } minutos</p>
        </>
    );
}