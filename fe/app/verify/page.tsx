"use client";

import { Fetcher } from "@/util/axios";
import { Spinner } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";

const EmailVerificationPage: FunctionComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [message, setMessage] = useState("Hold on a second...");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await Fetcher.post("/email/verify", { code });

        if (res.status.toString().startsWith("2")) {
          setMessage("Your email has been verified!");
          setIsProcessing(false);

          router.push("/");
        }
      } catch (error) {
        console.error(error);
        setMessage("Something went wrong. Please try again later.");
        setIsProcessing(false);
      }
    })();
  }, [code, router]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>{message}</h1>

      {isProcessing && (
        <Spinner aria-label="Processing verification code" className="mt-4" />
      )}
    </div>
  );
};

export default EmailVerificationPage;
