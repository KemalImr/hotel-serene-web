
import { BookingStep } from "@/pages/Booking";
import { CalendarDays, BedDouble, User } from "lucide-react";

interface BookingStepsProps {
  currentStep: BookingStep;
}

const BookingSteps = ({ currentStep }: BookingStepsProps) => {
  const steps = [
    {
      id: "dates",
      name: "Datum wählen",
      icon: CalendarDays,
    },
    {
      id: "rooms",
      name: "Zimmer wählen",
      icon: BedDouble,
    },
    {
      id: "information",
      name: "Gästedaten",
      icon: User,
    },
  ];

  return (
    <div className="w-full">
      <nav aria-label="Progress">
        <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = 
              (step.id === "dates" && currentStep !== "dates") || 
              (step.id === "rooms" && currentStep === "information");
              
            return (
              <li key={step.id} className="md:flex-1">
                <div 
                  className={`flex flex-col border-l-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                    isActive
                      ? "border-gold-600"
                      : isCompleted
                      ? "border-green-600"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-gold-100 text-gold-600"
                        : isCompleted
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span 
                      className={`ml-3 text-sm font-medium ${
                        isActive
                          ? "text-gold-600"
                          : isCompleted
                          ? "text-green-600"
                          : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default BookingSteps;
