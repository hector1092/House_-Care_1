import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import BookingDialog from "./BookingDialog";

const ContactButtons = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 flex flex-row justify-center gap-2 z-50 w-full px-4" dir="ltr">
        <Button
          asChild
          className="bg-[#25D366] hover:bg-[#128C7E] rounded-md w-full h-14 p-0 shadow-lg hover:scale-105 transition-all duration-300 flex-1"
        >
          <a
            href="https://wa.me/01113939319"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
          >
            <svg
              className="h-6 w-6 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </Button>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 rounded-md w-full h-14 p-0 shadow-lg hover:scale-105 transition-all duration-300 flex-1"
        >
          <a href="tel:01113939319" aria-label="اتصل بنا">
            <Phone className="h-6 w-6 mx-auto" />
          </a>
        </Button>
        <Button
          onClick={() => setShowDialog(true)}
          className="bg-secondary hover:bg-secondary/90 rounded-md w-full h-14 p-0 shadow-lg hover:scale-105 transition-all duration-300 flex-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 mx-auto"
          >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
          </svg>
        </Button>
      </div>
      <BookingDialog open={showDialog} onOpenChange={setShowDialog} />
    </>
  );
};

export default ContactButtons;