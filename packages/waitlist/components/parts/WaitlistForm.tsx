import React, { useState } from "react";
import axios from "axios";

import Alert from "~/components/ui/Alert";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";

import { useRouter } from "next/router";
import { discordUrl } from "~/constants";

const WaitlistForm: React.FC = () => {
  const router = useRouter();

  const [showAlert, setShowAlert] = useState({
    type: "",
    show: false,
    message: "",
  });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const showAndHideAlertBox = (type: string, message: string) => {
    setShowAlert({
      type,
      show: true,
      message,
    });
    setTimeout(() => {
      setShowAlert({ type: "", show: false, message: "" });
    }, 4000);
  };

  const submitWaitlistForm = async (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    if (!email) return showAndHideAlertBox("error", "Please supply an email.");

    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://getwaitlist.com/api/v1/waitlists/submit",
        {
          api_key: process.env.NEXT_PUBLIC_WAITLIST_API_KEY,
          email,
          referral_link: document.URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data) {
        showAndHideAlertBox("success", "Success!");
        setSuccess(true);
        setLoading(false);
        setEmail("");

        setTimeout(() => {
          router.push(discordUrl);
        }, 4000);
      }
    } catch (err) {
      setLoading(false);
      showAndHideAlertBox("error", "Something went wrong, try again later.");
    }
  };

  return (
    <form
      className="flex items-center justify-center bg-darkGray max-w-md rounded-lg p-2 h-13 mx-auto lg:m-0"
      onSubmit={submitWaitlistForm}
    >
      {success ? (
        <p className="h-11 flex items-center text-successAlert">
          You'll be notified for early access.
        </p>
      ) : (
        <>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            style={{ width: "100%" }}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.preventDefault();
              setEmail(e.currentTarget.value);
            }}
          />
          <Button
            type="submit"
            loading={loading}
            style={{
              background:
                "linear-gradient(97.89deg, #4C53FF 2.31%, #7B4CFF 100.81%) !important",
            }}
          >
            Get Early Access
          </Button>
        </>
      )}
      <Alert
        type={showAlert.type}
        show={showAlert.show}
        message={showAlert.message}
      />
    </form>
  );
};

export default WaitlistForm;
