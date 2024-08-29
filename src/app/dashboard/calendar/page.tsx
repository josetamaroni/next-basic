'use client'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";




export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([]);

    const smallDate = date?.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={ (date) => date.getDay() === 0 || date.getDay() === 6 } //* Sirve para excluir los Domingos (0) y Sabados (6)
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date > new Date()} //* Sirve para excluir los días posteriores a hoy 
            />
            <Calendar
                mode="multiple"
                selected={multipleDate}
                onSelect={setMultipleDate}
                className="rounded-md border"
            />

    <div className="border-b">
        <h1 className="text-3xl">Información</h1>
        <p>{smallDate}</p>
                <pre>{JSON.stringify(multipleDate, null,3) }</pre>
    </div>

        </div>
  );
}