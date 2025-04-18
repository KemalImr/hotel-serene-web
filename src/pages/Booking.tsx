
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import BookingSteps from "@/components/booking/BookingSteps";
import DateSelection from "@/components/booking/DateSelection";
import RoomSelection from "@/components/booking/RoomSelection";
import GuestInformation from "@/components/booking/GuestInformation";

export type BookingStep = "dates" | "rooms" | "information";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>("dates");
  const [bookingData, setBookingData] = useState({
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    selectedRoom: null as string | null,
    guestData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const handleNextStep = () => {
    if (currentStep === "dates") setCurrentStep("rooms");
    else if (currentStep === "rooms") setCurrentStep("information");
  };

  const handlePreviousStep = () => {
    if (currentStep === "rooms") setCurrentStep("dates");
    else if (currentStep === "information") setCurrentStep("rooms");
  };

  const updateBookingData = (data: Partial<typeof bookingData>) => {
    setBookingData({ ...bookingData, ...data });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case "dates":
        return (
          <DateSelection 
            checkIn={bookingData.checkIn}
            checkOut={bookingData.checkOut}
            onDateChange={(checkIn, checkOut) => updateBookingData({ checkIn, checkOut })}
          />
        );
      case "rooms":
        return (
          <RoomSelection 
            selectedRoom={bookingData.selectedRoom}
            onRoomSelect={(selectedRoom) => updateBookingData({ selectedRoom })}
          />
        );
      case "information":
        return (
          <GuestInformation 
            guestData={bookingData.guestData}
            onGuestDataChange={(guestData) => updateBookingData({ guestData })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50 min-h-[calc(100vh-180px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <BookingSteps currentStep={currentStep} />
            
            <div className="my-8">
              {renderStepContent()}
            </div>
            
            <div className="flex justify-between mt-8">
              {currentStep !== "dates" && (
                <button
                  onClick={handlePreviousStep}
                  className="px-6 py-2 text-hotel-600 border border-hotel-600 rounded hover:bg-gray-50 transition-colors"
                >
                  Zurück
                </button>
              )}
              <div className="flex-grow"></div>
              <button
                onClick={handleNextStep}
                className="px-6 py-2 bg-gold-600 text-white rounded hover:bg-gold-700 transition-colors"
              >
                {currentStep === "information" ? "Buchen" : "Weiter"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
