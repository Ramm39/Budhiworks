"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    need: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("https://formsubmit.co/ajax/buddhiworks@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "(not provided)",
          need: formData.need || "(not provided)",
          message: formData.message,
          _subject: `Contact form: ${formData.name}`,
        }),
      });
      const data = await res.json();
      if (data.success === "true") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", need: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      {/* Subtle background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[750px] h-[450px] pointer-events-none opacity-0 dark:opacity-100"
        style={{
          background: "radial-gradient(circle, rgba(79, 125, 243, 0.04) 0%, transparent 70%)",
          filter: "blur(95px)",
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10 w-full overflow-x-hidden">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 w-full overflow-x-hidden"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base bg-white dark:bg-dark-tile border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-200 touch-manipulation"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base bg-white dark:bg-dark-tile border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-200 touch-manipulation"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Company (Optional) */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company <span className="text-gray-400 dark:text-gray-600 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base bg-white dark:bg-dark-tile border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-200 touch-manipulation"
              placeholder="Your company"
            />
          </div>

          {/* What best describes your need? */}
          <div className="w-full overflow-x-hidden">
            <label htmlFor="need" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              What best describes your need? <span className="text-gray-400 dark:text-gray-600 font-normal">(optional)</span>
            </label>
            <select
              id="need"
              name="need"
              value={formData.need}
              onChange={handleChange}
              className="w-full max-w-full px-4 py-3 text-base bg-white dark:bg-dark-tile border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-200 touch-manipulation appearance-none overflow-hidden text-ellipsis"
              style={{
                maxWidth: '100%',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              <option value="" style={{ maxWidth: '100%' }}>Select an option</option>
              <option value="new-product" style={{ maxWidth: '100%' }}>New product</option>
              <option value="existing-system" style={{ maxWidth: '100%' }}>Existing system improvement</option>
              <option value="internal-tools" style={{ maxWidth: '100%' }}>Internal tools</option>
              <option value="consultation" style={{ maxWidth: '100%' }}>General consultation</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base bg-white dark:bg-dark-tile border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-200 resize-none touch-manipulation"
              placeholder="Tell us about your idea, challenge, or what you're looking to build..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 sm:pt-4">
            <CTAButton type="submit" disabled={isSubmitting} />
            {submitStatus === "success" && (
              <p className="mt-3 text-sm text-green-600 dark:text-green-400 text-center">
                Message sent. We&apos;ll respond soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400 text-center">
                Something went wrong. Please try again or email buddhiworks@gmail.com.
              </p>
            )}
            {submitStatus === "idle" && (
              <p className="mt-3 sm:mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                We&apos;ll respond thoughtfully.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
