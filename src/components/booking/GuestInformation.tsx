
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

interface GuestData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface GuestInformationProps {
  guestData: GuestData;
  onGuestDataChange: (data: GuestData) => void;
}

const GuestInformation = ({ guestData, onGuestDataChange }: GuestInformationProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
    
    onGuestDataChange({
      ...guestData,
      [name]: value
    });
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.trim() ? "" : "Dieses Feld ist erforderlich";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
          ? "" 
          : "Bitte geben Sie eine gültige E-Mail-Adresse ein";
      case "phone":
        return /^[+\d\s()-]{8,20}$/.test(value) 
          ? "" 
          : "Bitte geben Sie eine gültige Telefonnummer ein";
      default:
        return "";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);
    
    setErrors({
      ...errors,
      [name]: errorMessage
    });
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-serif font-bold text-hotel-800">Ihre Daten</h2>
      
      <p className="text-hotel-600">
        Bitte geben Sie Ihre persönlichen Daten ein, damit wir Ihre Buchung bearbeiten können.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-hotel-700">Vorname</Label>
            <Input
              id="firstName"
              name="firstName"
              value={guestData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ihr Vorname"
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.firstName}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-hotel-700">Nachname</Label>
            <Input
              id="lastName"
              name="lastName"
              value={guestData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ihr Nachname"
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
                <AlertCircle className="h-4 w-4" />
                {errors.lastName}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-hotel-700">E-Mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={guestData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ihre E-Mail-Adresse"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4" />
              {errors.email}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-hotel-700">Telefonnummer</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={guestData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ihre Telefonnummer"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4" />
              {errors.phone}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestInformation;
