"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { sendContactEmail } from "@/actions/sendContactEmail";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type FormValues = {
  fullName: string;
  email: string;
  social: string;
  message: string;
};

const ContactFormOne = () => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await sendContactEmail({
        fullName: values.fullName,
        email: values.email,
        social: values.social,
        purpose: values.message,
      });

      if (res.success) {
        setIsSent(true);
        toast.success("Message launched successfully!");
        reset();
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center max-w-2xl mx-auto w-full px-4 md:px-0 min-h-125">
      <AnimatePresence mode="wait">
        {!isSent ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              x: 100,
              y: -100,
              rotate: 5,
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            }}
            className="w-full space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <input
                  {...register("fullName", {
                    required: "Please enter your name",
                  })}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors text-base md:text-xl font-light placeholder:opacity-90"
                />
                {errors.fullName && (
                  <span className="text-xs text-destructive">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  type="text"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors text-xl font-light placeholder:opacity-90"
                />
                {errors.email && (
                  <span className="text-xs text-destructive">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <input
                {...register("social", {
                  required: false,
                })}
                placeholder="LinkedIn or X Profile URL (Optional)"
                className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors text-xl font-light placeholder:opacity-90"
              />
              {errors.social && (
                <span className="text-xs text-destructive">
                  {errors.social.message}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <textarea
                {...register("message", { required: "Please share a message" })}
                rows={2}
                placeholder="What are you looking to build?"
                className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-primary transition-colors text-xl font-light resize-none placeholder:opacity-90"
              />
              {errors.message && (
                <span className="text-xs text-destructive">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="pt-6">
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="flex items-center gap-4 text-2xl font-serif group disabled:opacity-50"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <span className="w-12 h-12 flex items-center justify-center border border-foreground/20 rounded-full group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </motion.form>
        ) : (
          /* SUCCESS STATE */
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-serif uppercase tracking-tight">
                Got it!
              </h2>
              <p className="text-muted-foreground max-w-xs">
                Your message has been launched. I&apos;ll get back to you within
                24 hours.
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsSent(false)}
              className="mt-4 gap-2 opacity-60 hover:opacity-100"
            >
              <RefreshCcw className="w-4 h-4" aria-hidden="true" />
              Send another
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactFormOne;
