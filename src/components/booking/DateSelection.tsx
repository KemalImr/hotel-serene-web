
import { useState } from "react";
import { format, addDays } from "date-fns";
import { de } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DateSelectionProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onDateChange: (checkIn: Date | null, checkOut: Date | null) => void;
}

const DateSelection = ({ checkIn, checkOut, onDateChange }: DateSelectionProps) => {
  const [dateMode, setDateMode] = useState<"checkIn" | "checkOut">("checkIn");

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;

    if (dateMode === "checkIn") {
      onDateChange(date, checkOut && date < checkOut ? checkOut : addDays(date, 1));
      setDateMode("checkOut");
    } else {
      if (checkIn && date <= checkIn) {
        // Can't select a checkout date before check-in
        onDateChange(checkIn, addDays(checkIn, 1));
      } else {
        onDateChange(checkIn, date);
      }
      setDateMode("checkIn");
    }
  };

  const today = new Date();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif font-bold text-hotel-800">Wählen Sie Ihre Reisedaten</h2>
      
      <p className="text-hotel-600">
        Bitte wählen Sie Ihr An- und Abreisedatum, um verfügbare Zimmer zu sehen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Check-in date picker */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-hotel-700">Anreise</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkIn && "text-muted-foreground"
                )}
                onClick={() => setDateMode("checkIn")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? (
                  format(checkIn, "PPP", { locale: de })
                ) : (
                  <span>Datum wählen</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn || undefined}
                onSelect={handleDateSelect}
                disabled={(date) => date < today}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out date picker */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-hotel-700">Abreise</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOut && "text-muted-foreground"
                )}
                onClick={() => setDateMode("checkOut")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? (
                  format(checkOut, "PPP", { locale: de })
                ) : (
                  <span>Datum wählen</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut || undefined}
                onSelect={handleDateSelect}
                disabled={(date) => checkIn ? date <= checkIn : date <= today}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {checkIn && checkOut && (
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <p className="font-medium text-hotel-800">
            Ausgewählter Zeitraum:
          </p>
          <p className="text-hotel-600">
            {format(checkIn, "PPP", { locale: de })} - {format(checkOut, "PPP", { locale: de })}
          </p>
          <p className="text-sm text-hotel-500 mt-1">
            {Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} Nächte
          </p>
        </div>
      )}
    </div>
  );
};

export default DateSelection;
